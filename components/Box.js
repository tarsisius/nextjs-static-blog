import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import styles from "@/styles/modules/box.module.css";

export default function Box({ thumbnail, slug, title, categories, excerpt }) {
  return (
    <div className={styles.box}>
      <Link href={"/" + slug} passHref>
        <div className={styles.image}>
          <Image
            src={thumbnail}
            className={styles.real}
            alt={thumbnail}
            layout="fill"
          />
        </div>
      </Link>
      <div className={styles.content}>
        <Link href={"/" + slug} passHref>
          <a>
            <h2 className={styles.heading}>{title}</h2>
          </a>
        </Link>
        <p className={styles.excerpt}>{excerpt}</p>
        <Category categories={categories} />
      </div>
    </div>
  );
}
