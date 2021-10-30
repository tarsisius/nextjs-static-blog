import Link from "next/link";
import styles from "@/styles/modules/pagination.module.css";

export default function Pagination({ currentPage, totalPages, category }) {
  if (totalPages === 1) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const prevFirst = category ? "/kategori/" + category : "/";
  const prevPage = category
    ? "/kategori/" + category + "/" + (currentPage - 1)
    : "/halaman/" + (currentPage - 1);
  const nextPage = category
    ? "/kategori/" + category + "/" + (currentPage + 1)
    : "/halaman/" + (currentPage + 1);

  const numPages = (i) => {
    if (i === 0) return category ? "/kategori/" + category : "/";
    return category
      ? "/kategori/" + category + "/" + (i + 1)
      : "/halaman/" + (i + 1);
  };

  const classButton = (i) => {
    return i + 1 === currentPage ? styles.button_active : styles.button;
  };
  return (
    <div className={styles.pagination}>
      <ul className={styles.inner}>
        {!isFirst && (
          <li className={styles.button}>
            <Link href={currentPage === 2 ? prevFirst : prevPage} passHref>
              <a className={styles.head}>Previous</a>
            </Link>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <li className={classButton(i)} key={i}>
            <Link href={numPages(i)} passHref>
              <a>{i + 1}</a>
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className={styles.button}>
            <Link href={nextPage} passHref>
              <a className={styles.head}>Next</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
