import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/30 bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] text-white shadow-[0_4px_14px_-2px_rgba(201,162,39,0.45)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 rounded-full ring-1 ring-[#C9A227]/0 transition duration-300 group-hover:ring-4 group-hover:ring-[#C9A227]/15" />
            <FiShoppingBag size={17} />
          </div>
          <div className="leading-tight">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-[#B8932A]">Shree</p>
            <h1 className="relative font-serif text-lg font-semibold tracking-wide text-stone-900">
              Gemstones
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-full" />
            </h1>
          </div>
        </Link>

        <button
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/40 hover:text-stone-900 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <FiMenu size={17} />
          Menu
        </button>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#C9A227] after:to-[#9C7A1B] after:transition-all after:duration-500 after:ease-out ${
                  isActive
                    ? 'text-stone-900 after:w-full'
                    : 'text-stone-500 after:w-0 hover:text-stone-900 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900 hover:shadow-[0_4px_14px_-4px_rgba(201,162,39,0.35)]"
          >
            <FiShoppingBag size={17} />
            Cart
            {totalQuantity > 0 && (
              <motion.span
                key={totalQuantity}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                className="absolute -right-2 -top-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] px-1 text-[0.65rem] font-semibold text-white shadow-[0_2px_8px_-1px_rgba(201,162,39,0.5)]"
              >
                {totalQuantity}
              </motion.span>
            )}
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-stone-900/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="absolute right-0 top-0 h-screen w-full max-w-sm overflow-y-auto border-l border-stone-200 bg-white shadow-[-8px_0_40px_-10px_rgba(0,0,0,0.15)]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

              <div className="flex items-center justify-between border-b border-stone-200 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#B8932A]">
                    Navigation
                  </p>
                  <h2 className="font-serif text-2xl font-semibold text-stone-900">
                    Menu
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-600 transition duration-300 hover:rotate-90 hover:border-[#C9A227]/40 hover:text-stone-900"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="p-6">
                <nav className="flex flex-col gap-3">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                    >
                      <NavLink
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-2xl px-6 py-5 text-xl font-semibold transition-all duration-300 ${
                            isActive
                              ? 'border border-[#C9A227]/40 bg-gradient-to-r from-[#C9A227]/10 to-[#C9A227]/0 text-stone-900'
                              : 'border border-stone-200 bg-stone-50 text-stone-700 hover:border-[#C9A227]/30 hover:bg-stone-100'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {link.label}
                            <span className={`h-1.5 w-1.5 rounded-full bg-[#C9A227] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: links.length * 0.06 + 0.05 }}
                  className="mt-8 rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-5 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#B8932A]">
                    Need Help?
                  </p>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    Browse products, manage your cart, and explore our premium gemstone collection.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;