import React from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, Table, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import blogImg1 from '../assets/project_residential.png';
import blogImg2 from '../assets/project_villa.png';
import blogImg3 from '../assets/project_commercial.png';

const blogPosts = [
  {
    id: "flat-vs-plot-long-term-investment",
    title: "Flat vs Plot – Which Is Better for Long-Term Investment?",
    category: "Investment Guide",
    date: "July 04, 2026",
    readTime: "5 min read",
    image: blogImg1,
    summary: "Should you invest in a ready flat or buy a piece of land in Bhubaneswar? Let's break down the advantages, risks, and returns of both choices.",
    content: (
      <div className="font-secondary text-slate-300 space-y-8 leading-relaxed text-base">
        {/* Intro */}
        <div>
          <h3 className="font-primary text-2xl font-bold text-white mb-4">Introduction</h3>
          <p>
            When it comes to real estate investment, one of the most common questions buyers face is: <strong>Should I invest in a flat or a plot?</strong> Both options have their own advantages, risks, and long-term potential.
          </p>
          <p className="mt-3">
            In a rapidly growing city like Bhubaneswar, where real estate demand is steadily increasing, choosing the right type of property can significantly impact your returns. Let’s break down the comparison to help you make a smart investment decision.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Flat Section */}
        <div>
          <h3 className="font-primary text-2xl font-bold text-white mb-3">What Is a Flat?</h3>
          <p className="mb-4">
            A flat is a ready-to-move or under-construction residential unit within a building or apartment complex.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-primary font-bold text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle size={16} /> Advantages of Flats
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <strong>Immediate usability:</strong> You can live in it or rent it out instantly.</li>
                <li>• <strong>Regular rental income:</strong> Ideal for passive income generation.</li>
                <li>• <strong>Amenities included:</strong> High-end security, parking, lifts, clubhouse, etc.</li>
                <li>• <strong>Low maintenance effort:</strong> Society management handles structural works.</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-primary font-bold text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle size={16} /> Disadvantages of Flats
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <strong>Limited appreciation:</strong> Value grows slower compared to raw land.</li>
                <li>• <strong>Depreciation factor:</strong> The building structure ages and loses value over time.</li>
                <li>• <strong>Maintenance charges:</strong> Compulsory monthly society maintenance fees.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Plot Section */}
        <div>
          <h3 className="font-primary text-2xl font-bold text-white mb-3">What Is a Plot?</h3>
          <p className="mb-4">
            A plot is a piece of land that you can use for self-construction or hold for future appreciation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-primary font-bold text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle size={16} /> Advantages of Plots
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <strong>High appreciation:</strong> Land value increases much faster over time.</li>
                <li>• <strong>No depreciation:</strong> Land never loses value like brick structures.</li>
                <li>• <strong>Flexible usage:</strong> Build your home whenever you want, customized to your taste.</li>
                <li>• <strong>No maintenance cost:</strong> Minimal or no monthly maintenance charges.</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl">
              <h4 className="font-primary font-bold text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle size={16} /> Disadvantages of Plots
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <strong>No immediate income:</strong> Cannot generate rent unless you build on it.</li>
                <li>• <strong>Development cost:</strong> Requires additional heavy investment to build a house later.</li>
                <li>• <strong>Location dependent:</strong> Returns depend heavily on surrounding infrastructure growth.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Comparison Table */}
        <div>
          <h3 className="font-primary text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Table size={20} className="text-gold-500" /> Flat vs Plot – Quick Comparison
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-950/60">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/80 text-white font-primary font-bold">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Flat 🏢</th>
                  <th className="p-4">Plot 🗺️</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-400">
                <tr>
                  <td className="p-4 font-semibold text-white">Investment Type</td>
                  <td className="p-4">Ready asset</td>
                  <td className="p-4">Future asset</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Rental Income</td>
                  <td className="p-4 text-emerald-400">✓ Yes</td>
                  <td className="p-4 text-rose-400">✗ No</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Appreciation</td>
                  <td className="p-4">Moderate</td>
                  <td className="p-4 text-gold-500 font-semibold">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Maintenance</td>
                  <td className="p-4">Required</td>
                  <td className="p-4">Minimal</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Liquidity</td>
                  <td className="p-4">Easier</td>
                  <td className="p-4">Depends on location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Location & Investment Advice */}
        <div>
          <h3 className="font-primary text-2xl font-bold text-white mb-4">Which Is Better in Bhubaneswar?</h3>
          <p className="mb-4">
            In Bhubaneswar, the real estate market is expanding towards both high-rise urban clusters and outskirts planning zones:
          </p>
          <ul className="space-y-3 pl-5 list-disc text-slate-400">
            <li><strong>Patia & Tamando:</strong> Highly recommended for flat investments because of high rental demand driven by IT hubs and universities.</li>
            <li><strong>Chandaka & Outskirts:</strong> Ideal for plot investments due to lower buying costs and exponential future appreciation potential.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gold-500/5 border border-gold-500/10 p-6 rounded-2xl">
              <h4 className="font-primary text-lg font-bold text-gold-500 mb-2">Who Should Invest in Flats?</h4>
              <p className="text-sm">Choose flats if you want immediate rental yields, prefer a ready-to-move-in luxury experience, have a short-term timeline, or want to avoid the complexities of self-construction.</p>
            </div>
            <div className="bg-gold-500/5 border border-gold-500/10 p-6 rounded-2xl">
              <h4 className="font-primary text-lg font-bold text-gold-500 mb-2">Who Should Invest in Plots?</h4>
              <p className="text-sm">Choose plots if you are planning for long-term wealth creation, want maximum appreciation, demand structural layout customizability, and can wait for the local infrastructure to mature.</p>
            </div>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Conclusion */}
        <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl">
          <h3 className="font-primary text-2xl font-bold text-white mb-3">Conclusion</h3>
          <p className="mb-4">
            There is no one-size-fits-all answer. Both flats and plots represent powerful investment mechanisms depending entirely on your financial goals.
          </p>
          <ul className="space-y-2 mb-4 font-semibold text-white">
            <li className="flex items-center gap-2 text-gold-500">🏢 If you want monthly passive income + convenience, go for a flat.</li>
            <li className="flex items-center gap-2 text-gold-500">🗺️ If you want maximum growth + long-term returns, a plot is a better choice.</li>
          </ul>
          <p className="text-sm text-slate-400">
            In a fast-developing city like Bhubaneswar, keeping a balanced portfolio with a mix of both assets is also a smart strategy.
          </p>
        </div>

        {/* Expert Tip */}
        <div className="border border-gold-500/30 bg-gold-500/5 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl"></div>
          <h4 className="font-primary text-lg font-bold text-gold-500 mb-2 flex items-center gap-2">
            💡 Expert Tip
          </h4>
          <p className="text-sm mb-4">
            Before signing any real estate deal:
          </p>
          <ul className="space-y-2 text-sm text-slate-400 mb-4 list-decimal pl-5">
            <li>Verify all land or property title documents.</li>
            <li>Check legal RERA numbers and local planning authority approvals (BDA).</li>
            <li>Analyze location growth trends (e.g., proximity to highways, tech parks).</li>
            <li>Consult a trusted local real estate partner like <strong>Nirmalya Buildcon</strong>.</li>
          </ul>
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="bg-gold-500 text-slate-950 font-primary font-bold text-xs px-5 py-2.5 rounded hover:bg-gold-light transition-all cursor-pointer"
          >
            Consult Our Experts
          </button>
        </div>
      </div>
    )
  },
  {
    id: "guide-buying-first-plot-bhubaneswar",
    title: "A Complete Guide to Buying Your First Plot in Bhubaneswar",
    category: "Buying Tips",
    date: "June 28, 2026",
    readTime: "4 min read",
    image: blogImg2,
    summary: "Avoid common pitfalls and legally secure your land. Here is a step-by-step checklist for buying residential plots in Odisha.",
    content: (
      <div className="font-secondary text-slate-300 space-y-6 leading-relaxed text-base">
        <p>
          Buying a plot is one of the most secure investments you can make for your family's future. Unlike structures that depreciate, land appreciates continuously. However, land purchases in India carry structural legal risks if not researched properly.
        </p>
        <h3 className="font-primary text-xl font-bold text-white mt-4">1. Document and Title Verification</h3>
        <p>
          Ensure the seller has a clear "Sale Deed" and has mutation records in their name. You must verify the "Record of Rights" (Patta) via the Odisha Bhulekh portal.
        </p>
        <h3 className="font-primary text-xl font-bold text-white mt-4">2. Check RERA Approval</h3>
        <p>
          Never purchase a layout plot that is not registered with Odisha RERA. RERA registration ensures the developer must build the roads, drains, and electric grids as promised in the layout plan.
        </p>
        <h3 className="font-primary text-xl font-bold text-white mt-4">3. Zoning and BDA Planning</h3>
        <p>
          Verify if the land lies in a Residential Zone, Green Zone, or Commercial Zone. If you buy green belt land, you won't get permission to construct a home.
        </p>
      </div>
    )
  },
  {
    id: "rera-compliance-odisha-real-estate",
    title: "Understanding RERA Compliance in Odisha Real Estate",
    category: "Legal & Regulatory",
    date: "June 15, 2026",
    readTime: "6 min read",
    image: blogImg3,
    summary: "Learn how RERA laws protect homebuyers in Bhubaneswar and what documents you must check before signing a property contract.",
    content: (
      <div className="font-secondary text-slate-300 space-y-6 leading-relaxed text-base">
        <p>
          The Real Estate Regulation and Development Act (RERA) has transformed the property market in Odisha. It brings transparency, developer accountability, and protects consumer funds.
        </p>
        <h3 className="font-primary text-xl font-bold text-white mt-4">Why RERA Registration is Compulsory</h3>
        <p>
          Under RERA guidelines, developers cannot advertise, book, or sell any plot or flat in a project exceeding 500 square meters or 8 apartments without first registering the project with the state RERA authority.
        </p>
        <h3 className="font-primary text-xl font-bold text-white mt-4">Key Consumer Protections</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-400">
          <li><strong>Escrow Accounts:</strong> Developers must deposit 70% of collected client fees into a bank escrow account used strictly for construction.</li>
          <li><strong>Accurate Details:</strong> Developers must upload structural details, layout plans, and completion dates, which cannot be modified without buyer consent.</li>
          <li><strong>Penalty for Delay:</strong> Developers must pay interest to home buyers for every month of project delay.</li>
        </ul>
      </div>
    )
  }
];

export default function Blog({ blogId }) {
  // If blogId is passed as prop, show detailed view
  const activePost = blogPosts.find((p) => p.id === blogId);

  const navigateToBlogList = () => {
    window.history.pushState({}, '', '/blog');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handlePostClick = (id) => {
    window.history.pushState({}, '', `/blog/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  if (activePost) {
    // DETAIL VIEW
    return (
      <div className="bg-obsidian min-h-screen pt-28 pb-20">
        {/* Detail Hero Banner */}
        <div className="relative h-[300px] sm:h-[450px] overflow-hidden border-b border-white/5">
          <img 
            src={activePost.image} 
            alt={activePost.title} 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-slate-950/50 to-black/70"></div>
          
          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-4xl mx-auto px-6 pb-8 sm:pb-12 text-left">
              {/* Back Link */}
              <button 
                onClick={navigateToBlogList}
                className="inline-flex items-center gap-2 text-gold-500 font-primary text-xs font-bold uppercase tracking-wider mb-6 hover:text-gold-light transition-colors group cursor-pointer"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to Blogs
              </button>
              
              {/* Category Badge */}
              <span className="inline-block bg-gold-500 text-obsidian text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
                {activePost.category}
              </span>
              
              {/* Title */}
              <h1 className="font-primary font-bold text-3xl sm:text-5xl text-white mb-6 leading-tight max-w-3xl">
                {activePost.title}
              </h1>
              
              {/* Metadata */}
              <div className="flex items-center gap-6 text-xs text-slate-400 font-secondary">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold-500" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold-500" />
                  {activePost.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 text-left bg-slate-900/35 border border-white/5 p-8 sm:p-10 rounded-3xl backdrop-blur">
            {activePost.content}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8 text-left">
            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-[#111625] to-[#0a0c10] border border-white/5 p-6 rounded-2xl text-center shadow-lg">
              <h4 className="font-primary font-bold text-white text-lg mb-3">Looking for plots?</h4>
              <p className="font-secondary text-slate-400 text-xs leading-relaxed mb-5">
                We develop premium government RERA-approved plotting projects with electricity, wide roads, and security boundary walls in Bhubaneswar.
              </p>
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/projects');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="w-full bg-gold-500 hover:bg-gold-light text-obsidian font-primary font-bold text-sm py-3 rounded transition-all cursor-pointer shadow-md shadow-gold-500/10"
              >
                Explore Projects
              </button>
            </div>

            {/* Recent Posts List */}
            <div className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl">
              <h4 className="font-primary font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Recent Articles
              </h4>
              <div className="space-y-4">
                {blogPosts.filter(p => p.id !== activePost.id).map(p => (
                  <div key={p.id} className="group cursor-pointer" onClick={() => handlePostClick(p.id)}>
                    <span className="text-[10px] text-gold-500 font-semibold uppercase">{p.category}</span>
                    <h5 className="font-primary text-sm font-bold text-white group-hover:text-gold-500 transition-colors duration-300 line-clamp-2 mt-0.5">
                      {p.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="bg-obsidian min-h-screen pt-28 pb-20">
      {/* Blog Listing Header Section */}
      <div className="relative h-[250px] sm:h-[320px] overflow-hidden flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-[#070b13]/90 z-1"></div>
        {/* Subtle background decoration */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-primary text-xs font-extrabold uppercase tracking-[0.25em] block mb-3 animate-fade-in-up">
            Knowledge Center
          </span>
          <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up">
            Our <span className="text-gold-500">Real Estate Blog</span>
          </h1>
          <p className="font-secondary text-slate-400 text-sm sm:text-base max-w-xl mx-auto animate-fade-in-up">
            Stay informed with the latest investment tips, legal compliance updates, and market trends in Odisha.
          </p>
        </div>
      </div>

      {/* Grid listing content */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 flex flex-col group transition-all duration-500 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/35 hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div 
                className="h-52 overflow-hidden relative cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-white/10 text-gold-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-slate-500 text-[11px] font-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-primary text-lg font-bold text-white group-hover:text-gold-500 transition-colors duration-300 line-clamp-2 mb-3 cursor-pointer"
                  onClick={() => handlePostClick(post.id)}
                >
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="font-secondary text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>

                {/* Read More button */}
                <button
                  onClick={() => handlePostClick(post.id)}
                  className="mt-auto inline-flex items-center gap-1.5 text-gold-500 font-primary text-xs font-bold uppercase tracking-wider hover:text-gold-light transition-colors group/btn cursor-pointer self-start"
                >
                  Read Article
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
