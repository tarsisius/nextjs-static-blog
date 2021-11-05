import Link from "next/link";
import Category from "@/components/Category";
import { formatDate } from "@/libs/format";

export default function Box({
  slug,
  title,
  categories,
  excerpt,
  date,
  author,
  coverImage,
}) {
  return (
    <div className="box">
      <Link href={"/" + slug} passHref>
        <a>
          <img className="box_image" src={coverImage} alt="Thumbnail" />
        </a>
      </Link>
      <div className="box_content">
        <Link href={"/" + slug} passHref>
          <a>
            <h2 className="box_title">{title}</h2>
          </a>
        </Link>
        <p className="box_excerpt">{excerpt}</p>
        <span className="box_info">
          {formatDate(date)} | {author} | <Category categories={categories} />
        </span>
      </div>
    </div>
  );
}
