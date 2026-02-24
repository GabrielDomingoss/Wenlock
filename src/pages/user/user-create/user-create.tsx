import {
  Button,
  Card,
  CardContent,
  Divider,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import styles from "./user-create.module.css";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { useUserCreate } from "../../../hooks/users/use-user-create";
import {
  userCreateSchema,
  type UserCreateFormData,
} from "../../../schemas/user-create-schema";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function UserCreate() {
  const navigate = useNavigate();
  const { createUser, loading } = useUserCreate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserCreateFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      nome: "",
      matricula: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: UserCreateFormData) => {
    await createUser({
      nome: data.nome,
      email: data.email,
      matricula: Number(data.matricula),
      password: data.password,
    });

    navigate("/users");
  };

  return (
    <section>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        gap={"2rem"}
        marginBottom={"0.375rem"}
      >
        <Grid>
          <IconButton onClick={() => navigate("/users")}>
            <ArrowBack fontSize={"large"} />
          </IconButton>
        </Grid>
        <Grid>
          <h1 className={styles.userCreateTitle}>Cadastro de Usuário</h1>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container flexDirection={"column"}>
              <div className={styles.userInfo}>
                <div className={styles.cardTopicsSection}>
                  <p className={styles.cardTopic}>Dados do Usuário</p>

                  <Divider sx={{ flex: 1 }} />
                </div>

                <Grid container spacing={"1.688rem"} mb={2}>
                  <Grid size={6}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      error={!!errors.nome}
                    >
                      <Controller
                        name="nome"
                        control={control}
                        render={({ field }) => (
                          <FilledInput
                            placeholder="Insira o nome completo"
                            className="input"
                            {...field}
                          />
                        )}
                      />
                      <Grid
                        container
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <FormHelperText>{errors.nome?.message}</FormHelperText>
                        <FormHelperText className={styles.inputHint}>
                          * Máx. 50 caracteres
                        </FormHelperText>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid size={6}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      error={!!errors.matricula}
                    >
                      <Controller
                        name="matricula"
                        control={control}
                        render={({ field }) => (
                          <FilledInput
                            placeholder="Insira a matrícula"
                            className="input"
                            {...field}
                          />
                        )}
                      />
                      <Grid
                        container
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <FormHelperText>
                          {errors.matricula?.message}
                        </FormHelperText>
                        <FormHelperText className={styles.inputHint}>
                          * Min 4 Letras | * Máx. 50 caracteres
                        </FormHelperText>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={"1.688rem"}>
                  <Grid size={6}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      error={!!errors.email}
                    >
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <FilledInput
                            placeholder="Insira o e-mail"
                            className="input"
                            {...field}
                          />
                        )}
                      />
                      <Grid
                        container
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <FormHelperText>{errors.email?.message}</FormHelperText>
                        <FormHelperText className={styles.inputHint}>
                          * Máx. 40 caracteres
                        </FormHelperText>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>

              <div>
                <div className={styles.cardTopicsSection}>
                  <p className={styles.cardTopic}>Dados de Acesso</p>

                  <Divider sx={{ flex: 1 }} />
                </div>

                <Grid container spacing={"1.688rem"} mb={2}>
                  <Grid size={6}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      error={!!errors.password}
                    >
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <FilledInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            className="input"
                            {...field}
                            endAdornment={
                              <InputAdornment
                                position="start"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.inputAdornment}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </InputAdornment>
                            }
                          />
                        )}
                      />
                      <FormHelperText>
                        {errors.password?.message}
                      </FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid size={6}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      error={!!errors.confirmPassword}
                    >
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                          <FilledInput
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Repetir Senha"
                            className="input"
                            {...field}
                            endAdornment={
                              <InputAdornment
                                position="start"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className={styles.inputAdornment}
                              >
                                {showConfirmPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </InputAdornment>
                            }
                          />
                        )}
                      />
                      <FormHelperText>
                        {errors.confirmPassword?.message}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid
              container
              display={"flex"}
              justifyContent={"end"}
              spacing={"1.688rem"}
            >
              <Grid>
                <Button variant="outlined" onClick={() => navigate("/users")}>
                  Cancelar
                </Button>
              </Grid>

              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading || !isValid}
                >
                  {loading ? "Salvando..." : "Cadastrar"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
