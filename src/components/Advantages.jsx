export default function Advantages() {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
      
      <h2 className="text-3xl md:text-4xl font-extrabold max-w-3xl mb-4 leading-snug">
        Поможем вам выгодно купить и привезти <br className="hidden md:block" />
        автомобиль в любую точку России
      </h2>
      <p className="text-gray-600 max-w-xl mb-6">
        Предлагаем Вам купить автомобиль дешевле или лучше, но за тот же бюджет
      </p>

     
      <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-semibold mb-12">
        Оставить заявку
      </button>

     
      <div className="w-full flex justify-center">
        <div className="relative bg-gray-50 rounded-3xl p-6 sm:p-10 w-full max-w-6xl flex items-center justify-between overflow-visible">
          
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left z-10 w-full lg:max-w-[60%] ml-0 lg:ml-24">
            <div>
              <h3 className="text-2xl font-bold mb-2">Новые</h3>
              <p className="text-gray-600 text-base">
                Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Под ваш бюджет</h3>
              <p className="text-gray-600 text-base">
                Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">С пробегом</h3>
              <p className="text-gray-600 text-base">
                Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру
              </p>
            </div>
          </div>

          
          <img
            src="/jaguar.png"
            alt="Jaguar"
            className="absolute hidden lg:block right-0 bottom-[-120px] max-w-[720px] translate-x-1/4"
          />
        </div>
      </div>
    </section>
  );
}
