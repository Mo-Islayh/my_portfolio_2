import Image from "next/image"
import Baloons from "../../images/baloons.svg"
const Contacts = () => {
  return (
    <section
      className="w-full container flex justify-center"
      style={{
        minHeight: "calc(100vh - 96px - 232px)",
      }}
    >
      <div className={classNames.sectionRapper}>
        <div className="text-left ">
          <h1 className={classNames.mainText}>Hey, lets contact 👋</h1>
          <p className={classNames.descriptionText}>mojo4business@gmail.com</p>
        </div>
        <div className="animate-bounce   ">
          <Image
            src={Baloons}
            width={250}
            height={250}
            objectFit={"cover"}
            alt="contact me"
          />
        </div>
      </div>
    </section>
  )
}

export default Contacts

const classNames = {
  sectionRapper:
    "flex justify-center items-center w-full h-full px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4 flex-wrap-reverse md:flex-nowrap ",
  mainText:
    "text-2xl  leading-9 tracking-tight text-gray-800 sm:text-3xl sm:leading-10",
  descriptionText:
    "mx-auto mt-3 text-base leading-7 text-gray-500  max-w-1xl sm:mt-4 bg-gray-100 rounded p-5",
}
