import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
  {
    question: "Какие способы оплаты у вас?",
    answer: "Вы можете оплатить банковским переводом, наличными или через расчётный счёт компании.",
  },
  {
    question: "Какие автомобили вы доставляете?",
    answer: "Мы доставляем автомобили с аукционов США, Европы и Кореи — как новые, так и с пробегом.",
  },
  {
    question: "Могу ли я купить через вас запчасти?",
    answer: "Да, при покупке автомобиля с повреждениями, мы подберем для него запчасти.",
  },
  {
    question: "Какие гарантии, что во время доставки с автомобилем ничего не произойдёт?",
    answer: "Все автомобили застрахованы на время доставки. Мы работаем только с проверенными перевозчиками.",
  },
  {
    question: "Какие документы я получу в комплекте с автомобилем?",
    answer: "Вы получите оригинал аукционного листа, ПТС, договор купли-продажи и транспортную накладную.",
  },
  {
    question: "В какие города России вы осуществляете доставку автомобиля?",
    answer: "Мы доставляем автомобили по всей России, включая Москву, СПб, Казань, Владивосток и др.",
  },
  {
    question: "Какие сроки доставки автомобиля?",
    answer: "В среднем доставка занимает от 30 до 60 дней, в зависимости от направления и порта.",
  },
  {
    question: "Можно ли вернуть автомобиль на аукцион после покупки?",
    answer: "К сожалению, возврат автомобиля невозможен, так как аукционы работают по принципу \"as is\".",
  },
  {
    question: "Какие сроки оплаты после выигрыша на аукционе?",
    answer: "Оплата производится в течение 1–2 банковских дней после выигрыша лота.",
  },
  {
    question: "Что если я откажусь от покупки автомобиля?",
    answer: "В случае отказа ваш депозит не возвращается, и возможно начисление штрафов от аукциона.",
  }
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">
        Часто задаваемые вопросы
      </h1>

      <div className="divide-y border-t border-b">
        {faqData.map((item, idx) => (
          <div key={idx} className="py-4 sm:py-6">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full text-left text-base sm:text-lg font-medium hover:text-primary transition"
            >
              {item.question}
              <span className="text-primary">
                {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-3 text-sm sm:text-base text-gray-700 max-w-2xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}