+++
title = "AR Bootcamp Tutorials"
layout = "work"
type = "work"
+++

![Stuff](/img/work/learnarbootcamp.png)

[learn.arbootcamp.com](https://learn.arbootcamp.com)

[Git repo](https://github.com/modelsbymike3d/arbootcamp)

## The project

The main AR Bootcamp site utilizes various guides, compilations, and blog posts to function as a landing page. The `learn` subdomain holds all the actual tutorials that I create. I wanted to provide fully written versions in addition to the video tutorials so that they can serve as easy reference and also to provide scripts, images, or other files.

## The tech

The focus of this site is purely on learning. I went with the [Hasura Gitbook starter](https://github.com/hasura/gatsby-gitbook-starter) because I liked the way it was laid out with the tutorial list on the left and the in-page navigation on the right. For the newsletter subscription I use a Netlify function to create the subscriber via the EmailOctopus API.

The original template orders the pages by a numerical prefix on the filenames, but that makes for an ugly URL. I modified the template to keep using the prefixes to order the pages, but then I strip the prefix from the URL (I also had to edit the Next/Previous button code to use the correct ordering). I also updated the rightside nav to use `h2` tags rather than `h1` tags (supposedly this is much better for SEO).

## What can be improved

Overall the site seems pretty good to me. There is lots of room for the content to grow without requiring any site changes. If anything I might rewrite the site using Nextjs. Gatsby's startup times are pretty slow and I have been enjoying building a different side project with Next, so it's something I'm considering.
