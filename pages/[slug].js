import Image from "next/image";
import Category from "@/components/Category";
import Layout from "@/components/Layout";
import { MDXRemote } from "next-mdx-remote";
import { getSlugs, getBySlug } from "@/libs/data";
import Rendered from "@/components/Rendered";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <Layout title={post.title}>
      <main className="detail">
        <div className="detail_image">
          <Image
            src={post.coverImage}
            layout="fill"
            alt={post.coverImage}
            priority="false"
          />
        </div>
        <article className="detail_article">
          <h1 className="title">{post.title}</h1>
          <span className="inner">
            <MDXRemote {...post.html} components={Rendered} />
          </span>
          <Category categories={post.categories} />
        </article>
      </main>
    </Layout>
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
      post: await getBySlug(params.slug),
    },
  };
}
