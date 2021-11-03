import Head from "next/head";
import { siteName } from "@/libs/config";

export default function Layout({ children, title }) {
  return (
    <div className="layout">
      <Head>
        <title>{title ? `${siteName} | ${title}` : `${siteName}`}</title>
      </Head>
      {children}
    </div>
  );
}
