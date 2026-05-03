import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaImage } from 'react-icons/fa'

interface ImageCarouselProps {
  images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [imageIdx, setImageIdx] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handlePrev = () => {
    setImageLoaded(false)
    setImageIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setImageLoaded(false)
    setImageIdx((prevIdx) => (prevIdx + 1) % images.length)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    setAnimate(true)
  }

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timer)
    }
  }, [animate])

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center bg-light-dark dark:bg-dark h-48 text-dark/30 dark:text-light/20">
        <div className="flex flex-col items-center gap-2">
          <FaImage size={40} />
          <span className="text-sm">Screenshots coming soon</span>
        </div>
      </div>
    )
  }

  return (
    <section className="project-picture relative flex-shrink-0 overflow-hidden p-2">
      <div className={`image-wrapper w-full ${animate ? 'animate-bounceIn' : ''}`}>
        <img
          src={images[imageIdx]}
          alt="Project screenshot"
          className="w-full rounded object-cover"
          onLoad={handleImageLoad}
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 transform rounded-full bg-white dark:bg-dark-light p-2 shadow-md hover:bg-light transition-colors"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full bg-white dark:bg-dark-light p-2 shadow-md hover:bg-light transition-colors"
          >
            <IoIosArrowForward size={24} />
          </button>
        </>
      )}
    </section>
  )
}

export default ImageCarousel
