import Head from "next/head";
import Box from "@/components/Box";
import Pagination from "@/components/Pagination";
import { getCategories, getByCategory } from "@/libs/markdown";
import { siteName,perPage } from "@/libs/config";

export default function Category({ posts, category, totalPages, currentPage }) {
  return (
    <>
     <Head>
        <title>{siteName}|{category} </title>
      </Head>
      <a className="identation">#{category}</a>
      <section className="post-list">
        {posts.map((post, i) => (
          <Box key={i} {...post} />
        ))}
      </section>

      <Pagination currentPage={currentPage} totalPages={totalPages} category={category} />
    </>
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
