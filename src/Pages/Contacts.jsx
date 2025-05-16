export default function Contacts() {
  return (
    <section className="bg-[#f7f9fb] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-center sm:text-left">
          Наши контакты
        </h1>

        <div className="grid gap-8 md:grid-cols-3 text-sm">
          {/* Адрес */}
          <div>
            <p className="text-gray-500 mb-1">Адрес:</p>
            <p className="font-medium leading-relaxed">
              428000, г. Чебоксары,<br />
              Марпосадское шоссе, 14
            </p>
          </div>

          {/* Время работы */}
          <div>
            <p className="text-gray-500 mb-1">Время работы:</p>
            <p className="font-medium">Ежедневно с 10:00 до 19:00</p>
          </div>

          {/* Телефоны */}
          <div>
            <p className="text-gray-500 mb-1">Телефон:</p>
            <p className="font-medium">8 927 997 12 42</p>
            <p className="font-medium">8 927 997 12 42</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-10 text-sm">
          {/* Email */}
          <div>
            <p className="text-gray-500 mb-1">E-mail:</p>
            <p className="font-medium break-all">carmark21@auto.ru</p>
          </div>

          {/* Соц. сети */}
          <div>
            <p className="text-gray-500 mb-1">Соц. сети:</p>
            <div className="flex gap-4 mt-2 text-xl text-primary">
              <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
                <img src="/telegram.png" alt="Telegram" className="w-6 h-6" />
              </a>
              <a href="https://vk.com/your_group" target="_blank" rel="noopener noreferrer">
                <img src="/vk.png" alt="VK" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/your_channel" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="https://wa.me/79276665297" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Яндекс карта */}
        <div className="mt-12 rounded-xl overflow-hidden shadow">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A018b4c9b7953e9eb2721dd6fc8849c63be3078c65b5d66b199c14ae7db2536a4&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            title="Карта"
          ></iframe>
        </div>

        {/* Нижние ссылки */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 text-xs text-gray-500 justify-center text-center">
          <a href="#">Реквизиты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </section>
  )
}
