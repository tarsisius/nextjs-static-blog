import Category from "@/components/Category";
import Layout from "@/components/Layout";
import { getSlugs, getBySlug } from "@/libs/data";
import { formatDate } from "@/libs/format";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <Layout title={post.title}>
      <main className="detail">
        <div className="detail_image_container">
          <img className="detail_image" src={post.coverImage} />
        </div>
        <h1 className="detail_title">{post.title}</h1>
        <span className="detail_info">
          {formatDate(post.date)} | {post.author} |{" "}
          <Category categories={post.categories} />
        </span>
        <div
          className="detail_inner"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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

export function getStaticProps({ params }) {
  return {
    props: {
      post: getBySlug(params.slug),
    },
  };
}
