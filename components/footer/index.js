import React from "react"
import Link from "next/link"
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material"

const Footer = () => {
  const classNames = {
    buttonsFooter:
      "text-base text-gray-500 hover:text-gray-900  font-medium cursor-pointer",
    iconContainerFooter: "inline-block text-gray-400 hover:text-gray-900",
    iconSocialFooter: "w-6 h-6 text-gray-400 hover:text-gray-500",
  }

  return (
    <div className="bg-white shadow mt-60 mv-stop">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2 ">
            <Link href="/">
              <button className={classNames.buttonsFooter}>Home</button>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about">
              <button className={classNames.buttonsFooter}>About</button>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contacts">
              <button className={classNames.buttonsFooter}>Contacts</button>
            </Link>
          </div>

          {/* <div className="px-5 py-2">
            <Link href="/terms-and-conditions">
              <button className={classNames.buttonsFooter}>
                Terms & Conditions
              </button>
            </Link>
          </div> */}
        </div>

        <div className=" flex justify-center mt-8 space-x-6 ">
          <a
            className={classNames.iconContainerFooter}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className={classNames.iconSocialFooter} />
          </a>
          <a
            className={classNames.iconContainerFooter}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={classNames.iconSocialFooter} />
          </a>
          <a
            className={classNames.iconContainerFooter}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className={classNames.iconSocialFooter} />
          </a>
        </div>

        <p className="mt-8 text-base text-center text-gray-500">
          Copyright © 2022 MO Islayh
        </p>
      </div>
    </div>
  )
}

export default Footer
