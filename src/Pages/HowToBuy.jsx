import AccordionItem from "../components/AccordionItem"

export default function HowToBuy() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Вводный текст */}
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
          Как проходит покупка автомобиля
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Мы сопровождаем вас на всех этапах — от консультации и выбора авто до доставки в ваш город и постановки на учёт. Всё прозрачно, по шагам.
        </p>
      </div>

      {/* Аккордеон */}
      <div className="bg-white rounded-xl shadow-sm divide-y overflow-hidden">
        <AccordionItem
          number="01"
          title="Подбор автомобиля"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Консультация</p>
                <p className="text-gray-600">
                  Индивидуальный подход и консультация от специалистов по всем вопросам, связанным с выбором и логистикой.
                </p>
              </div>
              <div>
                <p className="font-semibold">Предварительный договор</p>
                <p className="text-gray-600">
                  Заключение договора с условиями подбора. Депозит — 1000$.
                </p>
                <a href="/sample.pdf" className="text-primary text-sm inline-flex items-center mt-1">
                  <span className="mr-1">⬇</span> Скачать пример договора
                </a>
              </div>
              <div className="sm:col-span-2">
                <p className="font-semibold">Поиск автомобиля</p>
                <p className="text-gray-600">
                  Менеджер ищет авто под ваш запрос на аукционах IAAI, Copart. Обычно это занимает до 2 недель.
                </p>
              </div>
            </div>
          }
        />

        <AccordionItem
          number="02"
          title="Покупка"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Участие в аукционе</p>
                <p className="text-gray-600">
                  Мы подаём ставки от вашего имени. Вы сами выбираете авто и бюджет.
                </p>
              </div>
              <div>
                <p className="font-semibold">Покупка и оформление</p>
                <p className="text-gray-600">
                  После выигрыша происходит оплата и оформление на ваше имя.
                </p>
              </div>
            </div>
          }
        />

        <AccordionItem
          number="03"
          title="Транспортировка до порта"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Подготовка к отправке</p>
                <p className="text-gray-600">
                  После покупки авто доставляется на наш склад или порт.
                </p>
              </div>
              <div>
                <p className="font-semibold">Погрузка в контейнер</p>
                <p className="text-gray-600">
                  Авто закрепляется, проверяется и фотографируется перед отправкой.
                </p>
              </div>
            </div>
          }
        />

        <AccordionItem
          number="04"
          title="Доставка по морю"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Транспортировка</p>
                <p className="text-gray-600">
                  Контейнер отправляется в ваш порт. Среднее время в пути — 30–45 дней.
                </p>
              </div>
              <div>
                <p className="font-semibold">Трек и контроль</p>
                <p className="text-gray-600">
                  Вы получаете ссылки на отслеживание и документы.
                </p>
              </div>
            </div>
          }
        />

        <AccordionItem
          number="05"
          title="Таможенное оформление"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Растаможка</p>
                <p className="text-gray-600">
                  Мы помогаем с расчётом пошлин, подаём документы, уплачиваем сборы.
                </p>
              </div>
              <div>
                <p className="font-semibold">Получение ПТС</p>
                <p className="text-gray-600">
                  После оформления — вы получаете ПТС и право постановки на учёт.
                </p>
              </div>
            </div>
          }
        />

        <AccordionItem
          number="06"
          title="Доставка в ваш город"
          content={
            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold">Транспорт по РФ</p>
                <p className="text-gray-600">
                  Авто доставляется автовозом или эвакуатором до вашего города.
                </p>
              </div>
              <div>
                <p className="font-semibold">Передача автомобиля</p>
                <p className="text-gray-600">
                  Мы передаём вам авто с полным пакетом документов. Готово к регистрации.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  )
}