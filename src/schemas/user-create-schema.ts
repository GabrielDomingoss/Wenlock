import z from "zod";

export const userCreateSchema = z
  .object({
    nome: z
      .string()
      .min(1, "Nome obrigatório")
      .max(50, "O nome deve ter no máximo 50 caractéres"),
    email: z
      .email("Email inválido")
      .max(40, "O e-mail deve ter no máximo 40 caractéres"),
    matricula: z
      .string()
      .min(1, "Matricula obrigatória")
      .regex(/^\d+$/, "Apenas números"),
    password: z
      .string()
      .max(6)
      .regex(/^[A-Za-z0-9]{6}$/, "A senha deve ter 6 caracteres alfanuméricos"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type UserCreateFormData = z.infer<typeof userCreateSchema>;
