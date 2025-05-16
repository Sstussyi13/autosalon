import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState, useEffect } from "react"

export default function AboutUs() {
  const reviews = [
    {
      text: "Отличная компания! Привезли авто из США быстро и без проблем. Всегда на связи!",
      author: "Александр В.",
      city: "Москва",
    },
    {
      text: "Все четко по договору. Помогли с выбором, взяли на себя доставку и растаможку.",
      author: "Ольга П.",
      city: "Казань",
    },
    {
      text: "Не ожидал такого сервиса. Менеджер на каждом этапе всё объяснял. Рекомендую!",
      author: "Руслан Г.",
      city: "Краснодар",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <>
      {/* О нас */}
      <section className="bg-white py-20 px-4 flex justify-center">
        <div className="relative flex flex-col lg:flex-row items-center max-w-7xl w-full gap-10">
          <div className="w-full lg:w-1/2 lg:translate-x-10">
            <img
              src="/team.jpg"
              alt="Команда"
              className="rounded-2xl shadow-md w-full max-w-[520px] h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-gray-50 rounded-3xl px-6 sm:px-10 py-16 sm:py-24 shadow-md w-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">О нас</h2>
              <p className="text-gray-700 mb-6">
                Мы автосалон и партнёр мировых авто-аукционов: IAA, Copart, Manheim.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  { icon: "/08car.svg", text: "Работаем без посредников" },
                  { icon: "/input.svg", text: "Успешный опыт 10 лет" },
                  { icon: "/container.svg", text: "Успешный опыт 10 лет" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="bg-primary p-2 rounded-full w-8 h-8 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-4 h-4 filter invert brightness-0"
                      />
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-gray-800 mb-6">
                Мы сопровождаем вас до передачи автомобиля в руки.
              </p>
              <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-semibold">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="bg-[#f7f9fb] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Наша команда</h2>
          <p className="text-gray-600 mb-12">Опытные менеджеры поддерживают наших клиентов</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "mikhail", "timur", "aram", "denis", "alexey", "andrey"
            ].map((name, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-4 text-left">
                <img
                  src={`/team/${name}.jpg`}
                  alt={name}
                  className="rounded-xl w-full h-auto object-cover mb-4"
                />
                <h3 className="text-lg font-semibold capitalize">{name}</h3>
                <p className="text-gray-600 text-sm">Менеджер</p>
                <p className="text-primary font-semibold text-sm mt-1">+7 (927) 666-52-97</p>
                <div className="flex gap-3 mt-3">
                  <a href={`https://t.me/${name}`} target="_blank" rel="noreferrer">
                    <img src="/telegram.png" alt="Telegram" className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/79276665297" target="_blank" rel="noreferrer">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Отзывы клиентов</h2>

          <div ref={sliderRef} className="keen-slider">
            {reviews.map((review, idx) => (
              <div key={idx} className="keen-slider__slide px-4">
                <div className="bg-gray-100 rounded-2xl p-6 shadow-md h-full flex flex-col justify-between text-left">
                  <p className="text-gray-800 text-sm mb-4 leading-relaxed">“{review.text}”</p>
                  <div className="text-sm font-semibold text-gray-900">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.city}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`h-[4px] w-8 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
