export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  icon: string;
  badge?: string;
}

export const DOCTOR_CONTENT = {
  name: "Dr. Mukul Thakur",
  title: "Consultant Physician & Diabetologist",
  subtitle: "Senior Internist & Medical Genetics Specialist (UK Qualified)",
  businessName: "Dr. Mukul Thakur | Consultant Physician & Diabetologist | Meenaz Hospital, Govandi",
  experience: "30+ Years Experience",
  registration: {
    council: "Maharashtra Medical Council",
    number: "2228",
    year: "2005"
  },
  mbbs: "MBBS — Imperial College, UK (1996)",
  dm: "DM Medical Genetics — Imperial College, UK (2003)",
  credentials: [
    {
      degree: "MBBS",
      institution: "Imperial College, UK",
      year: "1996"
    },
    {
      degree: "DM Medical Genetics",
      institution: "Imperial College, UK",
      year: "2003"
    },
    {
      degree: "Maharashtra Medical Council",
      institution: "Registered Medical Practitioner",
      year: "Reg. No. 2228"
    }
  ],
  heroHeadline: "Advanced Diabetes & Internal Medicine Specialist.",
  heroSubheadline: "UK-trained Senior Consultant Physician & Diabetologist with over 30 years clinical experience. Specializing in uncontrolled diabetes, hypertension, and Night OPD (20:00 – 01:00) at Meenaz Hospital, Govandi West.",
  summary: "Dr. Mukul Thakur is an experienced and renowned Consultant Physician and Diabetologist in Govandi, Mumbai, boasting over 30 years of clinical experience. Holding an MBBS and a prestigious DM in Medical Genetics from Imperial College, UK, Dr. Thakur specializes in comprehensive internal medicine, advanced diabetes care, and chronic illness management. Operating an exclusive Night OPD at Meenaz Hospital (near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West), he provides expert medical care for uncontrolled diabetes, high blood pressure, thyroid disorders, viral fevers, infectious diseases, and respiratory conditions. Committed to patient-first, evidence-based healthcare.",
  
  highlights: [
    "30+ Years of Senior Clinical & Diagnostic Experience",
    "MBBS & DM in Medical Genetics (Imperial College, UK)",
    "Exclusive Night Specialist OPD: Mon, Wed, Sat (20:00 – 01:00)",
    "Comprehensive Diabetes Centre & Blood Sugar Optimization",
    "Serving Shivaji Nagar, Govandi West, Mankhurd, Chembur & Deonar"
  ],

  contact: {
    phone: "+91 76660 55602",
    displayPhone: "+91 76660 55602",
    callUrl: "tel:+917666055602",
    whatsappUrl: "https://wa.me/917666055602?text=Hello%20Dr.%20Mukul%20Thakur,%20I%20would%20like%20to%20inquire%20about%20a%20consultation",
    email: "contact@drthakur.com",
    website: "https://drmukulthakur.vercel.app/",
    mapsUrl: "https://maps.google.com/maps?cid=17693538218711509757"
  },

  clinic: {
    hospitalName: "Meenaz Hospital",
    landmark: "Near Khalid Bakery",
    area: "Lotus Colony, Shivaji Nagar, Govandi West",
    cityStateZip: "Mumbai, Maharashtra – 400043",
    fullAddress: "Meenaz Hospital, Near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West, Mumbai, Maharashtra 400043",
    consultationFee: "₹700",
    specialFeature: "Late Night Emergency & Specialist OPD (20:00 – 01:00)",
    hospitalHours: "Hospital Open 24 Hours",
    catchmentAreas: [
      "Govandi West",
      "Shivaji Nagar",
      "Lotus Colony",
      "Baiganwadi",
      "Mankhurd",
      "Chembur",
      "Deonar"
    ]
  },

  clinics: [
    {
      name: "Meenaz Hospital",
      location: "Near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West, Mumbai 400043",
      image: "/images/clinic.jpg",
      fee: "₹700",
      timings: "Mon, Wed, Sat: 20:00 – 01:00 | Tue, Thu, Fri, Sun: Closed",
      hospitalHours: "Hospital Open 24 Hours",
      active: true
    }
  ],

  // Exactly matching requested Google Business Profile hours
  schedule: [
    { day: "Monday", time: "20:00 – 01:00", status: "Open", isOpen: true },
    { day: "Tuesday", time: "Closed", status: "Closed", isOpen: false },
    { day: "Wednesday", time: "20:00 – 01:00", status: "Open", isOpen: true },
    { day: "Thursday", time: "Closed", status: "Closed", isOpen: false },
    { day: "Friday", time: "Closed", status: "Closed", isOpen: false },
    { day: "Saturday", time: "20:00 – 01:00", status: "Open", isOpen: true },
    { day: "Sunday", time: "Closed", status: "Closed", isOpen: false }
  ],

  // 8 Core Essential Services
  services: [
    {
      id: "sugar-specialist",
      title: "Sugar Specialist & Diabetes Care",
      description: "Specialized blood sugar control, personalized diet planning, glucose monitoring, and complication prevention.",
      icon: "Activity",
      badge: "Core Speciality"
    },
    {
      id: "uncontrolled-diabetes",
      title: "Uncontrolled Diabetes & Insulin Care",
      description: "Advanced medical protocols for persistently high or fluctuating blood glucose levels and tailored insulin titration.",
      icon: "HeartPulse",
      badge: "Advanced Care"
    },
    {
      id: "diabetic-neuropathy",
      title: "Diabetic Nerve Pain (Neuropathy)",
      description: "Specialized clinical relief for diabetic nerve damage, burning feet syndrome, numbness, and preventive foot screening.",
      icon: "ShieldAlert",
      badge: "Neuropathy Care"
    },
    {
      id: "physician-consultation",
      title: "Consultant Physician Care",
      description: "Senior Internist evaluation and second opinions for acute, multi-system, and complex internal medicine conditions.",
      icon: "Stethoscope",
      badge: "Senior Internist"
    },
    {
      id: "night-opd",
      title: "Late Night Specialist OPD",
      description: "Exclusive specialist OPD consultations from 20:00 to 01:00 at Meenaz Hospital for working patients & acute cases.",
      icon: "Clock",
      badge: "20:00 – 01:00"
    },
    {
      id: "bp-specialist",
      title: "Blood Pressure & Hypertension",
      description: "Cardiovascular risk evaluation, ambulatory blood pressure monitoring, and long-term hypertension management.",
      icon: "HeartPulse"
    },
    {
      id: "fever-infection",
      title: "High Fever & Infection Care",
      description: "Rapid diagnosis and evidence-based treatment for acute viral fevers, dengue, malaria, typhoid, and seasonal infections.",
      icon: "Thermometer"
    },
    {
      id: "genetic-counselling",
      title: "Genetic Counselling (UK Certified)",
      description: "Specialized hereditary risk assessment and familial counseling, backed by DM in Medical Genetics (Imperial College, UK).",
      icon: "Dna",
      badge: "UK Certified"
    }
  ],

  // Reliable local images
  gallery: [
    "/images/clinic.jpg",
    "/images/facility1.jpg",
    "/images/facility2.jpg",
    "/images/facility3.jpg"
  ],

  testimonials: [
    {
      id: 1,
      name: "Mohammad Ansari",
      role: "Govandi West Resident",
      text: "Dr. Mukul Thakur's Late Night OPD at Meenaz Hospital has been a blessing. When my blood sugar spiked at 10 PM, he stabilized my condition calmly with modern diabetic care. 30+ years of experience is clearly evident.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=p1"
    },
    {
      id: 2,
      name: "Suresh Gupta",
      role: "Regular Patient (Chembur)",
      text: "I was suffering from uncontrolled diabetes and severe diabetic nerve pain in my feet for over 2 years. Dr. Thakur adjusted my medications and insulin doses accurately. Now my HbA1c is below 6.8.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=p2"
    },
    {
      id: 3,
      name: "Fatima Bi Shaikh",
      role: "Shivaji Nagar Resident",
      text: "His qualifications from Imperial College UK and polite approach make him the top physician in Shivaji Nagar and Govandi. He personally reviews every test report and explains the treatment patiently.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=p3"
    },
    {
      id: 4,
      name: "Rajesh Sharma",
      role: "Night Consultation Patient",
      text: "Finding an experienced Senior Consultant Physician between 20:00 and 01:00 in Govandi West is rare. His timely diagnosis for my severe viral fever saved me from emergency hospitalization.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=p4"
    }
  ],

  faqs: [
    {
      q: "What are Dr. Mukul Thakur's OPD timings at Meenaz Hospital?",
      a: "Dr. Mukul Thakur's OPD timings are Monday, Wednesday, and Saturday from 20:00 to 01:00 (8:00 PM – 1:00 AM). On Tuesday, Thursday, Friday, and Sunday, the OPD is Closed. Meenaz Hospital provides 24/7 emergency facility."
    },
    {
      q: "Where is the clinic located in Govandi?",
      a: "The clinic is located at Meenaz Hospital, Near Khalid Bakery, Lotus Colony, Shivaji Nagar, Govandi West, Mumbai, Maharashtra 400043. Accessible for Shivaji Nagar, Lotus Colony, Baiganwadi, Govandi West, Mankhurd, Chembur, and Deonar."
    },
    {
      q: "What medical conditions does Dr. Mukul Thakur treat?",
      a: "As a Senior Consultant Physician and Diabetologist with over 30 years experience, Dr. Thakur specializes in uncontrolled diabetes, diabetic neuropathy, Type 1 & 2 diabetes, high blood pressure, thyroid disorders, acute fevers (dengue, malaria, typhoid), chest congestion, and UK-certified genetic counselling."
    },
    {
      q: "How can I book an appointment or consultation?",
      a: "Appointments are booked directly by calling our clinic helpline at +91 76660 55602 or messaging on WhatsApp. There is no online booking form. Direct walk-ins during the OPD hours (Monday, Wednesday, Saturday 20:00 – 01:00) are also accommodated at Meenaz Hospital."
    },
    {
      q: "What are Dr. Thakur's qualifications and international credentials?",
      a: "Dr. Mukul Thakur holds an MBBS degree and a prestigious postgraduate DM in Medical Genetics from the world-renowned Imperial College, UK (1996 & 2003). He is registered with Maharashtra Medical Council under Reg. No. 2228."
    },
    {
      q: "Does Dr. Thakur offer specialized Diabetic Neuropathy & Foot Care?",
      a: "Yes. Dr. Thakur provides comprehensive diabetic complication management, including specialized screening for diabetic peripheral neuropathy (nerve pain, tingling, burning feet) and preventive diabetic foot assessments."
    },
    {
      q: "What is Genetic Counselling, and who should consult?",
      a: "With a DM in Medical Genetics from Imperial College, UK, Dr. Thakur provides genetic risk evaluations for hereditary health conditions, family history assessments, prenatal counseling, and individualized genomic health guidance."
    },
    {
      q: "What is the consultation fee?",
      a: "The standard consultation fee is ₹700, which includes detailed clinical examination, diagnosis, lab report analysis, and customized treatment planning."
    },
    {
      q: "Can I consult Dr. Thakur for lab report reviews or second opinions?",
      a: "Yes. Dr. Thakur regularly conducts second opinion consultations and comprehensive diagnostic report evaluations (blood panels, HbA1c, lipid profiles, ECG, thyroid tests, and ultrasound reports) with evidence-based guidance."
    },
    {
      q: "Is Meenaz Hospital open for emergencies 24/7?",
      a: "Yes, Meenaz Hospital is an active 24/7 healthcare facility equipped for emergency admissions, round-the-clock nursing care, and an in-house medical pharmacy."
    }
  ],

  socials: {
    linkedin: "#",
    twitter: "#",
    facebook: "#"
  }
};
