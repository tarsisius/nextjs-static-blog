import Link from "next/link";
import { siteName, siteDesc } from "@/libs/config";

export default function Header() {
  return (
    <header>
      <Link href="/" passHref>
        <div className="header__logo">
          <div className="logo">{siteName}</div>
        </div>
      </Link>
      <div className="header__desc">{siteDesc}</div>
    </header>
  );
}
