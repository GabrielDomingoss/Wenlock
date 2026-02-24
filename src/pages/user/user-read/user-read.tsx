import {
  Button,
  Card,
  CardContent,
  Divider,
  FilledInput,
  Grid,
  IconButton,
} from "@mui/material";
import styles from "./user-read.module.css";
import { ArrowBack } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";
import { useUserRead } from "../../../hooks/users/use-user-read";

export function UserRead() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useUserRead(Number(id));

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
          <h1 className={styles.userEditTitle}>Visualizar Usuário</h1>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Grid container flexDirection={"column"}>
            <div className={styles.userInfo}>
              <div className={styles.cardTopicsSection}>
                <p className={styles.cardTopic}>Dados do Usuário</p>

                <Divider sx={{ flex: 1 }} />
              </div>

              <Grid container spacing={"1.688rem"} mb={2}>
                <Grid size={6}>
                  <FilledInput
                    disabled
                    className="input"
                    value={user?.nome}
                    fullWidth
                  />
                </Grid>

                <Grid size={6}>
                  <FilledInput
                    disabled
                    className="input"
                    value={user?.matricula}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={"1.688rem"}>
                <Grid size={6}>
                  <FilledInput
                    disabled
                    className="input"
                    value={user?.email}
                    fullWidth
                  />
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
              <Button variant="contained" onClick={() => navigate("/users")}>
                Voltar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
}
