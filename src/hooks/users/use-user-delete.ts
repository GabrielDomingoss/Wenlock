import { useState } from "react";
import { api } from "../../services/api";

export function useUserDelete() {
  const [loading, setLoading] = useState(false);

  const deleteUser = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/users/${id}`);
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading };
}
