import { compile, morph } from 'svg-path-morph'
import { useState, useEffect, useRef, useMemo } from 'react'
import waves from 'data/svgWaves.json'

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, []) // Run once on mount
}

function AnimatedWaves()  {
  const [percentage, setPercentage] = useState<number>(0)
  const increment = useRef<number>(0.002) // Animation increment
  const currWave = useRef<number>(1)

  useAnimationFrame(() => {
    setPercentage((prevPercentage) => {
      let newPercentage = prevPercentage + increment.current
      if (newPercentage >= 1 || newPercentage <= 0) {
        currWave.current = (currWave.current + 1) % waves.waves.length
        newPercentage = 0
      }
      return newPercentage
    })
  })

  // Adjusted to correctly cycle through the wave paths
  const d1Index = (currWave.current - 1 + waves.waves.length) % waves.waves.length;
  const d2Index = currWave.current % waves.waves.length;
  const d1 = waves.waves[d1Index].paths
  const d2 = waves.waves[d2Index].paths

  const compiled = useMemo(() => {
    return d1.map((path, i) => compile([path, d2[i]]))
  }, [d1, d2])

  const morphed = useMemo(() => {
    return compiled.map(compiledPath => morph(compiledPath, [1 - percentage, percentage]))
  }, [compiled, percentage])

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className='absolute -z-20'
    >
      <path id="g1wave1" d={morphed[0]} fill="#6c4116"></path>
      <path id="g1wave2" d={morphed[1]} fill="#7f4d18"></path>
      <path id="g1wave3" d={morphed[2]} fill="#93591a"></path>
      <path id="g1wave4" d={morphed[3]} fill="#a36b31"></path>
      <path id="g1wave5" d={morphed[4]} fill="#b27e47"></path>
    </svg>
  )
}

export default AnimatedWaves
