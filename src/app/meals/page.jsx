"use client"

import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const MealsPage = () => {
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)
  const [meals, setMeals] = useState([])

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const loadMeals = async () => {
    try {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      )
      setMeals(data.meals)
    } catch (error) {
      console.log(error.message)
      setError(true)
    }
  }

  useEffect(() => {
    loadMeals()
  }, [search])

  return (
    <div className="p-5">
      <div className="container mx-auto">
        <div>
          <p className="text-center">Choose meals of you choice by searching</p>
          <h1 className="text-4xl md:text-5xl text-center font-bold uppercase mt-2">
            Choose your meals
          </h1>
          <input
            onChange={searchHandler}
            defaultValue={search}
            type="search"
            placeholder="Search meals here by meals name"
            id="search"
            className="text-2xl tracking-wider focus:outline-none p-5 w-full mt-5 md:mt-10 bg-transparent border-2 border-white focus:border-green-500"
          />
        </div>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {(error || !meals) && "Type meals name..."}
          {meals &&
            !error &&
            meals?.map((meal) => (
              <Link
                href={`meals/${meal?.idMeal}`}
                key={meal?.idMeal}
                className="border border-white hover:border-green-500 p-5 h-full overflow-hidden rounded-md"
              >
                <div className="relative">
                  <Image
                    src={meal?.strMealThumb}
                    alt="meal photo"
                    width={295}
                    height={300}
                    className="mt-5"
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                  <span className="bg-green-500 text-sm px-2 py-1 rounded text-white ml-2 absolute top-2 right-10">
                    {meal?.strCategory}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mt-3">{meal?.strMeal} </h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MealsPage
