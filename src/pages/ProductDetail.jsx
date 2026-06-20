import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const whatsappNumber = '9558698837';

function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [buyer, setBuyer] = useState({ name: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  if (!product) {
    return (
      <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-stone-200 bg-white/80 p-8 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-12">
          <h1 className="font-serif text-3xl font-semibold text-stone-900">Product not found</h1>
          <p className="mt-4 text-stone-600">Please return to the shop and explore our premium collection.</p>
          <Link to="/shop" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]">
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = product.price * quantity;

  const handleBuyNow = () => {
    const nextErrors = {};
    if (!buyer.name.trim()) nextErrors.name = 'Name is required.';
    if (!buyer.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!buyer.address.trim()) nextErrors.address = 'Shipping address is required.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    window.open(
      buildWhatsAppLink({
        phone: whatsappNumber,
        name: buyer.name,
        phoneNumber: buyer.phone,
        address: buyer.address,
        totalPrice: subtotal,
        items: [{ name: product.name, quantity, price: product.price }]
      }),
      '_blank'
    );
  };

  return (
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:gap-10">
        <div className="space-y-6 sm:space-y-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[3rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
              <img src={product.image} alt={product.name} className="h-full w-full rounded-[2rem] object-contain" loading="lazy" />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Product Detail</p>
              <h1 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">{product.name}</h1>
              <p className="leading-8 text-stone-600">{product.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-4 py-2 text-xl font-semibold text-white shadow-[0_6px_18px_-6px_rgba(201,162,39,0.55)]">${product.price}</span>
                <span className="text-sm text-stone-500">Category: {product.category}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => addItem(product, quantity)}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-4 text-sm font-semibold text-stone-700 shadow-sm transition duration-300 hover:border-[#C9A227]/50 hover:text-stone-900"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-semibold text-stone-900">Order Details</h2>
              <p className="mt-3 text-stone-600">Specify your quantity and shipping details for a seamless WhatsApp checkout.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <label className="text-sm uppercase tracking-[0.3em] text-stone-500">Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-24 rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-semibold text-stone-900">Buyer Information</h2>
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-stone-600">Full Name</label>
                <input
                  value={buyer.name}
                  onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                  className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                <label className="block text-sm font-medium text-stone-600">Phone</label>
                <input
                  value={buyer.phone}
                  onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
                  className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                <label className="block text-sm font-medium text-stone-600">Shipping Address</label>
                <textarea
                  value={buyer.address}
                  onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
                  rows="4"
                  className="w-full rounded-3xl border border-stone-200 bg-white px-4 py-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                  placeholder="Enter delivery address"
                />
                {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                <button
                  onClick={handleBuyNow}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
                >
                  Checkout on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;