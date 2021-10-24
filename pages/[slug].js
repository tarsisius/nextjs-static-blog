import Image from "next/image";
import Category from "@/components/Category";
import { getSlugs, getBySlug } from "@/libs/markdown";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <>
      <div className="detail__image">
        <div className="back"></div>
        <div className="real">
          <Image
            src={post.coverImage}
            layout="fill"
            className="image"
            alt={post.coverImage}
          />
        </div>
      </div>
      <section className="detail">
        <h1 className="detail__title">{post.title}</h1>
        <Category categories={post.categories} />
        <article className="detail__article">
          <div
            className="inner"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </section>
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
