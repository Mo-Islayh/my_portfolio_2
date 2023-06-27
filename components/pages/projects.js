import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { Posts } from "../../content"

const Projects = () => {
  const router = useRouter()
  const id = router.query.id
  const postArray = Posts.filter((p) => p.id == id)
  const post = postArray[0]

  return (
    <section
      className="w-full  flex  justify-center items-center"
      style={{
        minHeight: "calc(100vh - 96px - 232px)",
      }}
    >
      <div className="  md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center w-full h-full px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4">
        <div className="flex relative ">
          {post && (
            <Image
              src={post?.img}
              width={600}
              height={350}
              objectFit={"cover"}
              alt={post?.title}
              className="rounded-3xl"
            />
          )}
        </div>

        <h1 className="text-3xl mt-10">{post?.title}</h1>

        <p className="text-base font-medium text-gray-700 mt-10 border-dotted rounded-xl p-5 border-gray-400 border-2">
          {post?.description}
        </p>

        <div className="mt-10 w-full">
          {post?.tags.map((tag, _id) => (
            <span key={_id} className={classNames.tagsInSidePosts}>
              {tag}
            </span>
          ))}
        </div>

        {post?.notes.length !== 0 && (
          <div className="mt-10 w-full">
            {post?.notes.map((note, _id) => (
              <p
                key={_id}
                className="text-left text-base font-medium text-gray-700   "
              >
                ** {note}
              </p>
            ))}
          </div>
        )}

        <div className="text-xl md:text-4xl mt-10 text-blue-800 font-bold">
          CHECK OUT THE PROJECT 👇
        </div>

        <div className=" text-base text-gray-700 mt-10 w-full h-full">
          <div className="bg-[#374151] text-[#e5e7eb] px-4 py-3 text-sm rounded-t-xl">
            hey.js
          </div>
          <div className="bg-[#1F2937] py-5 px-2 rounded-b-xl">
            <div className=" ml-6">
              <span className="text-[#a9fff8]"> if</span>
              <span className="text-[#D9A9FF]"> {"("}</span>
              <span className="text-[#e5e7eb]"> you want</span>
              <span className="text-[#FFE484]"> to</span>
              <span className="text-[#e5e7eb]"> preview</span>
              <span className="text-[#D9A9FF]"> {")"}</span>
              <span className="text-[#D9A9FF]"> {"{"}</span>
            </div>
            <div className=" ml-12">
              <span className="text-[#a9fff8]"> return</span>

              <span className="text-[#B5F4A5]">
                {" 👉️ "}
                <a
                  href={post?.webSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {post?.webSite}
                </a>
              </span>
            </div>
            <div className=" ml-6">
              <span className="text-[#D9A9FF]"> {"}"}</span>
              <span className="text-[#a9fff8]"> else</span>
              <span className="text-[#D9A9FF]"> {"{"}</span>
            </div>
            <div className=" ml-12">
              <span className="text-[#a9fff8]"> return</span>
              <span className="text-[#B5F4A5]">
                {" "}
                {"check other projects 🤗"}
              </span>
            </div>
            <div className=" ml-6">
              <span className="text-[#D9A9FF]"> {"}"}</span>
            </div>
          </div>
        </div>

        <div className="text-xl md:text-4xl mt-10 text-blue-800 font-bold">
          WATCH A VIDEO ABOUT IT 👇
        </div>

        <div className="w-full mt-10 ">
          <iframe
            className="w-full  "
            height={480}
            src={post?.youtubeVid}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Projects
const classNames = {
  sectionRapper:
    "flex justify-center items-center w-full h-full px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4",
  mainText:
    "  text-2xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-3xl sm:leading-10",
  descriptionText:
    "mx-auto mt-3 text-base leading-7 text-gray-500  max-w-1xl sm:mt-4",
  tagsInSidePosts:
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-50 text-gray-800 mr-2",
}
