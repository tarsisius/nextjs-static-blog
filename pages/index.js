import Box from "@/components/Box";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { getPosts } from "@/libs/data";
import { perPage } from "@/libs/config";

export default function Page({ posts, totalPages, currentPage }) {
  return (
    <Layout>
      <main className="list">
        {posts.map((post, i) => (
          <Box key={i} {...post} />
        ))}
      </main>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Layout>
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
