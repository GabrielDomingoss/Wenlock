import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import styles from "./user-list.module.css";
import { Add, Search } from "@mui/icons-material";
import { CustomPagination } from "../../../components/pagination/custom-pagination";
import { useState } from "react";
import { UserTable } from "../../../components/table/user-table";
import { useUserList } from "../../../hooks/users/use-user-list";
import { useDebounce } from "../../../hooks/common/useDebounce";
import { useNavigate } from "react-router-dom";
import { useUserDelete } from "../../../hooks/users/use-user-delete";

export function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(search, 500);
  const { users, total, loading, refetch } = useUserList(
    page,
    rowsPerPage,
    debouncedSearch,
  );
  const isEmpty = users.length === 0;
  const { deleteUser } = useUserDelete();

  const handleDeleteUser = async (id?: number) => {
    await deleteUser(String(id));
    await refetch();
  };

  return (
    <section>
      <h1 className={styles.userListTitle}>Usuários</h1>

      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        marginBottom={"1rem"}
      >
        <Grid size={6}>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Pesquisar"
            className={styles.userListFilter}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid size={6} display={"flex"} justifyContent={"end"}>
          <Button
            size="large"
            variant="contained"
            className={styles.createUserButton}
            onClick={() => navigate("/users/create")}
          >
            <Add></Add>
            Cadastrar Usuário
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <Card className={styles.userCard}>
          <CardContent>
            <div className={styles.noResultsSection}>
              <h2 className={styles.noResultsMessage}>Carregando...</h2>
            </div>
          </CardContent>
        </Card>
      ) : isEmpty ? (
        <Card className={styles.userCard}>
          <CardContent>
            <div className={styles.noResultsSection}>
              <h2 className={styles.noResultsMessage}>
                Nenhum Usuário Registrado
              </h2>
              <span className={styles.noResultsHint}>
                Clique em "Cadastrar Usuário" para começar a cadastrar
              </span>
            </div>
          </CardContent>
        </Card>
      ) : (
        <UserTable users={users} onDelete={handleDeleteUser} />
      )}

      <div className={styles.paginationWrapper}>
        <CustomPagination
          totalItems={total}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(newPage: number) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(value: number) => {
            setRowsPerPage(value);
            setPage(0);
          }}
        />
      </div>
    </section>
  );
}
