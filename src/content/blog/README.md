# Blog Organization

Store posts by publication year:

```text
src/content/blog/
  2026/
    post-slug.mdx
  2027/
    another-post.mdx
```

Public URLs use the filename only, so `src/content/blog/2026/post-slug.mdx` publishes at `/writing/post-slug/`.

Keep filenames unique across years unless you intentionally want to replace an older post URL.

Store images under `public/images/blog/<post-slug>/` and reference them from MDX with root-relative paths:

```mdx
![Diagram of the workflow](/images/blog/post-slug/diagram.png)
```

Add a hero image to frontmatter when you want it to appear on the writing list, article page, and social previews:

```yaml
heroImage: "/images/blog/post-slug/hero.jpg"
heroAlt: "Short description of the image."
```

The writing index is pagination-ready. Page 1 is `/writing/`; additional pages are generated as `/writing/page/2/`, `/writing/page/3/`, and so on once there are enough posts.
