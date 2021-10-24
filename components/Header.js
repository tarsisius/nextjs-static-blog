import Link from "next/link";
import { siteName, siteDesc } from "@/libs/config";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <Link href="/" passHref>
          {siteName}
        </Link>
      </div>
      <div className="header__desc">{siteDesc}</div>
    </header>
  );
}
