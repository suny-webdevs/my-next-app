"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

// export const metadata = {
//   title: "Blogs",
//   description: "Blogs page",
// }

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    const { data } = await axios("blogs.json")
    setBlogs(data)
  }

  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`blog/${blog.slug}`}
            className="p-4 rounded-md w-full border-2 hover:border-white border-green-500 hover:text-white text-green-500"
          >
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
