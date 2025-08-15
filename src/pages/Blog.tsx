import React from "react";

const posts = [
  {
    title: "How We Build Modern Websites",
    date: "2025-08-10",
    excerpt: "Discover our process for creating robust, beautiful digital experiences.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    title: "Digital Marketing Trends in Zambia",
    date: "2025-07-28",
    excerpt: "Stay ahead with the latest strategies for local and global reach.",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
  }
];

const Blog = () => (
  <section className="py-20 px-4 bg-background">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Blog</h2>
      <div className="space-y-8">
        {posts.map((post, idx) => (
          <article key={idx} className="bg-card rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-orange-accent mb-2">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
            <p className="text-foreground mb-4">{post.excerpt}</p>
            <button className="text-green-glow font-semibold hover:underline">Read More</button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
