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
  Phone, 
  Mail, 
  Plus,
  Star,
  Thermometer,
  HeartPulse,
  Moon,
  Dna,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Activity,
  Users,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2,
  Calendar,
  MessageSquare,
  X,
  ExternalLink
} from 'lucide-react';
import { DOCTOR_CONTENT } from './content';

const serviceIcons: any = { Thermometer, HeartPulse, Moon, Dna };

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="compact-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-medical-600 rounded-lg flex items-center justify-center text-white shadow-sm">
            <Plus size={18} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-slate-900">
            {DOCTOR_CONTENT.name.split(' ').slice(1).join(' ')} <span className="text-medical-600 font-medium">Clinics</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-[13px] text-slate-600">
          <a href="#home" className="hover:text-medical-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-medical-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-medical-600 transition-colors">About</a>
          <a href="#gallery" className="hover:text-medical-600 transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-medical-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#appointment" className="hidden sm:flex btn-primary !px-5 !py-2 !text-xs rounded-lg">
            Book Now
          </a>
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Activity size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">About</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Gallery</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2">FAQ</a>
            <a href="#appointment" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full mt-2">Book Appointment</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-medical-500 selection:text-white">
      <Nav />

      {/* Hero Section - Compact & Clinical */}
      <section id="home" className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-medical-50 to-transparent rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-sky-50 to-transparent rounded-full blur-[80px] -z-10 opacity-40" />

        <div className="compact-container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-medical-50 border border-medical-100 px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-medical-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-medical-700">30+ Years Professional Experience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
              {DOCTOR_CONTENT.heroHeadline.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-medical-600">{DOCTOR_CONTENT.heroHeadline.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium mb-8 max-w-lg leading-relaxed">
              {DOCTOR_CONTENT.heroSubheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="btn-primary">
                Book Consultation <Calendar size={18} />
              </a>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                 <div className="w-8 h-8 bg-medical-50 text-medical-600 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={18} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-slate-900">Reg No: {DOCTOR_CONTENT.registration.number}</p>
                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">{DOCTOR_CONTENT.registration.council}</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-intense border-4 border-white bg-white w-full max-w-md mx-auto">
              <img 
                src="/images/doctor.png" 
                alt={DOCTOR_CONTENT.name} 
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-lg">{DOCTOR_CONTENT.name}</p>
                <p className="text-medical-300 text-xs font-medium uppercase tracking-widest">{DOCTOR_CONTENT.title}</p>
              </div>
            </div>
            
            {/* Minimal Floating Widgets */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 z-20 float-widget"
            >
              <div className="w-10 h-10 bg-medical-600 text-white rounded-lg flex items-center justify-center shadow-md">
                <Award size={20} />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">30+</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Years Exp.</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-1/4 z-20 float-widget"
            >
              <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center shadow-md">
                <Users size={20} />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">6K+</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Patients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Compact Bento */}
      <section id="services" className="section-padding bg-slate-50/50">
        <div className="compact-container">
          <div className="text-center mb-8">
             <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Medical Services</span>
             <h2 className="text-2xl md:text-3xl font-extrabold mt-2 tracking-tight text-slate-900">Expert Healthcare Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTOR_CONTENT.services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bento-card group hover:border-medical-500/30"
                >
                  <div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-medical-600 group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-medical-600 uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer">
                    Learn More <ChevronRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section - NEW */}
      <section id="gallery" className="section-padding bg-white">
        <div className="compact-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Clinic Tour</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-900">Modern Medical Facilities</h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs font-medium md:mb-1">
              Equipped with modern diagnostic tools and a sterile environment for patient safety.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DOCTOR_CONTENT.gallery.slice(0, 4).map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl aspect-square group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img src={img} alt={`Facility ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-medical-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Compact & Informative */}
      <section id="about" className="section-padding bg-slate-50/50">
        <div className="compact-container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-intense border-8 border-white relative aspect-[4/3]">
               <img src={DOCTOR_CONTENT.gallery[5]} alt="Clinic" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-xl z-10 w-48 border-medical-50">
               <div className="flex items-center gap-3 mb-2">
                  <Activity size={20} className="text-medical-600" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Success Rate</span>
               </div>
               <p className="text-3xl font-extrabold text-slate-900">99.2%</p>
            </div>
          </div>
          <div>
            <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Consultation Expert</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-slate-900 uppercase">PROFESSIONAL JOURNEY</h2>
            <div className="space-y-4 mb-8">
               <p className="text-base text-slate-600 font-medium leading-relaxed">
                 {DOCTOR_CONTENT.summary}
               </p>
               <div className="grid gap-3">
                  <div className="flex gap-3 items-center p-3 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-medical-500" />
                    <p className="text-sm font-bold text-slate-700">{DOCTOR_CONTENT.mbbs}</p>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-medical-500" />
                    <p className="text-sm font-bold text-slate-700">{DOCTOR_CONTENT.dm}</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-slate-100 pt-8">
               <div>
                  <p className="text-2xl font-extrabold text-slate-900 mb-0.5">12K+</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Cases Handled</p>
               </div>
               <div>
                  <p className="text-2xl font-extrabold text-slate-900 mb-0.5">20+</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Health Partners</p>
               </div>
            </div>

            <button className="btn-secondary !py-2.5 !px-8 text-sm">
              Read More History <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="section-padding bg-white">
        <div className="compact-container">
          <div className="text-center mb-8">
             <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Patient Reviews</span>
             <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight">TRUSTED BY THE COMMUNITY</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DOCTOR_CONTENT.testimonials.map((t, i) => (
              <motion.div 
                key={i}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
              >
                <div>
                   <div className="flex gap-0.5 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#14b8a6" className="text-medical-500" />)}
                   </div>
                   <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-8 italic">
                     "{t.text}"
                   </p>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 font-bold text-xs shadow-sm">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <p className="font-bold text-sm text-slate-900">{t.name}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean Professional Accordion */}
      <section id="faq" className="section-padding bg-slate-50">
        <div className="compact-container max-w-3xl">
          <div className="text-center mb-8">
             <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Help Center</span>
             <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight">FREQUENTLY ASKED</h2>
          </div>

          <div className="space-y-3">
             {DOCTOR_CONTENT.faqs.map((faq, i) => (
               <div key={i} className={`rounded-xl overflow-hidden border border-slate-200 bg-white transition-all duration-200 ${activeFaq === i ? 'ring-2 ring-medical-500/20 border-medical-200' : 'hover:border-slate-300'}`}>
                 <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                 >
                   <span className="text-base font-bold text-slate-800">{faq.q}</span>
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'bg-medical-600 text-white rotate-45' : 'bg-slate-50 text-slate-400'}`}>
                      <Plus size={20} />
                   </div>
                 </button>
                 <AnimatePresence>
                   {activeFaq === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.2 }}
                     >
                       <div className="px-6 pb-6 text-slate-500 text-[14px] font-medium leading-relaxed pt-2 border-t border-slate-50">
                         {faq.a}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Proper Appointment Form */}
      <section id="appointment" className="section-padding bg-white">
        <div className="compact-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Get In Touch</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6 tracking-tight text-slate-900 uppercase">REQUEST AN <br /> APPOINTMENT</h2>
              <p className="text-sm md:text-base text-slate-500 font-medium mb-10 leading-relaxed max-w-sm">
                Join 6,700+ satisfied families. Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="grid gap-4">
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-medical-600 shadow-sm border border-slate-50">
                       <Phone size={18} />
                    </div>
                    <div>
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Office Hotline</p>
                       <p className="text-lg font-bold tracking-tight">{DOCTOR_CONTENT.contact.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-medical-600 shadow-sm border border-slate-50">
                       <Mail size={18} />
                    </div>
                    <div>
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Support Email</p>
                       <p className="text-lg font-bold tracking-tight">{DOCTOR_CONTENT.contact.email}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-medical-600 shadow-sm border border-slate-50">
                       <MapPin size={18} />
                    </div>
                    <div>
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Main Clinic</p>
                       <p className="text-sm font-bold tracking-tight">Shivaji Nagar, Govandi, Mumbai</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
                <form className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" className="input-field" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Phone Number</label>
                    <input type="tel" className="input-field" placeholder="+91 98XXX XXXXX" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" className="input-field" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Preferred Department</label>
                    <select className="input-field appearance-none cursor-pointer">
                      <option>General Consultation</option>
                      {DOCTOR_CONTENT.services.map(s => <option key={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">How can we help?</label>
                    <textarea className="input-field min-h-[100px] py-4" placeholder="Briefly describe your health concern..."></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="button" className="btn-primary w-full !py-4 text-base font-bold rounded-xl mt-2 group">
                      Confirm Appointment Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-bold">
                      Your privacy is protected. We follow all medical data standards.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional & Structured */}
      <footer className="pt-20 pb-10 bg-[#0F172A] text-white overflow-hidden">
        <div className="compact-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-medical-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                  <Plus size={18} />
                </div>
                <span className="font-display font-bold text-xl tracking-tight uppercase">
                  THAKUR <span className="text-medical-400 font-medium text-sm">Clinics</span>
                </span>
              </div>
              <p className="text-slate-400 text-[14px] font-medium leading-relaxed max-w-xs">
                Dr. Mukul Thakur provides international standards of healthcare with over 30 years of clinical and diagnostic experience.
              </p>
              <div className="flex gap-4">
                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                   <a key={i} href="#" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 hover:bg-medical-500 hover:text-white transition-all">
                      <Icon size={16} />
                   </a>
                 ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold mb-6 text-medical-400 uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="space-y-4 text-[13px] font-medium text-slate-400">
                 <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Medical Services</a></li>
                 <li><a href="#about" className="hover:text-white transition-colors">Dr. Thakur's Bio</a></li>
                 <li><a href="#gallery" className="hover:text-white transition-colors">Clinic Gallery</a></li>
                 <li><a href="#appointment" className="hover:text-white transition-colors">Book Online</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold mb-6 text-medical-400 uppercase tracking-[0.2em]">Clinic Locations</h4>
              <ul className="space-y-6">
                 {DOCTOR_CONTENT.clinics.map((c, i) => (
                   <li key={i} className="flex gap-4 group">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-medical-500/50 transition-colors">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-[14px] uppercase tracking-tight text-slate-100 group-hover:text-medical-400 transition-colors">{c.name}</p>
                        <p className="text-slate-500 text-[12px] font-medium line-clamp-1">{c.location}</p>
                        <div className="flex flex-col gap-1 pt-1">
                          <div className="flex items-center gap-2 text-medical-400 text-[10px] font-bold uppercase tracking-widest">
                            <Clock size={12} /> {c.timings}
                          </div>
                          {c.hospitalHours && (
                            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                              <Plus size={12} /> {c.hospitalHours}
                            </div>
                          )}
                        </div>
                      </div>
                   </li>
                 ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-bold mb-6 text-medical-400 uppercase tracking-[0.2em]">Subscribe</h4>
              <p className="text-slate-500 text-[12px] font-medium">Get health tips and clinic updates directly in your inbox.</p>
              <div className="relative">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs font-medium focus:border-medical-500 outline-none" />
                <button className="absolute right-1 top-1 bottom-1 bg-medical-600 px-3 rounded-md text-[10px] font-bold">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} DR. MUKUL THAKUR — PRECISION MEDICAL CARE
             </p>
             <div className="flex gap-8 text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
               <a href="#" className="hover:text-white transition-colors">Sitemap</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
