import { useState } from "react";
import { api } from "../../services/api";
import type { IUser } from "../../models/user";

export function useUserUpdate() {
  const [loading, setLoading] = useState(false);

  const updateUser = async (id: string, payload: IUser): Promise<IUser> => {
    try {
      setLoading(true);
      const { data } = await api.put<IUser>(`/users/${id}`, payload);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading };
}
