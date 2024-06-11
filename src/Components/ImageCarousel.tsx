import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface ImageCarouselProps {
  images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [imageIdx, setImageIdx] = useState(0) // manage which photo is showing
  const [animate, setAnimate] = useState(false)

  const handlePrev = () => {
    setAnimate(true)
    setImageIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setAnimate(true)
    setImageIdx((prevIdx) => (prevIdx + 1) % images.length)
  }

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timer)
    }
  }, [animate])

  return (
    <section className="project-picture relative flex-shrink-0 overflow-hidden p-2">
      <div
        className={`image-wrapper w-full ${animate ? 'animate-bounceIn' : ''}`}
      >
        <img
          src={images[imageIdx]}
          alt="Project photo"
          className="w-full rounded object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
          >
            <IoIosArrowForward size={30} />
          </button>
        </>
      )}
    </section>
  )
}

export default ImageCarousel
