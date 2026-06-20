import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import products from '../data/products.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ProductCard from '../components/ProductCard.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import testimonials from '../data/testimonials.js';
import faqs from '../data/faqs.js';
import { useCart } from '../context/CartContext.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const whatsappNumber = '9558698837';

function Home() {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [showcaseCount] = useState(8);

  const featured = useMemo(() => products.slice(0, showcaseCount), [showcaseCount]);

  const handleBuyNow = (product) => {
    addItem(product, 1);
    navigate('/cart');
  };

  return (
    <main className="overflow-hidden bg-gradient-to-b from-white via-[#FDFBF6] to-white">
      <section className="relative overflow-hidden px-6 pt-10 pb-20 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,162,39,0.14),rgba(255,255,255,0))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#B8932A] shadow-sm">
              Luxury Gemstone Collection
            </span>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="font-serif text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Discover the Power of Natural Gemstones
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-xl text-lg leading-8 text-stone-600">
              Authentic Healing Crystals, Gemstones, Bracelets and Spiritual Products crafted for premium wellbeing and meaningful gifting.
            </motion.p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
              >
                Shop Now
              </Link>
              <a
                href={buildWhatsAppLink({
                  phone: whatsappNumber,
                  note: 'Hello, I would like to learn more about your premium gemstone collection and available products.',
                  noteOnly: true
                })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-8 py-4 text-sm font-semibold text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900 hover:shadow-[0_10px_30px_-10px_rgba(201,162,39,0.35)]"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative max-w-xl rounded-[3rem] border border-stone-200 bg-white/80 p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur-3xl">
            <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-[#C9A227]/15 blur-3xl" />
            <div className="grid gap-6">
              {['Crystal energy', 'Luxury finish', 'Artisanal care'].map((label, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-6 shadow-sm transition duration-300 hover:border-[#C9A227]/30 hover:shadow-md"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">{label}</p>
                  <p className="mt-3 text-xl font-semibold text-stone-900">Experience refined spirituality</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <SectionHeader subtitle="Featured Products" title="Shop our most sought-after gemstone treasures" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product, 1)}
              onBuyNow={handleBuyNow}
              onQuickView={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Why Choose Us</p>
              <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">Luxury, trust, and transformative gemstone experiences.</h2>
              <p className="max-w-xl leading-7 text-stone-600">
                We combine rigorous authenticity checks, premium presentation, and spiritual care so every order feels exceptional — from first look to daily ritual.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: '100% Authentic', subtitle: 'Verified gemstones with pure energy.' },
                { title: 'Premium Quality', subtitle: 'Handpicked, polished and curated.' },
                { title: 'Secure Packaging', subtitle: 'Luxury packaging for safe delivery.' },
                { title: 'Fast Shipping', subtitle: 'Priority dispatch for every order.' }
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-6 shadow-sm transition duration-300 hover:border-[#C9A227]/30 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <SectionHeader subtitle="Testimonials" title="Trusted by modern spiritual collectors" />
        <div className="mt-12">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader subtitle="Frequently Asked" title="Premium support and product insights" />
          <div className="mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;