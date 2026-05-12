/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Calendar, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Hospital, 
  Star,
  Thermometer,
  HeartPulse,
  Moon,
  Dna,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { DOCTOR_CONTENT } from './content';

// Reuseable Components
const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-400' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"
    />
  </div>
);

const TestimonialCard = ({ name, role, text, avatar }: any) => (
  <motion.div 
    whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
    className="card-3d p-8 rounded-[32px] flex flex-col gap-6 relative group"
  >
    <div className="absolute top-8 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
      <Star size={40} fill="currentColor" />
    </div>
    <p className="text-lg italic text-slate-700 relative z-10 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4 mt-auto">
      <img src={avatar} className="w-14 h-14 rounded-full border-2 border-primary-100 shadow-md" alt={name} />
      <div>
        <h4 className="font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-slate-500 font-medium">{role}</p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const iconMap: any = {
    Thermometer,
    HeartPulse,
    Moon,
    Dna
  };

  return (
    <div className="min-h-screen selection:bg-primary-100 selection:text-primary-700">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-40 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary-100 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-blue-100 rounded-full blur-[100px]"
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3 translate-y-2 max-w-[95%] left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="p-2.5 bg-primary-600 rounded-xl text-white shadow-lg shadow-primary-200"
            >
              <Stethoscope size={24} />
            </motion.div>
            <span className="font-display font-bold text-2xl tracking-tighter text-slate-900">
              Dr. Mukul Thakur
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-slate-600">
            <a href="#about" className="hover:text-primary-600 transition-all relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
            </a>
            <a href="#services" className="hover:text-primary-600 transition-all relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
            </a>
            <a href="#clinics" className="hover:text-primary-600 transition-all relative group">
              Clinics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
            </a>
            <a href="#appointment" className="btn-3d bg-slate-900 text-white px-7 py-3 rounded-xl hover:bg-primary-600 transition-all hover:scale-105 active:scale-95">
              Book Today
            </a>
          </div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 bg-slate-100 rounded-lg" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden glass absolute top-full left-[2.5%] right-[2.5%] px-8 py-10 flex flex-col gap-6 rounded-3xl border border-white/40 shadow-3xl overflow-hidden"
            >
              <a href="#about" className="text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>About Dr. Thakur</a>
              <a href="#services" className="text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Medical Services</a>
              <a href="#clinics" className="text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Clinic Locations</a>
              <div className="h-px bg-slate-200" />
              <a href="#appointment" className="bg-primary-600 text-white p-5 rounded-2xl text-center font-bold shadow-xl shadow-primary-200" onClick={() => setIsMenuOpen(false)}>
                Book Fast Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            className="flex-1 relative z-10 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm text-primary-700 rounded-full text-sm font-bold mb-8 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-white"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Consultations Today
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter"
            >
              Next-Gen Care <br />
              <span className="text-primary-600 drop-shadow-sm">UK Educated.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Bridging international medical standards with compassionate local care. 
              Over 30 years of excellence in General Medicine and Medical Genetics.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <a href="#appointment" className="btn-3d px-10 py-5 bg-primary-600 text-white rounded-[20px] font-bold text-lg hover:bg-primary-700 flex items-center gap-3 active:translate-y-1">
                Schedule Now <ArrowRight size={20} />
              </a>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=doc${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="Testimonial" />
                ))}
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold border-4 border-white text-xs">
                  500+
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 italic">Trusted by thousands of families</p>
            </motion.div>
          </motion.div>
          
            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ rotateY: mousePos.x * 0.1, rotateX: mousePos.y * -0.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-1 relative perspective-1000 w-full max-w-lg mx-auto lg:max-w-none"
          >
             {/* 3D Decorative Layers */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 rounded-full -z-10 blur-3xl"
            />
            
            <motion.div 
              animate={{ 
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, 4, 0, -4, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
              className="relative z-10 rounded-[48px] overflow-hidden shadow-[var(--shadow-3d-intense)] border-[12px] border-white group cursor-pointer lg:rotate-3d"
            >
              <div className="absolute inset-0 bg-[var(--lighting-gradient)] z-20 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                alt="Dr. Mukul Thakur Professional Portrait" 
                className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8 md:p-10 z-10">
                <div className="text-white">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary-400 mb-2">Imperial College London</p>
                  <h3 className="text-2xl md:text-3xl font-black">Clinical Excellence since 1996</h3>
                </div>
              </div>
            </motion.div>

            {/* Float Stats - Adjusted for Mobile Bulkiness */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, -2, 0, 2, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-12 top-1/6 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-[var(--shadow-3d)] z-30 flex items-center gap-2 md:gap-4 hover:scale-110 transition-transform cursor-pointer border-white/60"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-green-200/50">
                <Stethoscope size={20} className="md:w-[28px] md:h-[28px]" />
              </div>
              <div className="hidden xs:block">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider mb-0.5">Clinic Status</p>
                <p className="font-display font-black text-xs md:text-xl text-slate-900">OPEN NOW</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 md:-right-8 bottom-1/4 glass p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-[var(--shadow-3d)] z-30 text-center hover:scale-110 transition-transform cursor-pointer border-white/60"
            >
              <p className="text-xl md:text-3xl font-black text-primary-600 mb-0.5 md:mb-1">30+</p>
              <p className="text-[9px] md:text-xs font-black text-slate-500 uppercase tracking-widest leading-tight">Years Professional<br/>Practice</p>
            </motion.div>

            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 left-1/4 glass px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl z-30 flex items-center gap-2 border-white/80"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/50?u=user${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] md:text-sm font-bold text-slate-800 tracking-tight">4.9/5 Patient Rating</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with 3D feel */}
      <section id="services" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Providing specialized medical expertise across general health and genetics.">
            Medical Specializations
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTOR_CONTENT.services.map((service, i) => {
              const IconComp = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-3d p-10 rounded-[40px] group relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-50 rounded-full group-hover:scale-150 transition-transform duration-500 -z-10" />
                  <div className="w-16 h-16 bg-white text-primary-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                    <IconComp size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                  <a href="#appointment" className="mt-auto flex items-center gap-2 font-bold text-primary-600 group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience / Counter Section */}
      <section className="bg-slate-900 section-padding overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 skew-x-[30deg] translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-3">
              <h4 className="text-5xl font-black text-primary-500">30+</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Years Exp</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="space-y-3">
              <h4 className="text-5xl font-black text-primary-500">10k+</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Patients Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-3">
              <h4 className="text-5xl font-black text-primary-500">15+</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Certifications</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-3">
              <h4 className="text-5xl font-black text-primary-500">2</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Key Units</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Look */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="What our patients say about their journey to better health.">
            Patient Stories
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {(DOCTOR_CONTENT as any).testimonials?.map((t: any, i: number) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeading subtitle="Peek inside our state-of-the-art facilities designed for patient comfort.">
            Gallery & Facility
          </SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {(DOCTOR_CONTENT as any).gallery?.map((img: string, i: number) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`rounded-[32px] overflow-hidden shadow-xl aspect-square relative group ${i % 2 === 1 ? 'translate-y-8' : ''}`}
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Facility" />
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinics / Maps */}
      <section id="clinics" className="section-padding bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <SectionHeading light subtitle="Strategic locations in Govandi and Shivaji Nagar to serve the heart of Mumbai.">
            Primary Care Centers
          </SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {DOCTOR_CONTENT.clinics.map((clinic, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-slate-800/80 p-10 rounded-[48px] border border-slate-700/50 backdrop-blur-3xl shadow-2xl flex flex-col md:flex-row gap-10 items-center overflow-hidden group"
              >
                <div className="md:w-1/3 w-full h-48 md:h-full rounded-[32px] overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary-600/40 group-hover:bg-primary-600/0 transition-all duration-500 z-10" />
                   <img src={i === 0 ? "https://images.unsplash.com/photo-1586773860418-d3b978ec8172?q=80&w=2073&auto=format&fit=crop" : "https://images.unsplash.com/photo-1587350859728-1176cc2ff682?q=80&w=2070&auto=format&fit=crop"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={clinic.name} />
                </div>
                <div className="md:w-2/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                      <Hospital size={24} />
                    </div>
                    <h3 className="text-3xl font-bold">{clinic.name}</h3>
                  </div>
                  
                  <div className="space-y-4 text-slate-400 font-medium">
                    <div className="flex items-start gap-4 group/item">
                      <MapPin className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                      <p className="group-hover/item:text-white transition-colors">{clinic.location}</p>
                    </div>
                    <div className="flex items-center gap-4 group/item">
                      <Clock className="text-primary-500 flex-shrink-0" size={20} />
                      <p className="group-hover/item:text-white transition-colors">{clinic.timings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-5 py-2 bg-slate-700 rounded-full text-sm font-bold text-white uppercase tracking-widest border border-slate-600">Fee: {clinic.fee}</span>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name + ' ' + clinic.location)}`} target="_blank" className="flex items-center gap-2 text-primary-400 font-bold hover:text-primary-300 transition-colors group-hover:translate-x-2 transition-transform">
                      View Map <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Master Form */}
      <section id="appointment" className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-primary-600 rounded-[64px] p-12 md:p-20 overflow-hidden relative shadow-[0_50px_100px_-30px_rgba(2,132,199,0.4)]">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent -rotate-12 scale-150 -translate-x-1/2" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="flex flex-col lg:flex-row gap-20 relative z-10">
              <div className="lg:w-1/2 text-white">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-5xl font-black mb-8 leading-[1.1]">Join 5,000+ Happy Patients</h2>
                  <p className="text-xl text-primary-100 mb-12 leading-relaxed">
                    Request your health checkup or genetic screening today. 
                    Our medical coordinator will call you to confirm the best time.
                  </p>
                  
                  <div className="space-y-10">
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center group-hover:bg-white/30 transition-all font-bold text-2xl drop-shadow-xl">📞</div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary-200">Call Directly</p>
                        <p className="text-2xl font-black">{DOCTOR_CONTENT.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center group-hover:bg-white/30 transition-all font-bold text-2xl drop-shadow-xl">✉️</div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary-200">Email Query</p>
                        <p className="text-2xl font-black">{DOCTOR_CONTENT.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 glass p-10 md:p-14 rounded-[48px] text-slate-800 shadow-2xl relative"
              >
                <div className="absolute -top-6 left-12 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-xl border-4 border-primary-600">
                  Appointment Request
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-primary-500 focus:bg-white outline-none transition-all font-bold" placeholder="E.g. Rajesh Kumar" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Mobile</label>
                    <input type="tel" className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-primary-500 focus:bg-white outline-none transition-all font-bold" placeholder="+91 XXXX XXXX" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Preferred Clinic</label>
                    <select className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-primary-500 focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer">
                      <option>Lotus Hospital, Govandi</option>
                      <option>Apex Hospital, Govandi</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full py-6 bg-primary-600 text-white rounded-2xl font-black text-xl hover:bg-primary-700 transition-all shadow-[0_20px_40px_-10px_rgba(2,132,199,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-4">
                       BOOK MY SLOT NOW <CheckCircle2 size={24} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Social Hub */}
      <footer className="bg-slate-900 pt-32 pb-16 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-6 gap-20 mb-24">
            <div className="lg:col-span-3 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-500/20 rotate-12">
                  <Stethoscope size={32} />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tighter">Dr. Mukul Thakur</h2>
              </div>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Elevating Mumbai's primary healthcare with 30 years of integrity, 
                advanced genetic insights, and UK clinical excellence.
              </p>
              <div className="flex gap-6">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="#" 
                    className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all border border-slate-700"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <h4 className="text-lg font-black uppercase tracking-widest text-primary-500">Navigation</h4>
              <ul className="space-y-6 text-slate-400 font-bold">
                <li><a href="#about" className="hover:text-primary-400 transition-colors underline decoration-transparent hover:decoration-primary-400">About Clinical Care</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Specializations</a></li>
                <li><a href="#clinics" className="hover:text-primary-400 transition-colors">Find Clinic</a></li>
                <li><a href="#appointment" className="hover:text-primary-400 transition-colors">Book Slot</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-lg font-black uppercase tracking-widest text-primary-500">Global Standards</h4>
              <div className="p-8 bg-slate-800/50 rounded-[40px] border border-slate-700/50 backdrop-blur-md">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Imperial_College_London_logo.svg/1200px-Imperial_College_London_logo.svg.png" className="h-10 mb-6 grayscale invert" alt="Imperial College" />
                 <p className="text-slate-400 text-sm font-medium leading-relaxed">
                   Alumni of Imperial College London. Trained in medical genetics and advanced clinical diagnostics.
                 </p>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <p>© 2025 DR. MUKUL THAKUR CLINICS. CRAFTED BY ZENITH MEDICAL SOLUTIONS.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Vault</a>
              <a href="#" className="hover:text-white transition-colors">Patient Ethics</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
