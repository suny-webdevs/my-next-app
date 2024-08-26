import axios from "axios"
import Image from "next/image"

const getMeal = async (id) => {
  const { data } = await axios(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  return data.meals[0]
}

export const generateMetadata = async ({ params }) => {
  const { data } = await axios(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
  )

  return {
    title: data.meals[0].strMeal,
    description: data.meals[0].strInstructions,
  }
}

const Page = async ({ params }) => {
  const { strMeal, strCategory, strInstructions, strMealThumb } = await getMeal(
    params.idMeal
  )

  return (
    <div className="flex justify-center p-5">
      <div className="container mx-auto border border-gray-500 p-5 rounded-xl">
        <h1 className="text-5xl font-bold">
          {strMeal}{" "}
          <span className="bg-green-500/50 px-2 py-1 rounded-md text-sm text-white ml-3">
            {strCategory}
          </span>
        </h1>
        <div className="w-full py-5">
          <hr />
        </div>
        <div className="w-full mx-auto h-[500px] my-5">
          <Image
            src={strMealThumb}
            alt="Meal photo"
            width={500}
            height={500}
            sizes="100vw"
            objectFit="cover"
            style={{
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="w-full py-5">
          <hr />
        </div>
        <p className="text-lg">{strInstructions}</p>
      </div>
    </div>
  )
}

export default Page
