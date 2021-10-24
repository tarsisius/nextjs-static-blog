import Link from "next/link";

export default function Category({ categories }) {
  return (
    <div className="category__component">
      {categories.map((category, i) => (
        <Link href={"/kategori/" + category.toLowerCase()} key={i} passHref>
          <a>
            <span className="category">#{category}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
