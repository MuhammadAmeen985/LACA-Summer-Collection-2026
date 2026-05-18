/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Wind, Play, Volume2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const sentences = [
    "Summer is not just a season.",
    "It is a feeling.",
    "It is the confidence in every step you take,",
    "the elegance you carry wherever you go."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % (sentences.length + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [sentences.length]);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-summer-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="serif text-3xl tracking-tighter italic">LACASO</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-medium">
          <a href="#essence" className="hover:text-summer-gold transition-colors">Essence</a>
          <a href="#bags" className="hover:text-summer-gold transition-colors">The Bags</a>
          <a href="#shoes" className="hover:text-summer-gold transition-colors">Footwear</a>
          <a href="#contact" className="hover:text-summer-gold transition-colors">Journal</a>
        </div>
      </nav>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073"
          alt="Summer Atmosphere"
          className="w-full h-full object-cover transition-transform duration-[10000ms] scale-110"
          style={{ transform: activeSegment > 1 ? "scale(1)" : "scale(1.1)" }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-summer-paper/40 via-transparent to-summer-paper/90" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl space-y-12"
        >
          <div className="space-y-4">
            <motion.p 
              className="text-xs font-semibold tracking-[0.3em] uppercase text-summer-gold flex items-center justify-center gap-2"
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.3em", opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <Sparkles className="w-3 h-3" />
              LACASO Summer 2026 Collection
              <Sparkles className="w-3 h-3" />
            </motion.p>
            
            <div className="relative h-32 md:h-48 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeSegment}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="serif text-5xl md:text-7xl lg:text-9xl font-light italic leading-tight text-summer-ink px-4"
                >
                  {sentences[activeSegment % sentences.length]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-12"
          >
            <div className="serif text-2xl md:text-3xl text-summer-ink/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              This Summer... <span className="text-summer-gold italic font-medium underline decoration-summer-gold/30 underline-offset-8">Carry Your Story.</span>
            </div>

            <button 
              id="explore-button"
              onClick={() => document.getElementById('bags')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-summer-ink text-white rounded-full overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-3 font-medium tracking-widest text-xs">
                EXPLORE THE COLLECTION
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-summer-gold translate-y-full transition-transform group-hover:translate-y-0" />
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* The Bag Collection */}
      <section id="bags" className="relative z-10 bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <span className="text-summer-gold font-medium tracking-widest uppercase text-xs block mb-4">Timeless Design</span>
            <h2 className="serif text-6xl md:text-8xl text-summer-ink">The Summer Totes</h2>
            <p className="mt-8 text-summer-ink/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafted with <span className="text-summer-ink font-medium italic">premium vegan leather</span>. Structured silhouettes designed to take you from morning brunch to midnight soirees.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { name: "The Structured Tote", color: "Coral Bliss", img: "https://images.unsplash.com/photo-1591561911252-1921de16f6b0?auto=format&fit=crop&q=80&w=800" },
              { name: "The Structured Tote", color: "Ocean Mist", img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=800" },
              { name: "The Structured Tote", color: "Sandy Nude", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800" }
            ].map((bag, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 mb-6 relative">
                  <img src={bag.img} alt={bag.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest">{bag.color}</span>
                  </div>
                </div>
                <h3 className="serif text-2xl mb-1">{bag.name}</h3>
                <p className="text-summer-ink/40 text-[10px] uppercase tracking-widest font-bold">Premium Leather Alternative</p>
              </motion.div>
            ))}
          </div>

          {/* Details of Excellence - Split Screen */}
          <div className="pt-32 border-t border-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl isolation-auto shadow-sm">
              {/* Left: Product Detail */}
              <div className="bg-[#f0ede6] p-12 md:p-24 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <span className="text-summer-gold text-[10px] font-bold uppercase tracking-[0.4em]">Product DNA</span>
                    <h3 className="serif text-4xl md:text-5xl leading-tight">Engineered for the <br/><span className="italic">Summer Soul.</span></h3>
                  </div>
                  
                  <ul className="space-y-8">
                    {[
                      { title: "Premium Vegan Leather", desc: "Durable, lightweight, and breathable—perfect for high-summer temperatures." },
                      { title: "Intelligent Interiors", desc: "Spacious compartments lined with premium anti-scratch microsuede." },
                      { title: "Modular Versatility", desc: "Adjustable straps that transition from shoulder to crossbody in seconds." },
                      { title: "The Palette", desc: "Available in Coral Bliss, Ocean Mist, Sandy Nude, and Midnight Sky." }
                    ].map((feature, i) => (
                      <li key={i} className="group">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-summer-gold" />
                          {feature.title}
                        </h4>
                        <p className="text-summer-ink/60 text-sm leading-relaxed max-w-sm pl-4.5">
                          {feature.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right: Lifestyle Flow */}
              <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
                <motion.div 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover" 
                    alt="Life with LACASO" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-summer-ink/10 mix-blend-multiply" />
                </motion.div>
                
                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 max-w-[240px]">
                    <p className="text-white text-[10px] font-bold tracking-widest uppercase mb-1 opacity-70">Scene No. 42</p>
                    <p className="text-white serif italic text-lg leading-tight">Coastal Rooftop, Amalfi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-64 bg-summer-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="serif text-5xl md:text-7xl leading-tight text-summer-ink">
              Morning brunch to <br/> <span className="italic text-summer-gold">midnight soirees.</span>
            </h2>
            <p className="text-xl text-summer-ink/70 leading-relaxed max-w-lg">
              Our collection is the ultimate companion for the summer wanderer. Every detail—from the soft texture of the leather to the balanced weight of the strap—is a statement of intent.
            </p>
            <div className="flex gap-4">
              <div className="h-px w-24 bg-summer-gold my-auto" />
              <span className="serif text-2xl italic">Effortless Grace</span>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              style={{ y: -50 }}
              className="absolute -top-24 -right-12 w-64 h-64 bg-summer-gold/20 rounded-full blur-[100px]" 
            />
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="pt-24">
                <img 
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform" 
                  alt="Cafe Lifestyle" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-2xl shadow-xl hover:scale-105 transition-transform" 
                  alt="Evening Lifestyle" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shoe Collection */}
      <section id="shoes" className="relative z-10 bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-summer-gold font-medium tracking-widest uppercase text-xs block mb-4">The Foundation</span>
              <h2 className="serif text-6xl md:text-8xl text-summer-ink">LACASO Steps</h2>
            </div>
            <p className="text-summer-ink/40 serif italic text-2xl md:max-w-xs leading-tight">"Designed for comfort, built for style — because you deserve both."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
            {[
              { type: "Strappy", name: "Heeled Sandals", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800" },
              { type: "Chic", name: "Flat Mules", img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800" },
              { type: "Bold", name: "Block-Heeled Pumps", img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=800" }
            ].map((shoe, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-12 bg-neutral-50 border border-neutral-100 group-hover:border-summer-gold/30 transition-colors">
                  <img src={shoe.img} alt={shoe.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-summer-gold mb-2 block">{shoe.type}</span>
                  <h3 className="serif text-3xl text-summer-ink">{shoe.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shoe Craftsmanship Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-neutral-100">
            {[
              { title: "Cloud-Step Engineering", desc: "Strategically placed padded insoles provide all-day comfort for city exploration." },
              { title: "Precision Grip", desc: "Non-slip outsoles engineered for grace on every surface, from cobblestones to marble." },
              { title: "Artisan Finished", desc: "Every pair is hand-finished with detailing that catches the golden hour light." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <span className="text-summer-gold font-bold">0{i+1}</span>
                <h4 className="font-bold tracking-widest text-[10px] uppercase">{item.title}</h4>
                <p className="text-sm text-summer-ink/60 leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Manifesto & Montage */}
      <section className="relative z-10 bg-white pt-48 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-summer-gold text-[10px] font-bold uppercase tracking-[0.6em]">The Manifesto</span>
              <h2 className="serif text-4xl md:text-6xl italic leading-tight text-summer-ink">
                "True style is the story you tell without speaking a single word."
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-summer-ink/60 leading-relaxed font-light"
            >
              At LACASO, we believe that true style is personal. It is the story you tell without speaking a single word. Our summer collection is not just about fashion — it is about you. Your journey. Your confidence. Your summer.
            </motion.p>
          </div>

          {/* Diverse Montage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <motion.div 
              className="md:col-span-8 relative rounded-3xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                alt="Professional Lifestyle"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">The New Professional</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-4 grid grid-rows-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden group shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  alt="Creative Mindset"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">The Creative</span>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  alt="Global Wanderer"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">The Traveler</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Reveal Section */}
      <section className="relative z-10 bg-white py-64 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="flex justify-center items-center gap-8 md:gap-16 opacity-30 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300" className="w-24 md:w-32 aspect-square object-cover rounded-full rotate-12" alt="" />
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300" className="w-32 md:w-48 aspect-square object-cover rounded-full -rotate-12" alt="" />
              <img src="https://images.unsplash.com/photo-1591561911252-1921de16f6b0?auto=format&fit=crop&q=80&w=300" className="w-24 md:w-32 aspect-square object-cover rounded-full rotate-6" alt="" />
            </div>

            <div className="space-y-4">
              <h2 className="serif text-7xl md:text-9xl text-summer-gold tracking-tighter italic">LACASO</h2>
              <p className="text-sm md:text-base font-bold tracking-[0.8em] uppercase text-summer-ink/80 pt-4">Wear Your Story</p>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-4 text-xs font-bold tracking-widest hover:text-summer-gold transition-colors"
            >
              <div className="w-12 h-px bg-summer-gold/30" />
              BACK TO THE BEGINNING
            </button>
          </motion.div>
        </div>
      </section>

      {/* Shop Now / Final CTA Section */}
      <section className="relative z-10 bg-summer-ink py-32 px-6 overflow-hidden">
        {/* Animated Background Ticker */}
        <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap py-4 bg-summer-gold/10 pointer-events-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-block text-[10px] font-bold tracking-[0.5em] text-summer-gold/40 uppercase"
          >
            FREE DELIVERY ON ORDERS ABOVE RS. 2,500 • LIMITED PIECES • UNLIMITED STYLE • SHOP NOW • SUMMER 2026 COLLECTION • FREE DELIVERY ON ORDERS ABOVE RS. 2,500 • LIMITED PIECES • UNLIMITED STYLE • SHOP NOW 
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-summer-gold text-[10px] font-bold uppercase tracking-[0.4em] block">Going Fast</span>
              <h2 className="serif text-5xl md:text-8xl text-white italic">Your summer favorites <br/> <span className="text-summer-gold">are waiting.</span></h2>
            </div>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The LACASO Summer Collection 2026 is live now. Explore the fusion of premium vegan leather and artisan comfort. Shop now before your favorites sell out.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
              <div className="text-left">
                <p className="text-summer-gold text-[10px] font-bold tracking-widest uppercase mb-1">Visit Online</p>
                <a href="https://www.LACASO.pk" className="serif text-3xl text-white hover:text-summer-gold transition-colors">www.LACASO.pk</a>
              </div>
              <div className="h-px w-24 bg-white/10 hidden md:block" />
              <div className="text-left">
                <p className="text-summer-gold text-[10px] font-bold tracking-widest uppercase mb-1">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="serif text-3xl text-white hover:text-summer-gold transition-colors">@LACASObrand</a>
                </div>
              </div>
            </div>

            <div className="pt-16">
              <button className="group relative px-20 py-6 bg-summer-gold text-summer-ink rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <span className="relative z-10 font-bold tracking-[0.2em] text-xs">SHOP THE COLLECTION NOW</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Cut Montage Sub-Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 w-full opacity-40">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Beach Walk" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Rooftop Party" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Shopping Streets" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Summer Night" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 bg-summer-ink text-summer-paper py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h3 className="serif text-6xl md:text-8xl italic mb-8">LACASO</h3>
              <p className="text-summer-paper/60 text-lg leading-relaxed max-w-sm mb-12">
                Join our journal to receive seasonal updates, styling tips, and early access to our private soirees.
              </p>
              <div className="flex border-b border-summer-paper/20 pb-4 max-w-md group focus-within:border-summer-gold transition-colors">
                <input type="email" placeholder="YOUR EMAIL" className="bg-transparent border-none outline-none w-full text-xs tracking-widest" />
                <button className="text-summer-gold tracking-widest text-xs font-bold whitespace-nowrap">JOIN US</button>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:items-end">
              <a href="#" className="serif text-4xl hover:text-summer-gold transition-all hover:translate-x-4">Instagram</a>
              <a href="#" className="serif text-4xl hover:text-summer-gold transition-all hover:translate-x-4">Editorial</a>
              <a href="#" className="serif text-4xl hover:text-summer-gold transition-all hover:translate-x-4">Contact</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-summer-paper/10 text-[10px] tracking-widest font-semibold opacity-30">
            <div>© 2026 LACASO COLLECTIONS. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-12">
              <a href="#">PRIVACY POLICY</a>
              <a href="#">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed bottom-10 left-10 z-20 flex items-center gap-4 text-summer-ink/60">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-white/50 backdrop-blur-md rounded-full hover:bg-white/80 transition-colors border border-black/5"
          aria-label="Toggle Atmosphere Sound"
        >
          {isPlaying ? <Volume2 className="w-5 h-5 text-summer-gold" /> : <Play className="w-5 h-5" />}
        </button>
        <div className="hidden md:block">
          <p className="text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
            <Wind className="w-3 h-3 animate-pulse" />
            Atmospheric Sound: Upbeat Summer Instrumental
          </p>
        </div>
      </div>

      <div className="fixed top-10 right-10 z-20">
        <div className="flex flex-col items-end gap-1">
          <div className="h-px w-20 bg-summer-gold/30" />
          <p className="text-[10px] uppercase tracking-widest font-light serif italic">Since 1982</p>
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-summer-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
