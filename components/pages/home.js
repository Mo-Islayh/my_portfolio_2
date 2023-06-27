import { ElectricBolt } from "@mui/icons-material"
import Image from "next/image"
import { Posts, Categories } from "../../content"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"

import PicOfMe from "../../images/me.jpg"
const Home = () => {
  const router = useRouter()

  const [modifaiedPosts, setModifaiedPosts] = useState(Posts)

  const categorisHandler = (cat) => {
    if (router.query.q == cat) {
      router.push(`/`)
      setModifaiedPosts(Posts)
    } else {
      router.push(`/?q=${cat}`)
      const newPosts = Posts.filter((post) => post.tags.includes(cat))
      setModifaiedPosts(newPosts)
    }
  }

  return (
    <section
      className="w-full"
      style={{
        minHeight: "calc(100vh - 96px - 232px)",
      }}
    >
      <div className={classNames.sectionRapper}>
        {/* header */}
        <div className={classNames.sectionRapperTwo}>
          <div className="text-center">
            <div className="rounded-xl">
              <Image
                src={PicOfMe}
                alt={"Picture of Me"}
                width={200}
                height={200}
                objectFit="cover"
                loading="lazy"
                className="rounded-full"
              />
            </div>
            <h1 className={classNames.mainText}>
              <span>Mo Islayh</span>
              <span className="ml-2">
                <ElectricBolt fontSize="large" />
              </span>
            </h1>
            <h2 className={classNames.descriptionText}>
              I do Web Development and Mobile Apps.
            </h2>
          </div>
          {/* Categoties */}
          <div className={classNames.categoriesRapper}>
            {Categories.map((cat, _id) => (
              <button
                key={_id}
                onClick={() => {
                  categorisHandler(cat)
                }}
                className={`${classNames.buttonsCategories} ${
                  router.query.q === cat
                    ? classNames.buttonsCategoriesActive
                    : classNames.buttonsCategoriesUnActive
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center font-bold text-indigo-700 bg-gray-50 uppercase  ">
            here are some of my builds , using the above tech 👇
          </div>
          {/* Posts */}
          <div className={classNames.postsRapper}>
            <div className={classNames.gridPosts}>
              {modifaiedPosts.map((post, _id) => (
                <Link key={_id} href={`/projects/${post.id}`}>
                  <div className={classNames.singlePostRapper}>
                    <div className="w-full h-full">
                      <div className="w-full h-full">
                        <Image
                          src={post.img}
                          alt={post.title}
                          width={600}
                          height={350}
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={classNames.postsTextsSection}>
                      <div className="flex flex-col flex-1">
                        <a className="block hover:underline">
                          <h3 className={classNames.postsTitle}>
                            {post.title}
                          </h3>
                        </a>
                        <p className={classNames.postsDescription}>
                          {post.description}
                        </p>
                        <div className="mt-auto">
                          <span className="ml-1">
                            {post.tags.map((tag, _id) => (
                              <span
                                key={_id}
                                className={classNames.tagsInSidePosts}
                              >
                                {tag}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

const classNames = {
  sectionRapperTwo: "px-4  pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4",
  categoriesRapper: "flex justify-center items-center flex-wrap mb-6 mt-3",
  sectionRapper:
    "w-full h-full px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4",
  buttonsCategories:
    "mt-6 px-2 py-1 text-sm inline-flex items-center border border-transparent leading-6 font-medium rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50 transition ease-in-out duration-150 mt-2 mr-1 filter-category-btn  ",
  buttonsCategoriesActive:
    " text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700",
  buttonsCategoriesUnActive:
    " text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300",
  mainText:
    "flex justify-center items-center text-2xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-3xl sm:leading-10",
  descriptionText:
    "mx-auto mt-3 text-lg leading-7 text-gray-500 md:text-xl max-w-1xl sm:mt-4",

  gridPosts:
    "grid w-full max-w-lg gap-5 mt-12 md:grid-cols-1 md:max-w-lg lg:grid-cols-2 lg:max-w-6xl 2xl:grid-cols-3 2xl:max-w-7xl",
  postsRapper:
    "flex flex-col items-center justify-center lg:items-start lg:flex-row ",
  postsTextsSection: "flex flex-col justify-between flex-1 p-6 bg-white",
  tagsInSidePosts:
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-50 text-gray-800 mr-2",
  postsTitle: "mt-2 text-lg font-semibold leading-7 text-gray-900 md:text-xl",
  postsDescription: "my-3 text-base leading-5 text-gray-700 sm:text-base",
  singlePostRapper:
    "flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer",
}
