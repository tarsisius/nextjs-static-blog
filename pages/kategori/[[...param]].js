import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import { getCategories, getByCategory } from "@/libs/markdown";
import { perPage } from "@/libs/config";
import Layout from "@/components/Layout";
import styles from "@/styles/modules/page.module.css";

export default function Category({ posts, category, totalPages, currentPage }) {
  return (
    <Layout title={category}>
      <a className={styles.identation}>#{category}</a>
      <main className={styles.post__list}>
        {posts.map((post, i) => (
          <Box key={i} {...post} />
        ))}
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        category={category}
      />
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getCategories().flatMap((category) => {
    const pages = Math.ceil(getByCategory(category).length / perPage);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { param: [category] },
          }
        : {
            params: { param: [category, (page + 1).toString()] },
          }
    );
  });
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const queries = params.param;
  const [slug, page] = [queries[0], queries[1]];

  const posts = getByCategory(slug);

  const pageIndex = parseInt(page || 1) - 1;
  const totalPages = Math.ceil(posts.length / perPage);

  const startIndex = pageIndex * perPage;
  const endIndex = (pageIndex + 1) * perPage;
  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      pageIndex,
      currentPage: pageIndex + 1,
      totalPages,
      category: slug,
    },
  };
}
