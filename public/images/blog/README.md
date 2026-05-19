# Blog Images

Store blog images here, ideally in a folder named after the post slug:

```text
public/images/blog/agentic-workflows/
  diagram.png
```

Reference images from MDX with root-relative paths:

```mdx
![Diagram of the workflow](/images/blog/agentic-workflows/diagram.png)
```

Astro copies everything in `public/` into the built `dist/` folder.
