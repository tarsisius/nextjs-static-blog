import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";

export default function Box({ slug, coverImage, title, categories, excerpt }) {
  return (
    <div className="box">
      <div className="box__image">
        <div className="back" />
        <div className="real">
          <Link href={"/" + slug} passHref>
            <a>
              <Image
                src={coverImage}
                layout="fill"
                className="image"
                alt={coverImage}
              />
            </a>
          </Link>
        </div>
      </div>
      <Category categories={categories} />
      <div className="box__content">
        <Link href={"/" + slug} passHref>
          <a>
            <h3 className="heading">{title}</h3>
          </a>
        </Link>
        <span className="excerpt">{excerpt}</span>
      </div>
    </div>
  );
}
