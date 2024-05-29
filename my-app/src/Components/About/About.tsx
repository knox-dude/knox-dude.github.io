function About() {
  return (
    <div className=" items-center justify-between flex sm:flex-row flex-col m-2 p-2">
      <div className=" min-w-0"></div>
      <div>
        <h1 className=" text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl">Andrew Knox</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-600 sm:text-xl">Junior Fullstack Dev</h2>
        <p className="mt-4 max-w-xs leading-normal">I am a junior developer who builds pleasing frontend interfaces and the APIs that interact with them. My tech stack includes Typescript, React, TailwindCSS, and more.</p>
      </div>
      <div className=" max-w-76 lg:max-w-96 h-auto">
        <img src="photos/andrew-photo.jpeg" alt="" />
      </div>

    </div>
  )
}

export default About;