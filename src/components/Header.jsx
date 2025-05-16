import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-[1440px] mx-auto w-full px-4 py-4 flex justify-between items-center">
       
        <Link to="/">
          <img src="/logo.svg" alt="Логотип" className="h-10 cursor-pointer" />
        </Link>

      
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/about" className="text-gray-700 hover:text-primary">О нас</Link>
          <Link to="/how-to-buy" className="text-gray-700 hover:text-primary">Как купить</Link>
          <Link to="/benefits" className="text-gray-700 hover:text-primary">Гарантии и выгоды</Link>
          <Link to="/faq" className="text-gray-700 hover:text-primary">Частые вопросы</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-primary">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <div className="flex gap-2 text-lg text-primary">
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-vk"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <div className="text-right leading-4 hidden lg:block">
            <p>+7 (977) 467-52-72</p>
            <p>+7 (977) 467-52-72</p>
          </div>
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-4 text-sm font-medium pt-4">
            <Link to="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
            <Link to="/how-to-buy" onClick={() => setMenuOpen(false)}>Как купить</Link>
            <Link to="/benefits" onClick={() => setMenuOpen(false)}>Гарантии и выгоды</Link>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>Частые вопросы</Link>
            <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
          </nav>

          <div className="flex gap-4 text-lg text-primary mt-6">
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-vk"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>

          <div className="text-sm mt-4">
            <p>+7 (977) 467-52-72</p>
            <p>+7 (977) 467-52-72</p>
          </div>
        </div>
      )}
    </header>
  )
}
