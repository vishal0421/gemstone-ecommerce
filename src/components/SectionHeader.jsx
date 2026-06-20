import { motion } from 'framer-motion';

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">{subtitle}</p>
      <h2 className="mt-4 font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">{title}</h2>
    </motion.div>
  );
}

export default SectionHeader;