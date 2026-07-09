import React from 'react';
import { Star, Quote } from 'lucide-react';
import customer1 from '../assets/customer_1.jpeg';
import customer2 from '../assets/customer_2.png';
import customer3 from '../assets/customer_3.jpeg';

const testimonialsData = [
  {
    name: "Bibhu Rout",
    review: "I've purchased three properties from Nirmalya Buildcon, and I can confidently say that every investment has been worth it. Their construction quality, thoughtful planning, modern designs, and complete transparency throughout the buying process have always exceeded my expectations. The team is professional, trustworthy, and always delivers on their promises. If you're looking for a reliable real estate developer, I highly recommend Nirmalya Buildcon. They have truly earned my trust!",
    stars: 5,
    image: customer1
  },
  {
    name: "Ranjita Banerjee",
    review: "Investing in a residential plot with them was completely hassle-free. They guided us perfectly through the municipal clearances and zoning. The location is excellent, and the returns on our investment are already showing.",
    stars: 5,
    image: customer2
  },
  {
    name: "KD Mohanty",
    review: "As an investor, I always look for structural durability and timely delivery. Nirmalya Buildcon delivered our commercial space strictly on timeline without compromising on quality. Their engineering team is truly professional.",
    stars: 5,
    image: customer3
  }
];

export default function Testimonials() {
  // Duplicate array for infinite marquee effect
  const marqueeData = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-obsidian text-center">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[100vw] mx-auto relative z-10">
        <div className="text-center mb-16 px-6">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Testimonials</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            What Our <span className="text-gold-500">Clients Say</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Real stories from our valued customers about their journey to finding the perfect property with us.
          </p>
        </div>

        {/* Marquee Slider Container */}
        <div className="w-full overflow-hidden flex">
          <div className="flex w-max animate-marquee gap-8 px-4">
            {marqueeData.map((item, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[550px] md:w-[750px] flex-shrink-0 flex flex-col md:flex-row bg-[#111625]/80 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden group hover:border-gold-500/30 transition-all duration-500 shadow-xl"
              >
                {/* Large Image Side */}
                <div className="md:w-[45%] h-72 md:h-auto relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlays to blend the image into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111625]/95 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111625]/95 pointer-events-none"></div>
                </div>

                {/* Content Side (Speech Bubble) */}
                <div className="md:w-[55%] p-8 sm:p-10 md:p-12 relative flex flex-col justify-center text-left">
                  {/* Desktop Speech Pointer */}
                  <div className="hidden md:block absolute left-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[15px] border-y-transparent border-r-[15px] border-r-[#111625]/80 group-hover:border-r-[#111625] transition-colors duration-500 z-20"></div>

                  {/* Decorative Quote Mark */}
                  <Quote size={50} className="text-gold-500/20 mb-6 group-hover:text-gold-500/40 transition-colors duration-500" />

                  <p className="font-secondary text-slate-300 text-base md:text-lg italic leading-relaxed mb-8 relative z-10">
                    "{item.review}"
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex gap-1.5 mb-3">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} size={16} className="fill-gold-500 text-gold-500 drop-shadow-sm" />
                      ))}
                    </div>
                    <h4 className="font-primary text-xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
