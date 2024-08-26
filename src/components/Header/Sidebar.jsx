"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathName = usePathname()

  const links = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ]

  return (
    <div>
      <nav className="w-full bg-green-500 text-black py-3 px-5 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-xl font-bold uppercase"
        >
          My Next App
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
      </nav>
    </div>
  )
}

export default Sidebar
