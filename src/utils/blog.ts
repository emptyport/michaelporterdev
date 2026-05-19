import type { CollectionEntry } from "astro:content";

export const POSTS_PER_PAGE = 6;

export type BlogPost = CollectionEntry<"blog">;

export function sortPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getPageCount(totalPosts: number) {
  return Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
}

export function getPagePosts(posts: BlogPost[], pageNumber: number) {
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}
