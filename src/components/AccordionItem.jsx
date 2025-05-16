import { useState } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

export default function AccordionItem({ number, title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-gray-200 overflow-hidden transition-all duration-500">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-6 text-left"
      >
        <div className="flex items-center gap-6">
          <div className="text-3xl font-extrabold text-primary">{number}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        
        <ChevronDown
          className={clsx(
            "text-primary transform transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid gap-4 sm:grid-cols-2 px-4 text-sm text-left transition-all duration-500",
          open ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {content}
      </div>
    </div>
  )
}
