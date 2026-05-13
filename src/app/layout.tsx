import Link from "next/link";
import styles from "./styles/layout.module.css";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles["header"]}>
          <div className={styles["header-inner"]}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className={styles["logo"]}>Eco</div>
              <span className={styles["brand"]}>EcoMonitor</span>
            </div>
            <nav className={styles["nav"]}>
              <Link href="/" className={styles["nav-link"]}>Home</Link>
              <Link href="/about" className={styles["nav-link"]}>About</Link>
              <Link href="/pollutants" className={styles["nav-link"]}>Pollutants</Link>
            </nav>
          </div>
        </header>
        <main className={styles["main"]}>
          <div className={styles["center-title"]}>Eco Ukraine</div>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}