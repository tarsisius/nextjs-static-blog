import Head from "next/head";
import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/libs/markdown";
import { siteName, perPage } from "@/libs/config";

export default function Page({ posts, totalPages, currentPage }) {
  return (
    <>
      <Head>
        <title>{siteName}</title>
      </Head>
      <section className="post-list">
        {posts.map((post, i) => (
          <Box key={i} {...post} />
        ))}
      </section>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const pageIndex = 0;
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
