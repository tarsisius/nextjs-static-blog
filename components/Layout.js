import Head from "next/head";
import { siteName } from "@/libs/config";
import styles from "@/styles/modules/layout.module.css";

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title ? `${siteName} | ${title}` : `${siteName}`}</title>
      </Head>
      {children}
    </div>
  );
}
