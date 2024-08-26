import axios from "axios"

const getPostDetails = async (id) => {
  const { data } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}

export const generateMetadata = async ({ params }) => {
  const { data } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )

  return {
    title: `${data.id}. ${data.title}`,
    description: data.body,
  }
}

const Page = async ({ params }) => {
  const { id, title, body } = await getPostDetails(params.id)

  return (
    <div className="p-5 w-full flex justify-center">
      <div className="w-[800px] border border-gray-500 rounded-xl p-5">
        <h1 className="text-5xl font-bold">
          {id}. {title}
        </h1>
        <p className="mt-10">{body}</p>
      </div>
    </div>
  )
}

export default Page
