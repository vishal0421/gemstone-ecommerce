import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

function CartItem({ item, onRemove, onUpdate }) {
  return (
    <div className="flex flex-col gap-5 rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_16px_40px_-15px_rgba(201,162,39,0.2)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-[1.5rem] border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-3">
          <img src={item.image} alt={item.name} className="h-full w-full object-contain" loading="lazy" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
          <p className="text-sm text-stone-500">{item.description}</p>
          <p className="mt-3 text-xl font-semibold text-stone-900">${item.price}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:items-end">
        <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-2 py-2 text-stone-700">
          <button onClick={() => onUpdate(item.id, item.quantity - 1)} className="rounded-full p-2 text-stone-600 transition duration-300 hover:bg-[#C9A227]/10 hover:text-[#B8932A]">
            <FiMinus />
          </button>
          <span className="min-w-[1.75rem] text-center text-sm font-semibold text-stone-900">{item.quantity}</span>
          <button onClick={() => onUpdate(item.id, item.quantity + 1)} className="rounded-full p-2 text-stone-600 transition duration-300 hover:bg-[#C9A227]/10 hover:text-[#B8932A]">
            <FiPlus />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
        >
          <FiTrash2 /> Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;