import Link from "next/link";
import Dynamic from "next/dynamic";

const Toggle = Dynamic(() => import("@/components/Toggle"), {
  ssr: false,
});
import { siteName } from "@/libs/config";

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <Link href="/" passHref>
          <div className="header_logo">
            <span>{siteName}</span>
          </div>
        </Link>
        <div className="header_nav">
          <Toggle />
        </div>
      </div>
    </header>
  );
}
