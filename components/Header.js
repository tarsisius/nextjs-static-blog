import Link from "next/link";
import { siteName } from "@/libs/config";
import styles from "@/styles/modules/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <div className={styles.real}>{siteName}</div>
        </div>
      </Link>
    </header>
  );
}
