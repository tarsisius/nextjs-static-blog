import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";

export default function Box({ slug, coverImage, title, categories, excerpt }) {
  return (
    <div className="box">
      <div className="box__card">
        <Link href={"/" + slug} passHref>
          <div className="card__image">
            <Image
              src={coverImage}
              layout="fill"
              className="image"
              alt={coverImage}
            />
          </div>
        </Link>
        <div className="card__content">
          <Category categories={categories} />
          <Link href={"/" + slug} passHref>
            <a>
              <h3 className="heading">{title}</h3>
            </a>
          </Link>
          <span className="excerpt">{excerpt}</span>
        </div>
      </div>
      {/* <div className="box__card back"></div> */}
    </div>
  );
}
