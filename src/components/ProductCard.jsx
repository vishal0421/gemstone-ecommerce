import { motion } from 'framer-motion';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  onBuyNow
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_20px_45px_-15px_rgba(201,162,39,0.25)] sm:rounded-[2rem] sm:p-4"
    >
      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-[#C9A227]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[2rem]" />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:gap-5">
        <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-[1.25rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-3 shadow-sm sm:h-48 sm:w-48 sm:rounded-[2rem] sm:p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-[1rem] object-contain transition duration-500 group-hover:scale-105 sm:rounded-[1.75rem]"
            loading="lazy"
          />
        </div>
        <div className="w-full space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 sm:text-sm">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < Math.round(product.rating) ? 'text-[#C9A227]' : 'text-stone-200'}>★</span>
            ))}
          </div>
          <Link to={`/product/${product.id}`} className="block text-base font-semibold text-stone-900 transition hover:text-[#B8932A] sm:text-xl">
            {product.name}
          </Link>
          <p className="mx-auto line-clamp-2 max-w-xs text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">{product.description}</p>
          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="text-lg font-semibold text-stone-900 sm:text-2xl">${product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-700 transition duration-300 hover:border-[#C9A227]/40 hover:bg-white hover:text-stone-900 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              <FiShoppingCart size={14} />
              Add
            </button>
          </div>
        </div>
        <div className="mt-1 grid w-full grid-cols-2 gap-2 sm:mt-3 sm:flex sm:flex-row sm:justify-center sm:gap-3">
          <button
            onClick={() => onQuickView?.(product)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-2 text-xs text-stone-600 transition duration-300 hover:border-[#C9A227]/40 hover:text-stone-900 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <FiEye size={14} /> Quick View
          </button>
          <button
            onClick={() => onBuyNow?.(product)}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-3 py-2 text-xs font-semibold text-white shadow-[0_6px_18px_-6px_rgba(201,162,39,0.55)] transition duration-300 hover:shadow-[0_8px_22px_-6px_rgba(201,162,39,0.7)] sm:px-4 sm:text-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;