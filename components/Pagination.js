import Link from "next/link";

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
    return i + 1 === currentPage ? "_active" : "";
  };
  return (
    <div className="pagination">
      <ul className="inner">
        {!isFirst && (
          <li className="button">
            <Link href={currentPage === 2 ? prevFirst : prevPage} passHref>
              <a className="head">Previous</a>
            </Link>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            className={"button" + classButton(i) + " number"}
            key={i}
          >
            <Link href={numPages(i)} passHref>
              <a>{i + 1}</a>
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className="button">
            <Link href={nextPage} passHref>
              <a className="head">Next</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
