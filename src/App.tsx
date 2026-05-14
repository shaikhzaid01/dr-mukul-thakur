/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Plus,
  Minus,
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
  CheckCircle2
} from 'lucide-react';
import { DOCTOR_CONTENT } from './content';

const serviceIcons: any = { Thermometer, HeartPulse, Moon, Dna };

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-7xl ${scrolled ? 'glass-card py-4' : 'bg-transparent py-6'}`}>
      <div className="px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-200">
            <Plus size={24} />
          </div>
          <span className="font-display font-black text-xl tracking-tighter uppercase whitespace-nowrap">{DOCTOR_CONTENT.name.split(' ').slice(1).join(' ')} <span className="text-slate-400">MD</span></span>
        </div>
        <div className="hidden md:flex items-center gap-10 font-bold text-sm text-slate-600">
          <a href="#home" className="hover:text-primary-600">Home</a>
          <a href="#services" className="hover:text-primary-600">Departments</a>
          <a href="#about" className="hover:text-primary-600">About</a>
          <a href="#faq" className="hover:text-primary-600">FAQ</a>
        </div>
        <a href="#appointment" className="bg-primary-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-primary-500 selection:text-white">
      <Nav />

      {/* Hero Section - Matching Nuvica Style */}
      <section id="home" className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-sky-100/30 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm mb-10 border border-slate-100">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Expert Care Since 1996</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.95] mb-8 tracking-tight">
              QUICK <br />
              <span className="text-primary-600">SMART</span> <br />
              MEDIC 
            </h1>
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-xl leading-relaxed">
              {DOCTOR_CONTENT.summary}
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#appointment" className="btn-primary py-5 px-10 rounded-[1.5rem]">
                Book Consultation <ArrowRight size={22} />
              </a>
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-[1.5rem] border border-slate-100 shadow-sm">
                 <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={20} />
                 </div>
                 <div>
                    <p className="text-sm font-black text-slate-900">Verified</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black">Imperial College UK</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4.5rem] overflow-hidden shadow-intense border-[12px] border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                alt={DOCTOR_CONTENT.name} 
                className="w-full aspect-[4/5] object-cover scale-110"
              />
            </div>
            
            {/* Floating Stats - Exactly like Ref */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-1/4 z-20 float-widget p-6 shadow-2xl rounded-3xl"
            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                <Award size={28} />
              </div>
              <div>
                <p className="text-2xl font-black leading-none">30+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Years Practice</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-1/4 z-20 float-widget p-6 shadow-2xl rounded-3xl"
            >
              <div className="w-14 h-14 bg-sky-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200">
                <Users size={28} />
              </div>
              <div>
                <p className="text-2xl font-black leading-none">6700+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Happy Patients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Bento Grid Style */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-xl">
               <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">Medical Departments</span>
               <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight uppercase tracking-tight">Our Professional <br/> Healthcare</h2>
             </div>
             <p className="text-slate-500 font-medium text-lg max-w-sm mb-2">
               Precision diagnostics meeting international standards at the local level for all patients.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTOR_CONTENT.services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -12 }}
                  className="bento-card group hover:bg-slate-900 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter group-hover:text-white">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Sleek Image & Data */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-intense border-[16px] border-white relative">
               <img src={DOCTOR_CONTENT.gallery[0]} alt="Clinic" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 shadow-2xl z-10 w-64">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                    <Activity size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Success Rate</span>
               </div>
               <p className="text-5xl font-black text-slate-900 leading-none">99.2%</p>
            </div>
          </div>
          <div>
            <span className="bg-primary-100 text-primary-600 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">Consultation Expert</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight uppercase">ABOUT {DOCTOR_CONTENT.name.toUpperCase()}</h2>
            <div className="space-y-6 mb-12">
               <p className="text-xl text-slate-600 font-medium leading-relaxed">
                 {DOCTOR_CONTENT.summary}
               </p>
               <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex gap-4 mb-4 items-center">
                    <CheckCircle2 size={24} className="text-primary-500" />
                    <p className="font-bold text-slate-900">{DOCTOR_CONTENT.mbbs}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <CheckCircle2 size={24} className="text-primary-500" />
                    <p className="font-bold text-slate-900">{DOCTOR_CONTENT.dm}</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-slate-200 pt-10">
               <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">12K+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Successful Cases</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">20+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Medical Partners</p>
               </div>
            </div>

            <button className="btn-primary w-fit px-12">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - New Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">Feedback</span>
             <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase tracking-tighter">WHAT OUR PATIENTS SAY</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTOR_CONTENT.testimonials.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between"
              >
                <div>
                   <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#0ea5e9" className="text-primary-500" />)}
                   </div>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                     "{t.text}"
                   </p>
                </div>
                <div className="flex items-center gap-4">
                   <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover shadow-md" />
                   <div>
                      <p className="font-black text-slate-900">{t.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Sleek Accordion */}
      <section id="faq" className="section-padding bg-slate-950 text-white rounded-[4rem] mx-6 mb-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-primary-400 font-black uppercase tracking-widest text-[10px]">Knowledge Base</span>
             <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase tracking-tighter">COMMON INQUIRIES</h2>
          </div>

          <div className="space-y-4">
             {DOCTOR_CONTENT.faqs.map((faq, i) => (
               <div key={i} className={`rounded-3xl overflow-hidden transition-all duration-300 ${activeFaq === i ? 'bg-white/10' : 'bg-transparent border border-white/10 hover:border-white/30'}`}>
                 <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-8 flex justify-between items-center text-left transition-colors"
                 >
                   <span className="text-xl font-black tracking-tight uppercase">{faq.q}</span>
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-primary-600 rotate-180' : 'bg-white/10 shadow-lg'}`}>
                      <Plus size={24} />
                   </div>
                 </button>
                 <AnimatePresence>
                   {activeFaq === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                     >
                       <div className="px-8 pb-10 text-slate-400 text-lg font-medium leading-relaxed border-t border-white/5 pt-6 mx-8">
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

      {/* Appointment CTA - High Performance */}
      <section id="appointment" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-10 md:p-24 overflow-hidden relative border border-slate-100 bg-white shadow-intense">
            <div className="absolute top-0 right-0 w-[45%] h-full bg-primary-600 -skew-x-12 translate-x-1/2 pointer-events-none hidden lg:block" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px]">Contact Booking</span>
                <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8 leading-tight tracking-tight uppercase">REQUEST AN <br /> APPOINTMENT</h2>
                <p className="text-slate-500 text-lg font-medium mb-12 max-w-sm leading-relaxed">
                  Join 6,700+ families. Use the form to request your diagnostic session with Dr. Thakur.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm border border-slate-50">
                         <Phone size={24} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Office Hotline</p>
                         <p className="text-2xl font-black tracking-tight">{DOCTOR_CONTENT.contact.phone}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm border border-slate-50">
                         <Mail size={24} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Email</p>
                         <p className="text-2xl font-black tracking-tight">{DOCTOR_CONTENT.contact.email}</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-50">
                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Patient Details</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 font-bold text-slate-700 outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all" placeholder="Full Identity" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Mobile Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 font-bold text-slate-700 outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all" placeholder="+91 XXXX XXXX" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Diagnostic Department</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                      {DOCTOR_CONTENT.services.map(s => <option key={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                  <button type="button" className="w-full btn-primary py-6 text-xl rounded-2xl mt-4">
                    Send Appointment <ChevronRight size={26} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Highly Legible & Professional */}
      <footer className="pt-28 pb-14 bg-slate-900 text-white rounded-t-[5rem] mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-sky-500 to-primary-600" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Plus size={32} />
                </div>
                <span className="font-display font-black text-4xl tracking-tighter uppercase whitespace-nowrap">
                   {DOCTOR_CONTENT.name.split(' ').slice(1).join(' ')} <span className="text-slate-500">Clinics</span>
                </span>
              </div>
              <p className="text-slate-400 text-xl font-medium max-w-sm leading-relaxed">
                Expert primary healthcare powered by 30+ years of clinical excellence and international diagnostic training.
              </p>
              <div className="flex gap-5">
                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                   <a key={i} href="#" className="w-14 h-14 rounded-2xl border border-white/5 flex items-center justify-center bg-white/5 hover:bg-primary-600 hover:scale-110 transition-all">
                      <Icon size={24} />
                   </a>
                 ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black mb-10 text-primary-500 uppercase tracking-[0.2em]">Medical Center</h4>
              <ul className="space-y-6">
                 {DOCTOR_CONTENT.clinics.map((c, i) => (
                   <li key={i} className="group">
                      <p className="font-black text-lg tracking-tight group-hover:text-primary-500 transition-colors uppercase">{c.name}</p>
                      <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wider">{c.location}</p>
                      <p className="text-primary-500/80 text-[10px] font-black mt-2 uppercase tracking-widest">{c.timings}</p>
                   </li>
                 ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black mb-10 text-primary-500 uppercase tracking-[0.2em]">Contact Node</h4>
              <ul className="space-y-8 text-slate-400 font-bold">
                 <li className="flex items-start gap-4">
                    <MapPin className="text-primary-600 shrink-0" size={24} />
                    <span className="text-sm uppercase tracking-wide leading-relaxed">Opposite Shivaji Nagar Police Station, Govandi, Mumbai</span>
                 </li>
                 <li className="flex items-center gap-4">
                    <Phone className="text-primary-600 shrink-0" size={24} />
                    <span className="text-lg tracking-tight font-black">{DOCTOR_CONTENT.contact.phone}</span>
                 </li>
                 <li className="flex items-center gap-4">
                    <Mail className="text-primary-600 shrink-0" size={24} />
                    <span className="text-lg tracking-tight font-black">{DOCTOR_CONTENT.contact.email}</span>
                 </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
             <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] text-center md:text-left">
               © 2024 {DOCTOR_CONTENT.name.toUpperCase()} — SYSTEM POWERED BY VISIONARY
             </p>
             <div className="flex gap-12 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Safety</a>
               <a href="#" className="hover:text-white transition-colors">Archive</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
