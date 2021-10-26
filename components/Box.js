import Link from "next/link";
import Category from "@/components/Category";

export default function Box({ slug, title, categories, excerpt }) {
  return (
    <div className="box">
        <Category categories={categories} />
        <Link href={"/" + slug} passHref>
          <a>
            <h3 className="heading">{title}</h3>
          </a>
        </Link>
        <span className="excerpt">{excerpt}</span>
      </div>
  );
}
