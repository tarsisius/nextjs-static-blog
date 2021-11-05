import fs from "fs";
import path from "path";
import prism from "prismjs";
import matter from "gray-matter";
import marked, { setOptions } from "marked";
import { dir } from "@/libs/config";

export function getPosts() {
  return fs
    .readdirSync(dir)
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const post = path.join(dir, file);
      const source = fs.readFileSync(post, "utf8");
      const { data } = matter(source);
      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => (a.date > b.date ? "-1" : "1"));
}

export function getSlugs() {
  return fs.readdirSync(dir).map((file) => {
    const slug = file.replace(/\.md$/, "");
    return {
      params: {
        slug,
      },
    };
  });
}

export function getBySlug(slug) {
  const post = path.join(dir, `${slug}.md`);
  const source = fs.readFileSync(post, "utf8");
  const { data, content } = matter(source);
  setOptions({
    highlight: (code, lang) => {
      return prism.languages[lang]
      ? prism.highlight(code, prism.languages[lang], lang)
      : code;
    },
    gfm: true,
  });
  
  const html = marked(content);
  return {
    slug,
    html,
    ...data,
  };
}

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
