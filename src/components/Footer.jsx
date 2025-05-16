import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#f7f9fb] text-gray-700 py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Логотип и адрес */}
        <div>
          <img src="/vite.svg" alt="Логотип" className="h-10 mb-4" />
          <p className="text-sm">
            г. Москва, ул. Примерная, 1<br />
            Пн–Сб: 9:00–18:00
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h4 className="font-semibold mb-3">Разделы</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">О нас</Link></li>
            <li><Link to="/how-to-buy" className="hover:text-primary">Как купить</Link></li>
            <li><Link to="/benefits" className="hover:text-primary">Гарантии и выгоды</Link></li>
            <li><Link to="/faq" className="hover:text-primary">Частые вопросы</Link></li>
            <li><a href="#" className="hover:text-primary">Контакты</a></li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="font-semibold mb-3">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>+7 (927) 997-12-42</li>
            <li>+7 (8352) 67-52-52</li>
            <li>Email: info@autosite.ru</li>
          </ul>
        </div>

        {/* Соцсети */}
       <div>
  <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
  <div className="flex gap-4 items-center">
    <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
      <img src="/telegram.png" alt="Telegram" className="w-6 h-6 hover:opacity-80 transition" />
    </a>
    <a href="https://wa.me/79276665297" target="_blank" rel="noopener noreferrer">
      <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 hover:opacity-80 transition" />
    </a>
    <a href="https://youtube.com/your_channel" target="_blank" rel="noopener noreferrer">
      <img src="/youtube.png" alt="YouTube" className="w-6 h-6 hover:opacity-80 transition" />
    </a>
    <a href="https://vk.com/your_group" target="_blank" rel="noopener noreferrer">
      <img src="/vk.png" alt="VK" className="w-6 h-6 hover:opacity-80 transition" />
    </a>
  </div>
</div>

      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Автосалон. Все права защищены.
      </div>
    </footer>
  )
}
