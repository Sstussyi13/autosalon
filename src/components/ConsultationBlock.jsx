export default function ConsultationBlock() {
  return (
    <section className="py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-calc.jpg')" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* Левая карточка — форма */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-lg font-bold mb-2">Только телефон, и мы в деле</h3>
          <p className="text-sm text-gray-600 mb-4">
            Специалист перезвонит Вам в течение 5 минут, в рабочее время для уточнения деталей
          </p>
          <input
            type="tel"
            placeholder="+7 (927) 666-52-97"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-primary hover:bg-primaryHover text-white py-2 rounded-md font-semibold mb-3">
            Получить консультацию
          </button>
          <label className="text-xs text-gray-500 flex items-start gap-2 mb-4">
            <input type="checkbox" className="mt-1" defaultChecked />
            Нажимая на кнопку вы соглашаетесь с условиями Политики конфиденциальности
          </label>
          <p className="text-sm font-semibold mb-2">Связаться с нами через мессенджер</p>
          <div className="flex gap-3">
            <a href="https://wa.me/79276665297" className="flex items-center gap-2 border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" /> WhatsApp
            </a>
            <a href="https://t.me/your_bot" className="flex items-center gap-2 border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
              <img src="/telegram.png" alt="Telegram" className="w-5 h-5" /> Telegram
            </a>
          </div>
        </div>

        {/* Правая карточка — список преимуществ */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 leading-snug">
            Точный расчет стоимости<br /> уже через 1 час
          </h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              Расскажем, какие автомобили вы можете купить с наибольшей выгодой.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              Отправим подобранные автомобили на ваш WhatsApp или Telegram.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              Сделаем точный расчет стоимости автомобиля с доставкой в ваш город "под ключ".
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
