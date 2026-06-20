import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

function FAQAccordion({ faqs }) {
  const [openItem, setOpenItem] = useState(faqs[0]?.id || null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = faq.id === openItem;
        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`overflow-hidden rounded-[2rem] border bg-white/80 shadow-sm backdrop-blur-xl transition-colors duration-300 ${isOpen ? 'border-[#C9A227]/40' : 'border-stone-200'}`}
          >
            <button
              onClick={() => setOpenItem(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left text-stone-900"
            >
              <span className="text-base font-semibold">{faq.question}</span>
              <FiChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C9A227]' : 'rotate-0 text-stone-400'}`} />
            </button>
            {isOpen && (
              <div className="border-t border-stone-200 bg-gradient-to-br from-stone-50 to-white px-6 py-4 text-sm leading-6 text-stone-600">
                {faq.answer}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;