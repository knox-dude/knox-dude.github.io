function About() {
  return (
    <div className=" items-center justify-between flex sm:flex-row flex-col m-2 p-2">
      <div className=" min-w-0"></div>
      <div className="sm:w-2/3 sm:mr-4">
        <h1 className=" text-4xl lg:text-6xl xl:text-8xl font-bold tracking-tight text-slate-700 ">Andrew Knox</h1>
        <h2 className="mt-3 text-lg lg:text-2xl xl:text-6xl font-medium tracking-tight text-slate-600">Junior Fullstack Dev</h2>
        <p className="mt-4 max-w-sm l:max-w-xl xl:max-w-2xl xl:text-2xl leading-normal">I am a junior developer who builds pleasing frontend interfaces and the APIs that interact with them. My tech stack includes Typescript, React, TailwindCSS, and more.</p>
      </div>
      <div className=" max-w-md xl:max-w-lg h-auto p-2 m-2">
        <img className="rounded-xl" src="photos/andrew-photo.jpeg" alt="" />
      </div>

    </div>
  )
}

export default About;