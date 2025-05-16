import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const cars = [
  { title: "Toyota RAV4 2022", img: "/rav4.jpg", mileage: "5 700 км", engine: "2.0", power: "149 л.с.", transmission: "Автомат", marketPrice: "3 300 000 ₽", ourPrice: "2 700 000 ₽" },
  { title: "Audi Q5 2021", img: "/q5.jpg", mileage: "5 700 км", engine: "2.0", power: "149 л.с.", transmission: "Автомат", marketPrice: "3 250 000 ₽", ourPrice: "2 500 000 ₽" },
  { title: "Honda CR-V 2021", img: "/crv.jpg", mileage: "5 700 км", engine: "2.0", power: "149 л.с.", transmission: "Автомат", marketPrice: "2 900 000 ₽", ourPrice: "2 300 000 ₽" },
  { title: "Mazda CX-5 2020", img: "/cx5.jpg", mileage: "4 000 км", engine: "2.5", power: "165 л.с.", transmission: "Автомат", marketPrice: "3 100 000 ₽", ourPrice: "2 600 000 ₽" },
  { title: "Kia Sportage 2022", img: "/sportage.jpg", mileage: "3 000 км", engine: "1.6", power: "150 л.с.", transmission: "Автомат", marketPrice: "2 950 000 ₽", ourPrice: "2 400 000 ₽" },
  { title: "Hyundai Tucson 2021", img: "/tucson.jpg", mileage: "6 000 км", engine: "2.0", power: "150 л.с.", transmission: "Автомат", marketPrice: "3 100 000 ₽", ourPrice: "2 550 000 ₽" },
]

export default function ImportedCarsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3">Какие авто привозим?</h2>
        <p className="text-gray-600 mb-10">Привозим авто не старше 7 лет на момент растаможки.</p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {cars.map((car, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="bg-white rounded-2xl shadow-sm p-5 text-left flex flex-col border border-gray-100 h-full">
                  <img
                    src={car.img}
                    alt={car.title}
                    className="rounded-xl mb-4 w-full h-[200px] object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-4">{car.title}</h3>

                  <div className="space-y-2 text-sm">
                    {[["Пробег", car.mileage], ["Объем двигателя", car.engine], ["Мощность", car.power], ["Коробка", car.transmission]].map(
                      ([label, value], i) => (
                        <div key={i} className="flex justify-between text-gray-600">
                          <span>{label}</span>
                          <span className="font-semibold text-black whitespace-nowrap">{value}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-6 text-sm">
                    <div className="flex justify-between mb-2">
                      <span>Цена на рынке РФ</span>
                      <span className="font-medium whitespace-nowrap">{car.marketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Цена “под ключ”</span>
                      <span className="text-primary font-extrabold text-lg whitespace-nowrap">
                        {car.ourPrice}
                      </span>
                    </div>
                  </div>

                  <button className="bg-primary hover:bg-primaryHover text-white text-sm py-3 w-full rounded-md font-semibold mt-auto">
                    Оставить заявку
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Стрелки */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Прогресс бар */}
          <div className="mt-6 flex justify-center gap-3">
            {Array.from({ length: cars.length }).map((_, i) => (
              <div
                key={i}
                className={`h-[4px] w-8 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
