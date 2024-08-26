"use client"

import { useState } from "react"

export default function Home() {
  const [os, setOs] = useState("")

  const systemInfoHandler = () => {
    if (navigator.userAgent.indexOf("Windows") !== -1)
      return setOs("Windows OS")
    if (navigator.userAgent.indexOf("Mac") !== -1) return setOs("Mac OS")
    if (navigator.userAgent.indexOf("Linux") !== -1) return setOs("Linux OS")
    if (navigator.userAgent.indexOf("Android") !== -1)
      return setOs("Android OS")
    if (navigator.userAgent.indexOf("X11") !== -1) return setOs("UNIX OS")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-3xl md:text-5xl text-center uppercase font-bold">
        Welcome to my next app
      </h1>
      <button
        onClick={systemInfoHandler}
        className="border border-transparent hover:border-gray-200 px-6 py-2"
      >
        Check OS
      </button>
      <p className="text-3xl text-green-500 font-bold">{os}</p>
    </main>
  )
}
