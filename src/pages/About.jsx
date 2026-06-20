import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';

function About() {
  return (
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">About</p>
          <h1 className="font-serif text-4xl font-semibold text-stone-900 sm:text-5xl">The story behind Shree Gemstones</h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            We are a luxury gemstone house focused on authentic crystals, meticulous curation, and soulful gifting. Each product is crafted to feel premium, meaningful, and deeply elevated.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_24px_60px_-15px_rgba(201,162,39,0.18)] sm:p-10"
          >
            <span className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B]" />
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Authentic Gemstones</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Our gemstones are sourced from trusted suppliers, authenticated by specialists and curated for quality, color, and spiritual resonance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_24px_60px_-15px_rgba(201,162,39,0.18)] sm:p-10"
          >
            <span className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B]" />
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Quality Assurance</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Every piece is inspected, polished and packaged with luxury standards to ensure a premium unboxing experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_24px_60px_-15px_rgba(201,162,39,0.18)] sm:p-10"
          >
            <span className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B]" />
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Spiritual Benefits</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Our gems support clarity, calm, and grounded energy, blending ancient healing tradition with modern luxury.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_24px_60px_-15px_rgba(201,162,39,0.18)] sm:p-10"
          >
            <span className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B]" />
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Trusted Business</h2>
            <p className="mt-4 leading-7 text-stone-600">
              We serve customers globally with responsive support, refined shipping, and a reputation for thoughtful luxury offerings.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default About;