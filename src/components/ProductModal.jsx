import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiShoppingCart, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProductModal({ product, open, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-[2.5rem] border border-stone-200 bg-white/95 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 transition duration-300 hover:border-[#C9A227]/40 hover:text-stone-900"
              aria-label="Close quick view"
            >
              <FiX size={18} />
            </button>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.95fr] lg:items-center">
              <div className="relative rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-6 shadow-sm">
                <img src={product.image} alt={product.name} className="h-full w-full rounded-[2rem] object-contain" loading="lazy" />
              </div>
              <div className="space-y-6 text-stone-900">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Premium Quick View</p>
                  <h2 className="font-serif text-3xl font-semibold text-stone-900">{product.name}</h2>
                  <p className="leading-7 text-stone-600">{product.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(201,162,39,0.55)]">${product.price}</span>
                  <span className="text-sm text-stone-500">Category: {product.category}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900"
                  >
                    View Details
                  </Link>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-5 text-sm text-stone-600">
                  <p className="font-medium text-stone-900">Fast WhatsApp support</p>
                  <p className="mt-2 flex items-center gap-2 text-stone-600">
                    <FiPhone className="text-[#B8932A]" /> Ask about shipping, authenticity and luxury packaging.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;