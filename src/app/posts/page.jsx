import axios from "axios"
import Link from "next/link"

const getPosts = async () => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts")
  return data
}

export const metadata = {
  title: "Posts",
  description: "Posts page",
}

const PostsPage = async () => {
  const postsData = await getPosts()

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {postsData.map((post) => (
        <Link
          href={`/posts/${post.id}`}
          key={post.id}
          className="border border-green-500 text-green-500 p-2"
        >
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </Link>
      ))}
    </div>
  )
}

export default PostsPage
