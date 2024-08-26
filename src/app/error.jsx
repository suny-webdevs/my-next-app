"use client"
import { TiInfoOutline } from "react-icons/ti"

const Error = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <TiInfoOutline className="text-8xl text-red-500 bg-red-100/30 px-3 py-6 rounded-full" />
        <h1 className="text-4xl mt-5 tracking-wider">Something went wrong!</h1>
      </div>
    </div>
  )
}

export default Error
