+++
title = "ARk"
layout = "work"
type = "work"
+++

![Stuff](/img/work/ark.png)

[ark.modelsbymike3d.com](https://ark.modelsbymike3d.com)

## The project

**_Deprecated_**

I created this site as a progressive web app (PWA) to let people save their favorite Snapchat lenses. Snapchat has since added this feature to their app, so this site is no longer maintained. Snap also updated the format of the pages that I was scraping information from, so saving lenses is broken. But it was a fun project to build.

To save a Snapchat lens (AR filter), you paste the URL and the backend scrapes the lens info (name and author) and saves it to the DB. The user can add tags to help them search for the lens later.

You can view a [demo of v1 here](https://youtu.be/MAHvLNoYWrQ).

## The tech

The first iteration of the app was a server-side rendered page, but then I rewrote it with a React frontend and Node/Express/MongoDB on the backend. The page can be installed as a PWA and uses IndexedDB for full offline support (although Snapchat requires a data connection, so the offline support isn't all that useful).

## What can be improved

The site didn't get much use when I launched it and I didn't really know how to promote it very well. It has been rendered obselete by changes to the Snapchat app, so I'll probably retire the site at some point. To keep it online I just need to update the web-scraping portion of the code.
