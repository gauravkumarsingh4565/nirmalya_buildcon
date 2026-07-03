import React from 'react';
import { Star, Quote } from 'lucide-react';
import customer1 from '../assets/customer_1.png';
import customer2 from '../assets/customer_2.png';
import customer3 from '../assets/customer_3.png';

const testimonialsData = [
  {
    name: "Rajesh Mohapatra",
    role: "Villa Owner, Golden Crest",
    review: "Nirmalya Buildcon delivered on every single promise. The structural safety standards and modern architectural layout of our premium villa exceed anything we've seen in Bhubaneswar. The engineering transparency was highly reassuring.",
    stars: 5,
    image: customer1
  },
  {
    name: "Priyanka Mishra",
    role: "Property Buyer, Residential Plotting",
    review: "Extremely professional civil engineering team. They supported us not just with the plot purchase but with accurate site zoning and municipal clearances. A truly hassle-free investment experience with premium value.",
    stars: 5,
    image: customer2
  },
  {
    name: "Subhasish Senapati",
    role: "Commercial Partner & Investor",
    review: "Their spaces offer unparalleled structural durability and high-quality modern layouts. The project was completed strictly within our timeline, showing their deep commitment to quality real estate execution.",
    stars: 5,
    image: customer3
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-obsidian text-center">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3">Client Feedback</span>
          <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white mb-4 relative inline-block">
            What Our <span className="text-gold-500">Clients Say</span>
            <span className="block w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="font-secondary text-muted text-base max-w-xl mx-auto mt-4">
            Hear directly from our verified premium villa owners, plotting investors, and commercial real estate partners.
          </p>
        </div>

        {/* Testimonials Speech Bubble Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group text-center"
            >
              {/* Large Customer Image */}
              <div className="relative mb-6 flex-shrink-0">
                {/* Glowing ambient ring */}
                <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-gold-500/30 group-hover:border-gold-500 transition-all duration-300 shadow-xl"
                />
              </div>

              {/* Speech Bubble pointing to Image */}
              <div className="relative w-full bg-[#111625] border border-white/5 rounded-3xl p-8 hover:border-gold-500/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 flex flex-col justify-between min-h-[250px]
                /* Speech bubble top arrow */
                before:content-[''] before:absolute before:-top-[8px] before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-[#111625] before:border-t before:border-l before:border-white/5 before:rotate-45 before:transition-colors before:duration-500 group-hover:before:border-gold-500/20"
              >
                {/* Floating quote mark inside bubble */}
                <Quote size={40} className="absolute bottom-6 right-6 text-white/2 pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1.5 mb-5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-secondary text-slate-300 text-sm leading-relaxed mb-6 italic relative z-10">
                    "{item.review}"
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <h4 className="font-primary text-sm font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <span className="font-secondary text-slate-500 text-xs block mt-0.5">
                    {item.role}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
