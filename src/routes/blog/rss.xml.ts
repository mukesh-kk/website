/*
 * RSS Feed for www.gitpod.io/blog
 */

import RSS from "rss";

// This function loads all blog post metadata from the file system.
// It returns a list of objects, each containing the metadata for a blog post.
// The list is sorted by date, with the most recent post first.

const loadBlogPosts = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        try {
          const { metadata } = await page();
          const filename = path.split("/").pop();
          return { ...metadata, filename };
        } catch (e) {
          console.error(e);
        }
      }
    )
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return posts;
};

export const get = async () => {
  const posts = await loadBlogPosts();

  /*
    The RSS feed is a JavaScript object that contains information about the blog feed.
    It has a title, description, copyright, and other properties.
    It also has an array of categories that can be used to filter the blog feed.
    The pubDate property indicates when the feed was last updated.
    */

  const feed = new RSS({
    title: "Gitpod Blog - News, ideas and background stories",
    description:
      "The latest news, articles, and opinions around developer experience and remote development in the cloud.",
    copyright: `Copyright © ${new Date().getFullYear()} Gitpod`,
    ttl: 1800,
    feed_url: "https://www.gitpod.io/blog",
    site_url: "https://www.gitpod.io",
    image_url: "https://www.gitpod.io/images/media-image.jpg",
    language: "en",
    categories: [
      "Gitpod updates",
      "Developer experience",
      "Engineering",
      "Company building",
    ],
    pubDate: new Date().toUTCString(),
    generator: "Gitpod",
  });

  // This code creates an RSS feed. It does so by iterating over all posts and
  // adding each post to the feed.

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `https://www.gitpod.io/blog/${post.filename.replace(".md", "")}`,
      guid: `https://www.gitpod.io/blog/${post.filename.replace(".md", "")}`,
      categories: post.tags,
      date: post.date,
      enclosure: {
        url: `https://www.gitpod.io/images/blog/${post.slug}/${post.image}`,
        type: "image/webp",
      },
      author: post.author,
    });
  });

  return {
    headers: {
      "Content-Type": "application/xml",
    },
    body: feed.xml(),
  };
};
