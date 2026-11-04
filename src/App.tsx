/**
 * Dr. Mukul Thakur - Official Medical Website
 * Consultant Physician & Diabetologist | Meenaz Hospital, Govandi West
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Phone, 
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
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2,
  MessageSquare,
  X,
  ExternalLink,
  ShieldAlert,
  Navigation,
  PhoneCall
} from 'lucide-react';
import { DOCTOR_CONTENT, ServiceItem } from './content';

const serviceIcons: Record<string, any> = { 
  Thermometer, 
  HeartPulse, 
  Moon, 
  Dna, 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  Clock, 
  ShieldCheck, 
  Award
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="compact-container flex justify-between items-center">
        {/* Prominent Doctor Name in Nav */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-medical-600 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0">
            <Stethoscope size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">
              Dr. Mukul Thakur
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-medical-600 tracking-tight leading-none">
              Consultant Physician & Diabetologist
            </span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-7 font-semibold text-[13px] text-slate-600">
          <a href="#home" className="hover:text-medical-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-medical-600 transition-colors">About</a>
          <a href="#services" className="hover:text-medical-600 transition-colors">Services</a>
          <a href="#timings" className="hover:text-medical-600 transition-colors">OPD Hours</a>
          <a href="#gallery" className="hover:text-medical-600 transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-medical-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={DOCTOR_CONTENT.contact.callUrl} 
            className="btn-primary !px-4 !py-2 !text-xs rounded-lg flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall size={14} />
            <span>Call to Book: {DOCTOR_CONTENT.contact.phone}</span>
          </a>
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
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
            <div className="pb-3 border-b border-slate-100">
              <p className="font-extrabold text-base text-slate-900">Dr. Mukul Thakur</p>
              <p className="text-xs text-medical-600 font-semibold">Consultant Physician & Diabetologist</p>
            </div>
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">About Dr. Mukul Thakur</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Services</a>
            <a href="#timings" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">OPD Hours</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">Clinic Gallery</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-900 py-2 border-b border-slate-50">FAQ</a>
            <div className="pt-2 flex flex-col gap-2">
              <a href={DOCTOR_CONTENT.contact.callUrl} className="btn-primary w-full text-center text-xs flex items-center justify-center gap-1.5">
                <PhoneCall size={15} /> Call to Book: {DOCTOR_CONTENT.contact.phone}
              </a>
              <a href={DOCTOR_CONTENT.contact.whatsappUrl} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5">
                <MessageSquare size={15} /> WhatsApp Doctor
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="min-h-screen selection:bg-medical-500 selection:text-white">
      <Nav />

      {/* Hero Section - Prominent Doctor Name & Clinical Credentials */}
      <section id="home" className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-medical-50 to-transparent rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-sky-50 to-transparent rounded-full blur-[80px] -z-10 opacity-40" />

        <div className="compact-container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-medical-50 border border-medical-100 px-3 py-1 rounded-full mb-4 flex-wrap">
              <span className="w-1.5 h-1.5 bg-medical-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-medical-700">30+ Years Clinical Experience</span>
              <span className="text-slate-300">•</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Mon, Wed, Sat (20:00 – 01:00)</span>
            </div>
            
            {/* Prominent Doctor Name Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-2 tracking-tight text-slate-900">
              Dr. Mukul Thakur
            </h1>
            
            <p className="text-lg md:text-xl font-bold text-medical-700 mb-4">
              Consultant Physician & Diabetologist
            </p>

            <p className="text-base md:text-lg text-slate-500 font-medium mb-8 max-w-lg leading-relaxed">
              {DOCTOR_CONTENT.heroSubheadline}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href={DOCTOR_CONTENT.contact.callUrl} className="btn-primary">
                Call to Book Appointment <PhoneCall size={18} />
              </a>
              
              <a 
                href={DOCTOR_CONTENT.contact.whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary !px-5"
              >
                <MessageSquare size={16} className="text-emerald-600" />
                <span>WhatsApp Booking</span>
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

            <p className="text-xs text-slate-400 font-medium mt-3 flex items-center gap-1.5">
              <Phone size={13} className="text-medical-600" />
              <span>Direct bookings via call only. Online forms not required.</span>
            </p>
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
                alt="Dr. Mukul Thakur" 
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <p className="text-white font-extrabold text-xl leading-tight">Dr. Mukul Thakur</p>
                <p className="text-medical-300 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Consultant Physician & Diabetologist
                </p>
                <p className="text-[11px] text-slate-200 mt-1 font-medium">
                  MBBS, DM Medical Genetics (Imperial College, UK) • Meenaz Hospital
                </p>
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
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center shadow-md">
                <Moon size={20} />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-slate-900">Night OPD</p>
                <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-tight mt-0.5">20:00 – 01:00</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Catchment Areas Marquee Strip */}
      <div className="bg-slate-50 border-y border-slate-100 py-3">
        <div className="compact-container flex flex-wrap items-center justify-center md:justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <MapPin size={14} className="text-medical-600" />
            <span>Govandi Catchment Areas:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {DOCTOR_CONTENT.clinic.catchmentAreas.map((area, idx) => (
              <span key={idx} className="bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full font-medium text-[11px]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section - Core Clinical Specialities by Dr. Mukul Thakur */}
      <section id="services" className="section-padding bg-slate-50/50">
        <div className="compact-container">
          <div className="text-center mb-10">
             <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Medical Services</span>
             <h2 className="text-2xl md:text-3xl font-extrabold mt-2 tracking-tight text-slate-900">
               Clinical Specialities by Dr. Mukul Thakur
             </h2>
             <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
               Comprehensive care across Diabetology, Internal Medicine, and Late Night Specialist consultations.
             </p>
          </div>

          {/* 8 Bento Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTOR_CONTENT.services.map((service, i) => {
              const Icon = serviceIcons[service.icon] || Stethoscope;
              return (
                <motion.div
                  key={service.id || i}
                  whileHover={{ y: -5 }}
                  className="bento-card group hover:border-medical-500/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-all">
                        <Icon size={24} />
                      </div>
                      {service.badge && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-medical-100 text-medical-800 px-2 py-0.5 rounded-md">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold mb-2 tracking-tight text-slate-900">{service.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <button 
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-2 text-[11px] font-bold text-medical-600 uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer text-left pt-2 border-t border-slate-50"
                  >
                    <span>Consult Details</span> <ChevronRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section - Clinic Tour */}
      <section id="gallery" className="section-padding bg-white">
        <div className="compact-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Clinic Tour</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-900">Modern Medical Facilities</h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs font-medium md:mb-1">
              Equipped with modern diagnostic tools, pharmacy, and a sterile environment for patient safety.
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

      {/* About Section - About Dr. Mukul Thakur */}
      <section id="about" className="section-padding bg-slate-50/50">
        <div className="compact-container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-intense border-8 border-white relative aspect-[4/3] bg-slate-100">
               <img 
                 src="/images/clinic.jpg" 
                 alt="Dr. Mukul Thakur Clinic at Meenaz Hospital" 
                 className="w-full h-full object-cover" 
                 loading="lazy" 
               />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-xl z-10 w-48 border-medical-50">
               <div className="flex items-center gap-3 mb-2">
                  <Activity size={20} className="text-medical-600" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Experience</span>
               </div>
               <p className="text-3xl font-extrabold text-slate-900">30+ Yrs</p>
            </div>
          </div>
          <div>
            <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
              Senior Consultant Profile
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight text-slate-900 uppercase">
              ABOUT DR. MUKUL THAKUR
            </h2>
            <div className="space-y-4 mb-8">
               <p className="text-base text-slate-600 font-medium leading-relaxed">
                 {DOCTOR_CONTENT.summary}
               </p>
               <div className="grid gap-3">
                  <div className="flex gap-3 items-center p-3 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-medical-500 flex-shrink-0" />
                    <p className="text-sm font-bold text-slate-700">{DOCTOR_CONTENT.mbbs}</p>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-medical-500 flex-shrink-0" />
                    <p className="text-sm font-bold text-slate-700">{DOCTOR_CONTENT.dm}</p>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-white rounded-xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-medical-500 flex-shrink-0" />
                    <p className="text-sm font-bold text-slate-700">Maharashtra Medical Council (Reg. No. 2228)</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-slate-100 pt-8">
               <div>
                  <p className="text-2xl font-extrabold text-slate-900 mb-0.5">30+ Yrs</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Clinical Experience</p>
               </div>
               <div>
                  <p className="text-2xl font-extrabold text-slate-900 mb-0.5">20:00 – 01:00</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mon, Wed, Sat OPD</p>
               </div>
            </div>

            <div className="flex gap-3">
              <a href={DOCTOR_CONTENT.contact.callUrl} className="btn-primary !py-2.5 !px-8 text-sm">
                Call to Book Appointment <PhoneCall size={16} />
              </a>
              <a href={DOCTOR_CONTENT.contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-6 text-sm">
                <MessageSquare size={15} className="text-emerald-600" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated OPD Schedule Section */}
      <section id="timings" className="section-padding bg-white border-t border-slate-100">
        <div className="compact-container">
          <div className="text-center mb-8">
             <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-[10px] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
               Clinic Timings
             </span>
             <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-900">
               Dr. Mukul Thakur - OPD Operating Hours
             </h2>
             <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
               Official consultation hours at Meenaz Hospital, Govandi West.
             </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
            {/* The 7 Days Schedule Table */}
            <div className="lg:col-span-7 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-medical-600" />
                  <span className="font-bold text-slate-900 text-sm">Dr. Thakur's Weekly Schedule</span>
                </div>
                <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                  Mon, Wed, Sat Open
                </span>
              </div>

              {DOCTOR_CONTENT.schedule.map((slot, index) => {
                const isClosed = !slot.isOpen;
                return (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-colors ${
                      isClosed ? 'bg-rose-50/40 border-rose-100 text-rose-700' : 'bg-white border-slate-200 text-slate-900 font-bold'
                    }`}
                  >
                    <span className="font-bold text-slate-900 w-28 text-sm">{slot.day}</span>
                    <span className={`font-semibold ${isClosed ? 'text-rose-600' : 'text-slate-800'}`}>
                      {slot.time}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      isClosed ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {slot.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Hospital Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bento-card bg-medical-50/50 border-medical-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-medical-600 text-white flex items-center justify-center mb-3">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Meenaz Hospital</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West, Mumbai, Maharashtra – 400043
                </p>
                <div className="space-y-2 text-xs">
                  <p className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Phone size={13} className="text-medical-600" /> {DOCTOR_CONTENT.contact.phone}
                  </p>
                  <p className="text-slate-500">
                    Consultation Fee: {DOCTOR_CONTENT.clinic.consultationFee} • 24/7 Facility
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a 
                    href={DOCTOR_CONTENT.contact.callUrl}
                    className="btn-primary !py-2.5 !px-4 text-xs w-full flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={14} /> Call Dr. Thakur to Book
                  </a>
                  <a 
                    href={DOCTOR_CONTENT.contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2 !px-4 text-xs w-full flex items-center justify-center gap-1.5 text-slate-600"
                  >
                    <Navigation size={13} className="text-medical-600" /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="section-padding bg-slate-50/50">
        <div className="compact-container">
          <div className="text-center mb-8">
             <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px]">Patient Reviews</span>
             <h2 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight">TRUSTED BY THE COMMUNITY</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DOCTOR_CONTENT.testimonials.map((t, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-sm"
              >
                <div>
                   <div className="flex gap-0.5 mb-6">
                      {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#14b8a6" className="text-medical-500" />)}
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
      <section id="faq" className="section-padding bg-white">
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

      {/* Booking by Call Section */}
      <section id="appointment" className="section-padding bg-slate-50/50">
        <div className="compact-container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <span className="text-medical-600 font-bold uppercase tracking-[0.2em] text-[10px] bg-medical-50 px-3 py-1 rounded-full border border-medical-100">
                Direct Appointment Booking
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6 tracking-tight text-slate-900 uppercase">
                CONSULT DR. MUKUL THAKUR <br /> BY CALL ONLY
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-sm">
                Online booking is not available. To schedule an appointment or inquire about OPD slots, please call our clinic directly or send a message on WhatsApp.
              </p>
              
              <div className="grid gap-3">
                 <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Direct Doctor Staff Coordination</p>
                      <p className="text-[11px] text-slate-500">Confirm your exact appointment time without waiting.</p>
                    </div>
                 </div>

                 <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Walk-ins Welcome During OPD</p>
                      <p className="text-[11px] text-slate-500">Mon, Wed, Sat 20:00 to 01:00 at Meenaz Hospital.</p>
                    </div>
                 </div>

                 <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Consultation Fee</p>
                      <p className="text-[11px] text-slate-500">₹700 for comprehensive clinical examination & report review.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Action Box - High Impact Direct Call & WhatsApp Booking */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Clinic Desk
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                    Call Dr. Mukul Thakur's Clinic
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tap the button below to dial our clinic helpline directly.
                  </p>
                </div>

                {/* Primary Call Box */}
                <div className="p-6 rounded-2xl bg-medical-50/70 border border-medical-100 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-medical-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-medical-500/20 flex-shrink-0">
                      <PhoneCall size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Helpline Number</p>
                      <a 
                        href={DOCTOR_CONTENT.contact.callUrl}
                        className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-medical-600 transition-colors tracking-tight"
                      >
                        {DOCTOR_CONTENT.contact.phone}
                      </a>
                    </div>
                  </div>

                  <a 
                    href={DOCTOR_CONTENT.contact.callUrl} 
                    className="btn-primary w-full !py-4 text-base font-bold rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <PhoneCall size={20} />
                    <span>Call Now to Book (+91 76660 55602)</span>
                  </a>
                </div>

                {/* Secondary WhatsApp & Location Box */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <a 
                    href={DOCTOR_CONTENT.contact.whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-300 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">WhatsApp Desk</p>
                      <p className="text-xs font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Message to Inquire
                      </p>
                    </div>
                  </a>

                  <a 
                    href={DOCTOR_CONTENT.contact.mapsUrl}
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clinic Location</p>
                      <p className="text-xs font-extrabold text-slate-900 group-hover:text-medical-600 transition-colors">
                        Meenaz Hospital, Govandi
                      </p>
                    </div>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-600 border border-slate-100 leading-relaxed">
                  <strong>Consultation Days:</strong> Monday, Wednesday & Saturday (20:00 – 01:00). Tuesday, Thursday, Friday & Sunday are Closed.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-medical-50 text-medical-600 flex items-center justify-center mb-4">
                <Stethoscope size={24} />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-medical-600 bg-medical-50 px-2.5 py-1 rounded-full">
                Service Details
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-3">
                {selectedService.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600 mb-6">
                <p><strong>Doctor:</strong> Dr. Mukul Thakur (30+ Years Experience)</p>
                <p><strong>Hospital:</strong> Meenaz Hospital, Near Khalid Bakery, Govandi West</p>
                <p><strong>OPD Hours:</strong> Mon, Wed, Sat 20:00 – 01:00 (Tue, Thu, Fri, Sun Closed)</p>
                <p><strong>Booking Mode:</strong> By Direct Phone Call Only</p>
              </div>

              <div className="flex gap-3">
                <a 
                  href={DOCTOR_CONTENT.contact.callUrl}
                  className="btn-primary flex-1 !py-3 text-xs font-bold text-center justify-center flex items-center gap-1.5"
                >
                  <PhoneCall size={16} /> Call to Book Appointment
                </a>
                <a 
                  href={`https://wa.me/917666055602?text=${encodeURIComponent(`Hello Dr. Mukul Thakur, I want to inquire about: ${selectedService.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !py-3 text-xs font-bold px-4 flex items-center gap-1.5 text-emerald-700"
                >
                  <MessageSquare size={15} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer - Professional & Structured */}
      <footer className="pt-20 pb-10 bg-[#0F172A] text-white overflow-hidden">
        <div className="compact-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Col 1: Doctor Identity */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-medical-500 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl tracking-tight block text-white">
                    Dr. Mukul Thakur
                  </span>
                  <span className="text-xs text-medical-400 font-semibold block">
                    Consultant Physician & Diabetologist
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Over 30 years of clinical expertise. UK Qualified (MBBS, DM Medical Genetics - Imperial College, UK), Maharashtra Medical Council Reg. No. 2228.
              </p>
              <div className="flex gap-4 pt-1">
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
                 <li><a href="#about" className="hover:text-white transition-colors">About Dr. Mukul Thakur</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Medical Services</a></li>
                 <li><a href="#timings" className="hover:text-white transition-colors">OPD Operating Hours</a></li>
                 <li><a href="#gallery" className="hover:text-white transition-colors">Clinic Gallery</a></li>
                 <li><a href="#appointment" className="hover:text-white transition-colors">Book via Call</a></li>
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
              <h4 className="text-[11px] font-bold mb-6 text-medical-400 uppercase tracking-[0.2em]">Book by Phone</h4>
              <p className="text-slate-400 text-xs font-medium">
                Helpline: <strong className="text-white block text-sm mt-0.5">{DOCTOR_CONTENT.contact.phone}</strong>
              </p>
              <p className="text-slate-400 text-xs">
                Meenaz Hospital, Near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West, Mumbai 400043
              </p>
              <a 
                href={DOCTOR_CONTENT.contact.callUrl}
                className="btn-primary !py-2 !px-4 text-xs w-full text-center inline-flex items-center justify-center gap-1.5"
              >
                <PhoneCall size={13} /> Call Dr. Thakur Directly
              </a>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} DR. MUKUL THAKUR — CONSULTANT PHYSICIAN & DIABETOLOGIST
             </p>
             <div className="flex gap-8 text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
               <a href={DOCTOR_CONTENT.contact.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Google Maps</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
