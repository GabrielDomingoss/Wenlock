import { useEffect, useState } from "react";
import type { IUser } from "../../models/user";
import { api } from "../../services/api";

export function useUserRead(id?: number) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get<IUser>(`/users/${id}`);
        setUser(data);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading };
}
