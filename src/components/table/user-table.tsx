import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import type { IUser } from "../../models/user";
import styles from "./user-table.module.css";
import { useNavigate } from "react-router-dom";

interface UserTableProps {
  users: IUser[];
  onDelete: (id?: number) => void;
}

export const UserTable = ({ users, onDelete }: UserTableProps) => {
  const navigate = useNavigate();

  return (
    <Table className={styles.table}>
      <TableHead className={styles.tableHead}>
        <TableRow className={styles.headerRow}>
          <TableCell className={styles.headerCell}>Nome</TableCell>
          <TableCell className={styles.headerCell} align="right">
            Ações
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className={styles.bodyRow}>
            <TableCell>{user.nome}</TableCell>

            <TableCell align="right">
              <Tooltip title="Visualizar">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/users/${user.id}`)}
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Editar">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/users/edit/${user.id}`)}
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Excluir">
                <IconButton size="small" onClick={() => onDelete(user.id)}>
                  <Delete fontSize="small" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
