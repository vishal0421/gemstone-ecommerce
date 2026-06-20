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
      .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()))
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
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Shop</p>
            <h1 className="font-serif text-4xl font-semibold text-stone-900 sm:text-5xl">Explore premium gemstone collections</h1>
            <p className="max-w-2xl leading-7 text-stone-600">
              Filter by category, search the collection, and sort by style or price. Every product is presented in a luxurious jewel-inspired display.
            </p>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.3em] text-stone-500">Search</label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search crystals, bracelets, pendants"
                className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.3em] text-stone-500">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${category === item ? 'border-[#C9A227]/50 bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] text-white shadow-[0_6px_16px_-6px_rgba(201,162,39,0.55)]' : 'border-stone-200 bg-white text-stone-600 hover:border-[#C9A227]/40 hover:text-stone-900'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.3em] text-stone-500">Sort by</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
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

        {filtered.length === 0 && (
          <div className="mt-16 rounded-[2rem] border border-stone-200 bg-white/80 p-10 text-center text-stone-600 shadow-sm">
            No products match your search. Try broadening your criteria or explore the full collection.
          </div>
        )}
      </div>

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