import { useState } from 'react';
import { motion } from 'framer-motion';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const whatsappNumber = '9558698837';

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirement: '' });

  const whatsappUrl = buildWhatsAppLink({
    phone: whatsappNumber,
    note: 'I would like to discuss a custom gemstone order.',
    noteOnly: true
  });

  return (
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Contact</p>
          <h1 className="font-serif text-4xl font-semibold text-stone-900 sm:text-5xl">Get in touch for bespoke gemstone services</h1>
          <p className="max-w-xl leading-7 text-stone-600">
            Have a custom requirement or want help selecting the perfect gemstone set? Fill out the form and our premium support team will respond quickly.
          </p>
          <div className="grid gap-4 rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Email</p>
              <p className="text-stone-700">support@shreegemstones.com</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Phone</p>
              <p className="text-stone-700">+91 98765 43210</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
            >
              Quick WhatsApp Contact
            </a>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5 rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <label className="block text-sm font-medium text-stone-600">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
            placeholder="Your name"
          />
          <label className="block text-sm font-medium text-stone-600">Phone</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
            placeholder="Phone number"
          />
          <label className="block text-sm font-medium text-stone-600">Email</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
            placeholder="Email address"
          />
          <label className="block text-sm font-medium text-stone-600">Requirement</label>
          <textarea
            value={form.requirement}
            onChange={(e) => setForm({ ...form, requirement: e.target.value })}
            rows="5"
            className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
            placeholder="Tell us about your dream gemstone product"
          />
          <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]">
            Submit Request
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-4 text-sm font-semibold text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900"
          >
            Contact via WhatsApp
          </a>
        </motion.form>
      </div>
    </main>
  );
}

export default Contact;