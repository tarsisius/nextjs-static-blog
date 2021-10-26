import Head from "next/head";
import Category from "@/components/Category";
import { getSlugs, getBySlug } from "@/libs/markdown";
import { siteName } from "@/libs/config";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <>
      <Head>
        <title>
          {siteName} | {post.title}
        </title>
      </Head>
      <main className="detail">
        <Category categories={post.categories} />
        <h1 className="detail__title">{post.title}</h1>
        <article className="detail__article">
          <div
            className="inner"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: getBySlug(params.slug),
    },
  };
}
