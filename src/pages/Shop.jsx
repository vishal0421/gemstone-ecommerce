import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';
import { useCart } from '../context/CartContext.jsx';

const categories = ['All', 'Necklace', 'Bracelet', 'Pendant', 'Decor', 'Set', 'Collection'];

function Shop() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        if (sort === 'name-asc') return a.name.localeCompare(b.name);
        if (sort === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
  }, [category, search, sort]);

  const handleBuyNow = (product) => {
    addItem(product, 1);
    navigate('/cart');
  };

  return (
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ── Header + Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start"
        >
          {/* Title */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B8932A] sm:text-sm">Shop</p>
            <h1 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl lg:text-5xl">
              Explore premium gemstone collections
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              Filter by category, search the collection, and sort by style or price.
            </p>
          </div>

          {/* Filter Card */}
          <div className="space-y-4 rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] sm:rounded-[2rem] sm:p-6">
            {/* Search */}
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.3em] text-stone-500 sm:mb-2">Search</label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search crystals, bracelets, pendants"
                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15 sm:rounded-3xl sm:py-3"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.3em] text-stone-500 sm:mb-2">Category</label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                      category === item
                        ? 'border-[#C9A227]/50 bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] text-white shadow-[0_6px_16px_-6px_rgba(201,162,39,0.55)]'
                        : 'border-stone-200 bg-white text-stone-600 hover:border-[#C9A227]/40 hover:text-stone-900'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.3em] text-stone-500 sm:mb-2">Sort by</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15 sm:rounded-3xl sm:py-3"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* ── Product Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 sm:mt-12 md:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product, 1)}
              onQuickView={() => setSelectedProduct(product)}
              onBuyNow={handleBuyNow}
            />
          ))}
        </motion.div>

        {/* ── Empty State ── */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-stone-200 bg-white/80 p-8 text-center text-sm text-stone-600 shadow-sm sm:mt-16 sm:rounded-[2rem] sm:p-10 sm:text-base">
            No products match your search. Try broadening your criteria or explore the full collection.
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            open={Boolean(selectedProduct)}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={(product) => addItem(product, 1)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Shop;