import { useState } from "react";
import Link from "next/link";
import Category from "@/components/Category";

export default function Box({ slug, title, categories, excerpt }) {
  const [cat, showCat] = useState(false);

  return (
    <div className="box">
      <Link href={"/" + slug} passHref>
        <a>
          <h3 className="heading">{title}</h3>
        </a>
      </Link>
      <div className="content">
        <div className="changable">
          {cat && <Category categories={categories} />}
          <p className="excerpt">{excerpt}</p>
        </div>
        <div className="icon">
          <span className="icon__child" onClick={() => showCat((e) => !e)}>
            <img className="inner" src="/assets/svg/hash.svg" alt="Kategori" />
          </span>
        </div>
      </div>
    </div>
  );
}
