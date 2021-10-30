import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/libs/markdown";
import { perPage } from "@/libs/config";
import Layout from "@/components/Layout";
import styles from "@/styles/modules/page.module.css";

export default function Page({ posts, totalPages, currentPage }) {
  return (
    <Layout>
      <main className={styles.post__list}>
        {posts.map((post, i) => (
          <Box key={i} {...post} />
        ))}
      </main>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Layout>
  );
}

export function getStaticPaths() {
  const pages = Math.ceil(getPosts().length / perPage);
  const paths = Array.from(Array(pages - 1).keys()).map((i) => ({
    params: { page: (i + 2).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const posts = getPosts();
  const pageIndex = parseInt((params && params.page) || 1) - 1;
  const totalPages = Math.ceil(posts.length / perPage);
  const startIndex = pageIndex * perPage;
  const endIndex = (pageIndex + 1) * perPage;
  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      pageIndex,
      currentPage: pageIndex + 1,
      totalPages,
    },
  };
}
