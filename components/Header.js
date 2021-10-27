import Link from "next/link";
import { siteName } from "@/libs/config";

export default function Header() {
  return (
    <header>
      <Link href="/" passHref>
        <div className="header__logo">
          <div className="logo">{siteName}</div>
        </div>
      </Link>
    </header>
  );
}
