import { motion } from 'framer-motion'

function About() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-[#0a0f1e] dark:via-[#111827] dark:to-[#0a1628]" />
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col sm:flex-row items-center gap-12 w-full">
        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <motion.h1
            className="font-display font-extrabold text-5xl lg:text-7xl xl:text-8xl gradient-text leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Andrew Knox
          </motion.h1>
          <motion.h2
            className="mt-3 font-display font-semibold text-xl lg:text-2xl xl:text-3xl text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Software Developer @ KAG
          </motion.h2>
          <motion.p
            className="text mt-5 max-w-xl text-base lg:text-lg leading-relaxed mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm a Software Developer on the Integrations team at KAG, building the systems that let
            external companies send orders directly into our logistics platform. I work in C# / .NET
            day-to-day and do freelance AI development on the side.
          </motion.p>
        </div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="gradient-ring w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <img
              className="w-full h-full rounded-full object-cover"
              src="photos/andrew-photo.jpeg"
              alt="Andrew Knox"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
