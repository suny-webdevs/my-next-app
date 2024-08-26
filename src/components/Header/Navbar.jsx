"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Blogs",
      path: "/blog",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]

  const loginHandler = () => {
    alert("Proceed to dashboard")
    router.push("/dashboard")
  }

  if (pathName.includes("dashboard") || pathName.includes("profile")) return

  return (
    <div className="flex items-center justify-center">
      <nav className="w-full bg-green-500 text-black py-3 px-5 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-xl font-bold uppercase"
        >
          {pathName.includes("meals") ? "My Meal App" : "My First Next App"}
        </Link>
        <ul className="flex items-center gap-5 font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathName === link.path && "text-white"
              } hover:text-white`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={loginHandler}
          className="hover:bg-white text-black hover:text-[#131313] font-medium px-7 py-1"
        >
          Login
        </button>
      </nav>
    </div>
  )
}

export default Navbar
