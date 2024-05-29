function About() {
  return (
    <div className=" items-center justify-between flex sm:flex-row flex-col m-2 p-2">
      <div className=" min-w-0"></div>
      <div>
        <h1 className=" text-4xl lg:text-6xl xl:text-9xl font-bold tracking-tight text-slate-700 ">Andrew Knox</h1>
        <h2 className="mt-3 text-lg lg:text-2xl xl:text-7xl font-medium tracking-tight text-slate-600">Junior Fullstack Dev</h2>
        <p className="mt-4 max-w-sm l:max-w-md xl:text-2xl leading-normal">I am a junior developer who builds pleasing frontend interfaces and the APIs that interact with them. My tech stack includes Typescript, React, TailwindCSS, and more.</p>
      </div>
      <div className=" max-w-lg h-auto p-2 m-2">
        <img src="photos/andrew-photo.jpeg" alt="" />
      </div>

    </div>
  )
}

export default About;