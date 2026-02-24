import { useState } from "react";
import WenlockBrand from "../../assets/brand.svg";
import WenlockBrandInitials from "../../assets/brandInitials.svg";
import { ChartIcon } from "../../assets/chartIcon.tsx";
import { UserSquareIcon } from "../../assets/userSquareIcon.tsx";
import { UserIcon } from "../../assets/userIcon.tsx";
import {
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import styles from "./sidebar.module.css";
import { NavLink, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const [manualOpen, setManualOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const isUsersRoute = location.pathname.startsWith("/users");
  const open = isUsersRoute || manualOpen;

  return (
    <section
      className={`${styles.sidebar} ${
        expanded ? styles.expanded : styles.collapsed
      }`}
    >
      <div
        className={styles.toggleButton}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? (
          <ChevronLeft className={styles.toggleIcon} />
        ) : (
          <ChevronRight className={styles.toggleIcon} />
        )}
      </div>

      {expanded ? (
        <img src={WenlockBrand} alt="logo Wenlock" className={styles.brand} />
      ) : (
        <img
          src={WenlockBrandInitials}
          alt="Iniciais da logo Wenlock"
          className={styles.brandCollapsed}
        />
      )}

      <List>
        <NavLink to="/" end className={styles.navLink}>
          {({ isActive }) => (
            <ListItemButton
              className={`${styles.listItemButton} ${isActive && styles.active} ${
                !expanded && styles.iconOnly
              }`}
            >
              <ListItemIcon>
                <ChartIcon className={styles.icon} />
              </ListItemIcon>

              {expanded && <ListItemText primary="Home" />}
            </ListItemButton>
          )}
        </NavLink>

        <ListItemButton
          onClick={() => setManualOpen((prev) => !prev)}
          className={`${styles.listItemButton} ${
            !expanded ? styles.iconOnly : ""
          }`}
        >
          <ListItemIcon>
            <UserSquareIcon className={styles.icon} />
          </ListItemIcon>
          {expanded && (
            <ListItemText className={styles.listItemDropdown}>
              Controle de acesso
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemText>
          )}
        </ListItemButton>
        <Collapse in={open}>
          <NavLink to="/users" className={styles.navLink}>
            {({ isActive }) => (
              <ListItemButton
                className={`${styles.listItemButton} ${styles.listItemChild} ${isActive ? styles.active : ""}`}
              >
                <ListItemIcon>
                  <UserIcon className={styles.icon} />
                </ListItemIcon>

                {expanded && <ListItemText primary="Usuários" />}
              </ListItemButton>
            )}
          </NavLink>
        </Collapse>
      </List>

      <div className={styles.copyright}>
        {expanded ? (
          <Grid>
            <Grid>© WenLock</Grid>
            <Grid>Power by Conecthus</Grid>
            <Grid>V 0.0.0</Grid>
          </Grid>
        ) : (
          "V 0.0.0"
        )}
      </div>
    </section>
  );
};
