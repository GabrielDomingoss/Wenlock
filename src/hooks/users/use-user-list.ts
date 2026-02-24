import { useCallback, useEffect, useState } from "react";
import type { IUser } from "../../models/user";
import { api } from "../../services/api";

export function useUserList(page: number, rowsPerPage: number, search: string) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [total, setTotal] = useState(100);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get<IUser[]>(`/users`, {
        params: {
          _page: page + 1,
          _limit: rowsPerPage,
          ...(search && { q: search }),
        },
      });

      setUsers(response.data);

      const totalFromHeader = response.headers["x-total-count"];
      setTotal(totalFromHeader ? Number(totalFromHeader) : 0);
    } catch (error) {
      console.error("Erro ao carregar usuários", error);
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage, search]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, total, loading, refetch: fetchUsers };
}
