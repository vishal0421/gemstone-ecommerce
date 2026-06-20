import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialCarousel({ testimonials }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="[&_.swiper-pagination-bullet]:bg-stone-300 [&_.swiper-pagination-bullet-active]:bg-[#C9A227] [&_.swiper-pagination]:!bottom-0 [&_.swiper]:!pb-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 } }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#C9A227]/30 hover:shadow-[0_24px_60px_-15px_rgba(201,162,39,0.15)] sm:p-8">
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <span className="rounded-full bg-gradient-to-br from-stone-50 to-white px-3 py-2 text-[#C9A227]">★★★★★</span>
                <span>{item.role}</span>
              </div>
              <p className="mt-6 text-lg leading-8 text-stone-700">“{item.quote}”</p>
              <div className="mt-8 border-t border-stone-200 pt-5 text-sm text-stone-500">
                <p className="font-semibold text-stone-900">{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default TestimonialCarousel;