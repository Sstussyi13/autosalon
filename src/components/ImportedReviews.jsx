import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    id: 1,
    image: "/lexus.jpg",
    title: "Lexus GX 460 с COPART",
    price: "1 800 000 ₽",
  },
  {
    id: 2,
    image: "/lexus.jpg",
    title: "Mazda CX-5 из США",
    price: "1 600 000 ₽",
  },
  {
    id: 3,
    image: "/lexus.jpg",
    title: "Toyota RAV4 гибрид",
    price: "2 100 000 ₽",
  },
]

export default function ReviewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: false,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-10">
          Обзоры привезенных авто
        </h2>

        {/* Слайдер */}
        <div className="relative review-slider">
          <div ref={sliderRef} className="keen-slider">
            {videos.map((video, idx) => (
              <div
                key={video.id}
                className={`keen-slider__slide transition-all duration-500 ${
                  idx === currentSlide ? "scale-100 opacity-100 z-10" : "scale-95 opacity-60"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-[220px] sm:h-[260px] object-cover"
                  />
                  {idx === currentSlide && (
                    <button className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                        ▶
                      </div>
                    </button>
                  )}
                </div>

                {idx === currentSlide && (
                  <div className="text-left mt-4 px-4">
                    <p>
                      Привезли <strong>{video.title}</strong>{" "}
                      <span className="whitespace-nowrap">
                        за <span className="text-primary font-bold">{video.price}</span>
                      </span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Стрелки */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-primary text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-primary text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <ChevronRight />
          </button>

          {/* Прогресс-бар */}
          <div className="mt-6 flex justify-center gap-3">
            {videos.map((_, i) => (
              <div
                key={i}
                className={`h-[4px] w-8 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Telegram блок */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-[#f7f9fb] p-6 md:p-10 rounded-2xl shadow">
          <img
            src="/bmw-telegram.png"
            alt="BMW Telegram"
            className="w-full max-w-[480px] rounded-xl object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Посмотрите реальные истории в нашем <br />
              <span className="text-primary">Telegram-канале</span>
            </h3>
            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-primary hover:bg-primaryHover text-white text-sm font-semibold px-6 py-2.5 rounded-md transition"
            >
              Перейти в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
