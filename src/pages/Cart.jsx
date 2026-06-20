import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const whatsappNumber = '9558698837';

function Cart() {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  const handleBuyNow = () => {
    const nextErrors = {};
    if (!buyer.name.trim()) nextErrors.name = 'Name is required.';
    if (!buyer.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!buyer.address.trim()) nextErrors.address = 'Address is required.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    window.open(
      buildWhatsAppLink({
        phone: whatsappNumber,
        name: buyer.name,
        phoneNumber: buyer.phone,
        address: buyer.address,
        totalPrice,
        items
      }),
      '_blank'
    );
  };

  return (
    <main className="bg-gradient-to-b from-white via-[#FDFBF6] to-white px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 sm:space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#B8932A]">Cart</p>
          <h1 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl lg:text-5xl">Your premium gemstone selections</h1>
        </motion.div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border border-stone-200 bg-white/80 p-8 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:mt-16 sm:p-12">
            <p className="text-xl font-medium text-stone-900">Your cart is currently empty.</p>
            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
            >
              Browse the Collection
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 xl:grid-cols-[1.4fr_0.75fr]">
            <div className="space-y-4 sm:space-y-5">
              {items.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeItem} onUpdate={updateQuantity} />
              ))}
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2.5rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8">
              <h2 className="text-2xl font-semibold text-stone-900">Order Summary</h2>
              <div className="mt-6 space-y-4 text-stone-600">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="mt-8 space-y-4 rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-stone-900">Buyer Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-stone-600">Name</label>
                    <input
                      value={buyer.name}
                      onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                      className="mt-2 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600">Phone Number</label>
                    <input
                      value={buyer.phone}
                      onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
                      className="mt-2 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                      placeholder="Phone number"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-stone-600">Shipping Address</label>
                    <textarea
                      value={buyer.address}
                      onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
                      rows="4"
                      className="mt-2 w-full rounded-3xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-[#C9A227]/50 focus:ring-2 focus:ring-[#C9A227]/15"
                      placeholder="Delivery address"
                    />
                    {errors.address && <p className="mt-2 text-sm text-red-500">{errors.address}</p>}
                  </div>
                </div>
              </div>

              <button
                onClick={handleBuyNow}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#9C7A1B] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(201,162,39,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(201,162,39,0.65)]"
              >
                Buy Now on WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="mt-4 w-full rounded-full border border-stone-200 bg-white px-6 py-4 text-sm text-stone-600 transition duration-300 hover:border-[#C9A227]/40 hover:text-stone-900"
              >
                Clear Cart
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;