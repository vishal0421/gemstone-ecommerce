import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiHome, FiInfo, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext.jsx';

const links = [
  { label: 'Home', to: '/', icon: FiHome },
  { label: 'Shop', to: '/shop', icon: FiShoppingBag },
  { label: 'About', to: '/about', icon: FiInfo },
  { label: 'Contact', to: '/contact', icon: FiMail },
];

function Navbar() {
  const { totalQuantity } = useCart();

  return (
    <>
      {/* ───── TOP HEADER ───── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-70" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">

          {/* Logo */}
          <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/30 bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] text-white shadow-[0_4px_14px_-2px_rgba(201,162,39,0.45)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
              <span className="absolute inset-0 rounded-full ring-1 ring-[#C9A227]/0 transition duration-300 group-hover:ring-4 group-hover:ring-[#C9A227]/15" />
              <FiShoppingBag size={15} className="sm:hidden" />
              <FiShoppingBag size={17} className="hidden sm:block" />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#B8932A] sm:text-[0.65rem] sm:tracking-[0.4em]">Shree</p>
              <h1 className="relative truncate font-serif text-base font-semibold tracking-wide text-stone-900 sm:text-lg">
                Gemstones
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9A227] transition-all duration-500 group-hover:w-full" />
              </h1>
            </div>
          </Link>

          {/* Mobile: sirf Cart button top mein */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900"
            >
              <FiShoppingBag size={17} />
              {totalQuantity > 0 && (
                <motion.span
                  key={totalQuantity}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                  className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] px-1 text-[0.6rem] font-semibold text-white shadow-[0_2px_8px_-1px_rgba(201,162,39,0.5)]"
                >
                  {totalQuantity}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Desktop: Nav Links */}
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

          {/* Desktop: Cart Button */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900 hover:shadow-[0_4px_14px_-4px_rgba(201,162,39,0.35)]"
            >
              <FiShoppingBag size={17} />
              <span>Cart</span>
              {totalQuantity > 0 && (
                <motion.span
                  key={totalQuantity}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                  className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] px-1 text-[0.6rem] font-semibold text-white shadow-[0_2px_8px_-1px_rgba(201,162,39,0.5)]"
                >
                  {totalQuantity}
                </motion.span>
              )}
            </Link>
          </div>

        </div>
      </header>

      {/* ───── MOBILE BOTTOM NAV ───── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white lg:hidden">
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-60" />
        <div className="flex items-center justify-around px-1 py-2">

          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-wider transition-all duration-200 ${
                    isActive ? 'text-[#C9A227]' : 'text-stone-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="bottomNavDot"
                        className="mt-0.5 h-[2px] w-4 rounded-full bg-[#C9A227]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-0.5 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-wider transition-all duration-200 ${
                isActive ? 'text-[#C9A227]' : 'text-stone-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative">
                  <FiShoppingBag size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                  {totalQuantity > 0 && (
                    <motion.span
                      key={totalQuantity}
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                      className="absolute -right-2.5 -top-2 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-gradient-to-br from-[#C9A227] to-[#9C7A1B] px-0.5 text-[0.52rem] font-semibold text-white"
                    >
                      {totalQuantity}
                    </motion.span>
                  )}
                </span>
                <span>Cart</span>
                {isActive && (
                  <motion.span
                    layoutId="bottomNavDot"
                    className="mt-0.5 h-[2px] w-4 rounded-full bg-[#C9A227]"
                  />
                )}
              </>
            )}
          </NavLink>

        </div>
      </nav>
      {/* spacer hata diya — ab App.jsx mein handle hoga */}
    </>
  );
}

export default Navbar;