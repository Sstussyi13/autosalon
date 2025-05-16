export default function Hero() {
  return (
    <section className="relative px-4 py-8 flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden">
        <img
          src="/Rectangle 20.jpg"
          alt="Автомобиль"
          className="w-full h-[500px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center px-8">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl sm:text-3xl font-bold mb-4 leading-tight">
              Купите автомобиль <br /> дешевле на 60%*
            </h1>
            <p className="mb-6 text-lg sm:text-base leading-relaxed">
              Привезем автомобиль под ключ со всеми документами. <br />
              Подбор автомобиля под любой запрос — <b>БЕСПЛАТНО</b>
            </p>
            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-semibold">
              Оставить заявку
            </button>
            <p className="text-sm mt-3 text-gray-300">
              *по сравнению с ценами на Авто.ру и Авито
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
