import Head from "next/head";
import Image from "next/image";
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
          <div className="detail__image">
            <Image
              src={post.coverImage}
              layout="fill"
              className="image"
              alt={post.coverImage}
            />
          </div>
          <article className="detail__article">
            <h1 className="detail__title">{post.title}</h1>
            <Category categories={post.categories} />
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
