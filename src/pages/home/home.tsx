import { Card, CardContent } from "@mui/material";
import WelcomeImg from "../../assets/welcome.svg";

import styles from "./home.module.css";
export function Home() {
  return (
    <section>
      <h1 className={styles.homeTitle}>Home</h1>

      <Card className={styles.homeCard}>
        <CardContent className={styles.homeCardContent}>
          <div className={styles.welcomeSection}>
            <h3 className={styles.welcomeAuthor}>Olá Milena!</h3>
            <span className={styles.welcomeDate}>22, Novembro 2024</span>
            <div className={styles.welcomeMessageSection}>
              <img
                src={WelcomeImg}
                alt="logo de boas vindas com 2 homens"
                className={styles.welcomeImg}
              />
              <div className={styles.welcomeMessage}>Bem vindo ao WenLock!</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
