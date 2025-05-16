import { ChevronLeft, ChevronRight } from "lucide-react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef } from "react"

const cars = [
  { img: "/audi.jpg", alt: "Audi Q8" },
  { img: "/volvo.png", alt: "Volvo V90" },
  { img: "/lex.png", alt: "Lexus LX570" },
]

export default function ImportStats() {
  const sliderRef = useRef(null)
  const [ref, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1 },
      },
    },
  })

  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
              Более 200 автомобилей<br />привезено за 2022
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Проверяем всю историю обслуживания, владения и ДТП с помощью платных сервисов, созданных для профессиональных продавцов автомобилей.
            </p>
            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-semibold text-sm sm:text-base">
              Оставить заявку
            </button>
          </div>
          <div className="bg-white border border-primary px-6 py-4 rounded-xl text-left max-w-sm w-full shadow-sm">
            <p className="text-sm text-gray-700">Мы помогли сэкономить клиентам около</p>
            <p className="text-2xl font-bold text-primary">240 000 000 ₽</p>
          </div>
        </div>

        <div className="relative">
          <div ref={ref} className="keen-slider">
            {cars.map((car, idx) => (
              <div key={idx} className="keen-slider__slide">
                <img
                  src={car.img}
                  alt={car.alt}
                  className="rounded-xl w-full h-[240px] sm:h-[320px] object-cover"
                />
              </div>
            ))}
          </div>

         
          <button
            onClick={() => instanceRef.current?.prev()}
             className="absolute -left-8 sm:-left-12 top-[45%] sm:top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
             className="absolute -right-8 sm:-right-12 top-[45%] sm:top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
