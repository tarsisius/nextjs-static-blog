import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";

export default function Box({ coverImage, slug, title, categories, excerpt }) {
  return (
    <div className="box">
      <Link href={"/" + slug} passHref>
        <div className="box_image">
          <Image
            src={coverImage}
            alt={coverImage}
            layout="fill"
          />
        </div>
      </Link>
      <div className="box_content">
        <Link href={"/" + slug} passHref>
          <a>
            <h2 className="title">{title}</h2>
          </a>
        </Link>
        <p className="excerpt">{excerpt}</p>
        <Category categories={categories} />
      </div>
    </div>
  );
}
