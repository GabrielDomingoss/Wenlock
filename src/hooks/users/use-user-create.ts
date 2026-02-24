import { useState } from "react";
import { api } from "../../services/api";
import type { IUser } from "../../models/user";

export function useUserCreate() {
  const [loading, setLoading] = useState(false);

  const createUser = async (payload: IUser) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", payload);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading };
}
