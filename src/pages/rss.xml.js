import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postSlug } from "@/utils/postSlug";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Michael Porter",
    description: "Writing on backend systems, AI workflow automation, and software engineering.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${postSlug(post.id)}/`,
      categories: post.data.tags,
      customData: post.data.heroImage
        ? `<enclosure url="${new URL(post.data.heroImage, context.site)}" type="image/jpeg" />`
        : undefined,
    })),
  });
}
