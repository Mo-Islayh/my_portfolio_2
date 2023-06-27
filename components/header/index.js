import { ViewInAr } from "@mui/icons-material"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  const classNames = {
    iconHeader: "text-gray-900 title-font md:mb-0  font-medium",
    buttonsHeader:
      "block px-4 py-2 mx-1 text-lg font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ",
  }

  return (
    <nav className="w-full h-24 flex justify-start items-center ">
      <div className="flex">
        <Link href="/">
          <div className={`${classNames.buttonsHeader}`}>
            <ViewInAr className="" />
          </div>
        </Link>
        <div className="flex">
          <Link href="/">
            <button
              className={`${classNames.buttonsHeader} ${
                router.pathname == "/" ? "bg-gray-100" : ""
              } `}
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              className={`${classNames.buttonsHeader} ${
                router.pathname == "/about" ? "bg-gray-100" : ""
              }`}
            >
              About
            </button>
          </Link>
          <Link href="/contacts">
            <button
              className={`${classNames.buttonsHeader} ${
                router.pathname == "/contacts" ? "bg-gray-100" : ""
              }`}
            >
              Contacts
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
