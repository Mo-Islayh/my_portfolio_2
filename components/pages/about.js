import { about } from "../../content"

const About = () => {
  return (
    <section
      className="w-full"
      style={{
        minHeight: "calc(100vh - 96px - 232px)",
      }}
    >
      <div className={classNames.sectionRapper}>
        <div className="text-left">
          <h1 className={classNames.mainText}>
            Hi! {"I'm"} Mohammad Islayh 👋
          </h1>
          {about.map((note, _id) => (
            <p key={_id} className={classNames.descriptionText}>
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

const classNames = {
  sectionRapper:
    "w-full h-full px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4",
  mainText:
    "  text-2xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-3xl sm:leading-10",
  descriptionText:
    "mx-auto mt-3 text-base leading-7 text-gray-500  max-w-1xl sm:mt-4",
}
