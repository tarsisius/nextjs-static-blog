import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { serialize } from "next-mdx-remote/serialize";
import { dir } from "@/libs/config";

export function getPosts() {
  return fs
    .readdirSync(dir)
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const post = path.join(dir, file);
      const source = fs.readFileSync(post, "utf8");
      const result = matter(source);

      return {
        slug,
        ...result.data,
      };
    })
    .sort((a, b) => (a.date > b.date ? "-1" : "1"));
}

export function getSlugs() {
  const files = fs.readdirSync(dir);
  const slug = files.map((file) => {
    return {
      params: {
        slug: file.replace(/\.mdx$/, ""),
      },
    };
  });
  return slug;
}

export async function getBySlug(slug) {
  const post = path.join(dir, `${slug}.mdx`);
  const source = fs.readFileSync(post, "utf8");
  const { data, content } = matter(source);

  const html = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });
  return {
    slug,
    html,
    ...data,
  };
}
// export function getBySlug(slug) {
//   const post = path.join(dir, `${slug}.md`);
//   const source = fs.readFileSync(post, "utf8");
//   const result = matter(source);

//   marked.setOptions({
//     highlight: (code, lang) => {
//       return prism.languages[lang]
//         ? prism.highlight(code, prism.languages[lang], lang)
//         : code;
//     },
//   });

//   const html = marked(result.content);
//   return {
//     slug,
//     html,
//     ...result.data,
//   };
// }

export function getCategories() {
  const posts = getPosts();
  const set = new Set();
  posts.forEach((post) => {
    post.categories && post.categories.forEach((c) => set.add(c));
  });
  return Array.from(set);
}

export function getByCategory(category) {
  const posts = getPosts();
  const matchSlug = new Set();
  const matchPost = [];

  posts.forEach((post) => {
    const isMatched = post.categories.find(
      (t) => t.toLowerCase() === category.toLowerCase()
    );
    const isHaveSlug = matchSlug.has(post.slug);
    isMatched && !isHaveSlug & matchPost.push(post);
  });

  return matchPost;
}
