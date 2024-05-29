function About() {
  return (
    <div className=" m-2 flex flex-col items-center justify-between p-2 sm:flex-row">
      <div className="sm:mr-4 sm:w-2/3">
        <h1 className=" text text-4xl font-bold tracking-tight lg:text-6xl xl:text-8xl ">
          Andrew Knox
        </h1>
        <h2 className="text mt-3 text-lg font-medium tracking-tight lg:text-2xl xl:text-6xl">
          Junior Fullstack Dev
        </h2>
        <p className="text mt-4 max-w-sm leading-normal lg:max-w-xl xl:max-w-2xl xl:text-2xl">
          I am a junior developer who builds pleasing frontend interfaces and
          the APIs that interact with them. My tech stack includes Typescript,
          React, TailwindCSS, and more.
        </p>
      </div>
      <div className=" m-2 h-auto max-w-md p-2 xl:max-w-lg">
        <img className="rounded-xl" src="photos/andrew-photo.jpeg" alt="" />
      </div>
    </div>
  )
}

export default About
