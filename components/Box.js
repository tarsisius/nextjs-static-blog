import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import styles from "@/styles/modules/box.module.css";

export default function Box({ slug, coverImage, title, categories }) {
  return (
    <div className={styles.box}>
      <Link href={"/" + slug} passHref>
        <div className={styles.image}>
          <Image
            src={coverImage}
            className={styles.real}
            alt={coverImage}
            layout="fill"
          />
        </div>
      </Link>
      <div className={styles.content}>
        <Link href={"/" + slug} passHref>
          <a>
            <h3 className={styles.heading}>{title}</h3>
          </a>
        </Link>
        <Category categories={categories} />
      </div>
    </div>
  );
}
