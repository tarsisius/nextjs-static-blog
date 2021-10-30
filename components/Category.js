import Link from "next/link";
import styles from "@/styles/modules/category.module.css";

export default function Category({ categories }) {
  return (
    <div className={styles.category}>
      {categories.map((category, i) => (
        <Link href={"/kategori/" + category.toLowerCase()} key={i} passHref>
          <a>
            <span className={styles.child}>#{category}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
