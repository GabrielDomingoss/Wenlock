import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import styles from "./navbar.module.css";
import { useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { LogoutIcon } from "../../assets/logoutIcon";
export const Navbar = () => {
  const [initialUsername] = useState(() => {
    const username = localStorage.getItem("username");
    return username ? username[0].toUpperCase() : "MS";
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  //   const { logout } = useAuth();

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // logout();
    handleClose();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.right}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <IconButton className={styles.avatarWrapper}>
            <Avatar className={styles.avatar}>{initialUsername}</Avatar>

            <span className={styles.arrowIndicator}>
              {open ? (
                <ArrowUpward className={styles.icon} />
              ) : (
                <ArrowDownward className={styles.icon} />
              )}
            </span>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              onMouseEnter: () => setAnchorEl(anchorEl),
              onMouseLeave: handleMouseLeave,
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            className={styles.menu}
          >
            <Box className={styles.menuHeader}>
              <Avatar className={styles.avatarSmall}>MS</Avatar>
              <Box>
                <Typography className={styles.userName}>
                  Milena Santana Borges
                </Typography>
                <Typography className={styles.userEmail}>
                  milena.santana@energy.org.br
                </Typography>
              </Box>
            </Box>

            <Divider />

            <MenuItem onClick={handleLogout} className={styles.logout}>
              <LogoutIcon />
              Sair
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};
