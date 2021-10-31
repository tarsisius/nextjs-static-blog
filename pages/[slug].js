import Image from "next/image";
import Category from "@/components/Category";
import Layout from "@/components/Layout";
import { getSlugs, getBySlug } from "@/libs/markdown";
import styles from "@/styles/modules/page.module.css";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <Layout title={post.title}>
      <main className={styles.detail}>
        <div className={styles.detail__image}>
          <Image
            src={post.thumbnail}
            layout="fill"
            className={styles.image}
            alt={post.thumbnail}
          />
        </div>
        <article className={styles.detail__article}>
          <h1 className={styles.detail__title}>{post.title}</h1>
          <div
            className={styles.inner}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
      post: getBySlug(params.slug),
    },
  };
}
