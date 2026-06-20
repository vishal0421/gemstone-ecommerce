import { motion } from 'framer-motion';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart, onQuickView, onBuyNow }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_20px_45px_-15px_rgba(201,162,39,0.25)] sm:rounded-[2rem] sm:p-4"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A227]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[2rem]" />

      <div className="relative z-10 flex flex-col items-center gap-2 text-center sm:gap-4">

        {/* Image */}
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-2.5 shadow-sm sm:h-44 sm:w-44 sm:rounded-[1.75rem] sm:p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-lg object-contain transition duration-500 group-hover:scale-105 sm:rounded-[1.5rem]"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="w-full space-y-1.5 sm:space-y-2.5">

          {/* Stars */}
          <div className="flex items-center justify-center gap-0.5 text-xs sm:gap-1 sm:text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < Math.round(product.rating) ? 'text-[#C9A227]' : 'text-stone-200'}>★</span>
            ))}
          </div>

          {/* Name */}
          <Link
            to={`/product/${product.id}`}
            className="block text-sm font-semibold leading-tight text-stone-900 transition hover:text-[#B8932A] sm:text-lg"
          >
            {product.name}
          </Link>

          {/* Description — hidden on very small, show on sm+ */}
          <p className="mx-auto hidden max-w-xs text-xs leading-5 text-stone-500 line-clamp-2 sm:block sm:text-sm sm:leading-6">
            {product.description}
          </p>

          {/* Price + Add to Cart */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <p className="text-base font-semibold text-stone-900 sm:text-xl">${product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-xs text-stone-700 transition duration-300 hover:border-[#C9A227]/40 hover:bg-white hover:text-stone-900 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              <FiShoppingCart size={13} />
              <span className="hidden sm:inline">Add</span>
              <span className="sm:hidden">+</span>
            </button>
          </div>
        </div>

        {/* Quick View + Buy Now */}
        <div className="mt-1 grid w-full grid-cols-2 gap-1.5 sm:mt-2 sm:gap-2">
          <button
            onClick={() => onQuickView?.(product)}
            className="inline-flex items-center justify-center gap-1 rounded-full border border-stone-200 bg-white px-2 py-2 text-xs text-stone-600 transition duration-300 hover:border-[#C9A227]/40 hover:text-stone-900 sm:gap-1.5 sm:px-3 sm:text-sm"
          >
            <FiEye size={13} />
            <span className="hidden sm:inline">Quick View</span>
            <span className="sm:hidden">View</span>
          </button>
          <button
            onClick={() => onBuyNow?.(product)}
            className="inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-2 py-2 text-xs font-semibold text-white shadow-[0_6px_18px_-6px_rgba(201,162,39,0.55)] transition duration-300 hover:shadow-[0_8px_22px_-6px_rgba(201,162,39,0.7)] sm:gap-1.5 sm:px-4 sm:text-sm"
          >
            Buy Now
          </button>
        </div>

      </div>
    </motion.article>
  );
}

export default ProductCard;