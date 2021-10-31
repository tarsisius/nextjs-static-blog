import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import prism from "prismjs";
import { folder, dir } from "@/libs/config";

export function getPosts() {
  const files = fs.readdirSync(dir);
  const posts = files.map((file) => {
    const thumbnail = `/${folder}/${file}/thumbnail.jpg`
    const post = path.join(dir, file, "content.md");
    const content = fs.readFileSync(post, "utf8");
    const result = matter(content);
    
    return {
      thumbnail,
      slug: file,
      ...result.data,
    };
  });
  const filtered = posts.sort((a, b) => (a.date > b.date ? "-1" : "1"));
  return filtered;
}

export function getSlugs() {
  const files = fs.readdirSync(dir);
  const slug = files.map((file) => {
    return {
      params: {
        slug: file,
      },
    };
  });
  return slug;
}

export function getBySlug(slug) {
  const thumbnail = `/${folder}/${slug}/thumbnail.jpg`
  const post = path.join(dir, slug, "content.md");
  const content = fs.readFileSync(post, "utf8");
  const result = matter(content);

  marked.setOptions({
    highlight: (code, lang) => {
      return prism.languages[lang]
        ? prism.highlight(code, prism.languages[lang], lang)
        : code;
    },
  });

  const html = marked(result.content);
  return {
    thumbnail,
    slug,
    html,
    ...result.data,
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
