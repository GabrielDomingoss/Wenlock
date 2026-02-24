import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import { Sidebar } from "./sidebar/sidebar";
import styles from "./app-layout.module.css";
export const AppLayout = () => {
  return (
    <section className={styles.layoutMainSection}>
      <Sidebar />

      <div className={styles.layoutContent}>
        <Navbar />

        <main className={styles.layoutMainContent}>
          <Outlet />
        </main>
      </div>
    </section>
  );
};
