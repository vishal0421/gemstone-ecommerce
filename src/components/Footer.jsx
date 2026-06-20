import { FaInstagram, FaFacebookF, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-gradient-to-b from-white to-[#FDFBF6] py-12 text-stone-600">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-3 text-stone-900 shadow-sm">
            <span className="font-serif text-lg font-semibold">Shree Gemstones</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-stone-600">
            Luxury gemstone essentials crafted for modern spiritual living. Authentic crystals, premium gifting and high-touch support.
          </p>
          <p className="text-sm text-stone-400">© 2026 Shree Gemstones. All rights reserved.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8932A]">Shop</h3>
          <div className="space-y-2 text-sm text-stone-600">
            <Link to="/shop" className="block transition duration-300 hover:text-stone-900">Explore Products</Link>
            <Link to="/cart" className="block transition duration-300 hover:text-stone-900">Your Cart</Link>
            <Link to="/contact" className="block transition duration-300 hover:text-stone-900">Custom Orders</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8932A]">Contact</h3>
          <p className="text-sm text-stone-600">support@shreegemstones.com</p>
          <p className="text-sm text-stone-600">+91 95586 98837</p>
          <p className="text-sm text-stone-600">Mon - Sat • 9am - 7pm</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8932A]">Follow Us</h3>
          <div className="flex items-center gap-3 text-stone-600">
            <a href="#" aria-label="Instagram" className="rounded-full border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:border-[#C9A227]/40 hover:text-[#B8932A]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:border-[#C9A227]/40 hover:text-[#B8932A]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="WhatsApp" className="rounded-full border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:border-[#C9A227]/40 hover:text-[#B8932A]">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Pinterest" className="rounded-full border border-stone-200 bg-white p-3 shadow-sm transition duration-300 hover:border-[#C9A227]/40 hover:text-[#B8932A]">
              <FaPinterestP />
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
          >
            WhatsApp Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;