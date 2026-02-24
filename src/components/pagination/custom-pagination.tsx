import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import styles from "./custom-pagination.module.css";

interface CustomPaginationProps {
  totalItems: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (value: number) => void;
}

export const CustomPagination = ({
  totalItems,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: CustomPaginationProps) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handleFirst = () => onPageChange(0);
  const handleLast = () => onPageChange(totalPages - 1);
  const handlePrev = () => onPageChange(Math.max(0, page - 1));
  const handleNext = () => onPageChange(Math.min(totalPages - 1, page + 1));

  const isFirstPage = page === 0;
  const isLastPage = page >= totalPages - 1;
  return (
    <Box className={styles.wrapper}>
      <Typography className={styles.total}>
        Total de itens {totalItems}
      </Typography>

      <Box className={styles.controls}>
        <Typography>Itens por página</Typography>

        <Select
          size="small"
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          IconComponent={() => null}
          variant="standard"
          disableUnderline
          className={styles.select}
          sx={{
            minWidth: 0,
            width: "auto",
            "& .MuiSelect-select": {
              padding: "0 4px !important",
              minWidth: "auto !important",
            },
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>

        <IconButton onClick={handleFirst} disabled={isFirstPage}>
          <FirstPage />
        </IconButton>

        <IconButton onClick={handlePrev} disabled={isFirstPage}>
          <ChevronLeft />
        </IconButton>

        <Box className={styles.currentPage}>
          {totalPages === 0 ? 0 : page + 1}
        </Box>

        <IconButton onClick={handleNext} disabled={isLastPage}>
          <ChevronRight />
        </IconButton>

        <IconButton onClick={handleLast} disabled={isLastPage}>
          <LastPage />
        </IconButton>

        <Typography> de {totalPages || 1}</Typography>
      </Box>
    </Box>
  );
};
