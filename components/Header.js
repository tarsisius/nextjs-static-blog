import Link from "next/link";
import { siteName } from "@/libs/config";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" passHref>
        <div className="header_logo">
          <span>{siteName}</span>
        </div>
      </Link>
    </header>
  );
}
