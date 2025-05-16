export default function Benefits() {
  const guarantees = [
    { icon: "/prepayment.svg", text: "100% возврат предоплаты" },
    { icon: "/contract.svg", text: "Работаем по договору" },
    { icon: "/search.svg", text: "Договор без мелкого шрифта" },
    { icon: "/money.svg", text: "Оплата в кассу автосалона или на р/с компании" },
    { icon: "/cleancar.svg", text: "Качество автомобиля" },
    { icon: "/shield.svg", text: "На всех этапах сделки – автомобили застрахованы" },
  ]

  const equipment = [
    { icon: "/shields.svg", text: "12 подушек безопасности", colored: true },
    { icon: "/speed.svg", text: "Адаптивный круиз-контроль", colored: true },
    { icon: "/road.svg", text: "Удержание в полосе", colored: true },
  ]

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <section className="bg-[#f7f9fb]/50 backdrop-blur-sm">
        {/* Гарантии */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">Наши гарантии</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow text-left flex items-start gap-4"
              >
                <span className="bg-primary p-3 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-5 h-5 invert brightness-0" />
                </span>
                <p className="text-sm font-medium text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-2">
            Вы можете убедиться в прозрачности сделки, скачав предварительный договор
          </p>
          <a
            href="/sample.pdf"
            className="text-primary text-sm inline-flex items-center gap-1 hover:underline"
          >
            ⬇ Скачать пример договора
          </a>
        </div>

        {/* Преимущества авто из США */}
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-14 text-black">
            Преимущества авто из США
          </h2>

          <div className="grid gap-6 md:grid-cols-12 text-left">
            <div className="bg-white text-black rounded-2xl p-6 shadow-xl md:col-span-6">
              <h3 className="text-lg font-bold mb-2">Высокое качество</h3>
              <p className="text-sm">
                Все местные машины обладают высоким качеством сборки и оснащённости. А также высоким качеством ЛКП.
              </p>
            </div>
            <div className="bg-white text-black rounded-2xl p-6 shadow-xl md:col-span-6">
              <h3 className="text-lg font-bold mb-2">Богатая комплектация</h3>
              <p className="text-sm">
                Автомобили из США отличаются богатыми комплектациями и отличным техническим состоянием всех узлов.
              </p>
            </div>
            <div className="bg-white text-black rounded-2xl p-6 shadow-xl md:col-span-5">
              <h3 className="text-lg font-bold mb-2">Низкая цена</h3>
              <p className="text-sm">
                Стоимость авто из США дешевле аналогов на российском рынке — даже с доставкой и растаможкой.
              </p>
            </div>
            <div className="bg-white text-black rounded-2xl p-6 shadow-xl md:col-span-7">
              <h3 className="text-lg font-bold mb-2">Отличное состояние</h3>
              <p className="text-sm">
                Машины часто в отличном состоянии благодаря климату, ТО и эксплуатации в США.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Сравнение цен */}
      <section className="bg-[#f7f9fb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Сравните цены</h2>
          <p className="text-gray-600 mb-10">
            Привезённые нами автомобили значительно дешевле рыночной цены в России
          </p>

          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Наша цена */}
              <div className="border-2 border-primary/20 rounded-xl p-4 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-3">Наша цена</h3>
                <img src="/rav4.jpg" alt="RAV4" className="rounded-xl mb-4 w-full object-cover" />
                <h4 className="text-lg font-semibold mb-2">Toyota RAV4 2022</h4>
                <div className="text-sm text-left space-y-1 text-gray-700">
                  {[
                    ["Пробег", "5 700 км"],
                    ["Объем двигателя", "2.0"],
                    ["Мощность", "149 л.с."],
                    ["Коробка", "Автомат"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-dashed py-1">
                      <span className="text-gray-400">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold py-1">
                    <span className="text-gray-700">Цена на вторичном рынке в РФ</span>
                    <span className="text-gray-700">3 300 000 ₽</span>
                  </div>
                  <div className="flex justify-between font-bold text-primary text-base py-1">
                    <span>Цена "под ключ"</span>
                    <span>2 700 000 ₽</span>
                  </div>
                </div>
              </div>

              {/* Авито */}
              <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Авито.ру</h3>
                <img src="/rav4.jpg" alt="RAV4" className="rounded-xl mb-4 w-full object-cover" />
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Toyota RAV4 2022</h4>
                <div className="text-sm text-left space-y-1 text-gray-700">
                  {[
                    ["Мощность", "149 л.с."],
                    ["Коробка", "Автомат"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-dashed py-1">
                      <span className="text-gray-400">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-primary text-base py-1">
                    <span>Цена автомобиля на Авито</span>
                    <span>3 100 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-md font-semibold">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Оснащение и срок службы */}
      <section className="bg-[#f7f9fb] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Оснащение */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Оснащение<br />автомобиля в США</h3>
            <p className="text-gray-700 mb-6">
              Производители обязаны оснащать автомобили базовыми системами безопасности:
            </p>
            <ul className="space-y-3 text-gray-800 text-sm">
              {equipment.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className={`w-6 h-6 flex items-center justify-center ${item.colored ? 'text-primary' : ''}`}>
                    <img src={item.icon} alt="" className="w-5 h-5" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Срок службы */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Долговечные<br />комплектующие</h3>
              <p className="text-gray-700 mb-4">Срок службы авто в США</p>
              <p className="text-3xl font-bold text-primary mb-6">480 000 км</p>
              <p className="text-gray-700">Срок службы авто в России</p>
              <p className="text-xl font-semibold">300 000 км</p>
            </div>
            <div className="mt-6">
              <button className="bg-primary hover:bg-primaryHover text-white font-semibold px-6 py-3 rounded-md">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
