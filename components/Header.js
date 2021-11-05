import Link from "next/link";
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
      </div>
    </header>
  );
}
