const Page = ({ params }) => {
  const { title, description } = blogs.find((blog) => blog.slug == params.slug)

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  )
}

const blogs = [
  {
    slug: "how-to-learn-javascript",
    title: "How to Learn JavaScript Efficiently",
    description:
      "A comprehensive guide on the best practices and resources for mastering JavaScript, the language of the web.",
  },
  {
    slug: "introduction-to-react",
    title: "Introduction to React: A Beginner's Guide",
    description:
      "An introductory blog post for beginners looking to get started with React, a powerful JavaScript library for building user interfaces.",
  },
  {
    slug: "mastering-nodejs",
    title: "Mastering Node.js: Tips and Tricks",
    description:
      "Explore advanced techniques and best practices to become proficient in Node.js, a versatile runtime environment for JavaScript.",
  },
  {
    slug: "web-development-trends-2024",
    title: "Web Development Trends to Watch in 2024",
    description:
      "Stay ahead of the curve with the latest trends and technologies shaping the future of web development in 2024.",
  },
  {
    slug: "building-restful-apis",
    title: "Building RESTful APIs with Express.js",
    description:
      "Learn how to create robust and scalable RESTful APIs using Express.js, a popular web application framework for Node.js.",
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When and How to Use Them",
    description:
      "A detailed comparison of CSS Grid and Flexbox, two powerful layout modules, and how to use them effectively in your web projects.",
  },
  {
    slug: "seo-best-practices",
    title: "SEO Best Practices for Modern Websites",
    description:
      "Discover the key SEO strategies to optimize your website for search engines and improve your online visibility.",
  },
  {
    slug: "introduction-to-mongodb",
    title: "Introduction to MongoDB: A NoSQL Database",
    description:
      "Get started with MongoDB, a popular NoSQL database, and learn how to store and manage data in a flexible, scalable way.",
  },
  {
    slug: "deploying-apps-with-docker",
    title: "Deploying Applications with Docker: A Step-by-Step Guide",
    description:
      "Learn how to containerize and deploy your applications using Docker, a powerful tool for automating the deployment of software.",
  },
  {
    slug: "cybersecurity-basics",
    title: "Cybersecurity Basics: Protecting Your Online Presence",
    description:
      "An essential guide to understanding and implementing basic cybersecurity measures to protect yourself and your website online.",
  },
]

export default Page
