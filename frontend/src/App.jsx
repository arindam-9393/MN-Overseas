import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Landmark, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Milestone,
  FileText,
  Plane
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page, hash) => {
    setCurrentPage(page);
    setIsOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tighter cursor-pointer"
          onClick={() => handleNav('home')}
        >
          MN OVERSEAS <span className="text-blue-600">EDUCARE</span>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => handleNav('home')} className="text-blue-900 font-medium hover:text-blue-600 transition-colors">Home</button>
          <button onClick={() => handleNav('home', 'why-germany')} className="text-blue-900 font-medium hover:text-blue-600 transition-colors">Why Germany</button>
          <button onClick={() => handleNav('home', 'roadmap')} className="text-blue-900 font-medium hover:text-blue-600 transition-colors">Roadmap</button>
          <button onClick={() => handleNav('home', 'faq')} className="text-blue-900 font-medium hover:text-blue-600 transition-colors">FAQ</button>
          <button onClick={() => handleNav('home', 'contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              <button onClick={() => handleNav('home')} className="text-blue-900 font-medium text-lg">Home</button>
              <button onClick={() => handleNav('home', 'why-germany')} className="text-blue-900 font-medium text-lg">Why Germany</button>
              <button onClick={() => handleNav('home', 'roadmap')} className="text-blue-900 font-medium text-lg">Roadmap</button>
              <button onClick={() => handleNav('home', 'faq')} className="text-blue-900 font-medium text-lg">FAQ</button>
              <button onClick={() => handleNav('home', 'contact')} className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium">Apply Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Decorative abstract blue shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm mb-6 border border-blue-100">
              🇩🇪 Exclusive Germany Study Partner
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight mb-6">
              Your Future <br />
              Starts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Germany.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Unlock world-class education with zero tuition fees at public universities. We guide you from course selection to visa approval with 100% expert support.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1">
                Start Your Journey <ArrowRight size={20} />
              </a>
              <a href="#why-germany" className="flex items-center gap-2 bg-white text-blue-900 border-2 border-blue-100 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 hover:border-blue-200 transition-all">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative mt-10 mb-10 lg:mt-0 lg:mb-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop" 
                alt="Brandenburg Gate, Germany" 
                className="w-full h-[320px] sm:h-[440px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-white text-xl sm:text-2xl font-bold mb-2">Experience Top-Tier Education</p>
                <p className="text-blue-100">Home to world-renowned universities and thriving tech hubs.</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-3 sm:gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase">Success Rate</p>
                <p className="text-2xl font-extrabold text-blue-900">99.9%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyGermany = () => {
  return (
    <section id="why-germany" className="py-16 sm:py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Why choose Germany for your studies?</h2>
          <p className="text-blue-200 text-lg md:text-xl">
            Guided by experts. Get complete guidance for studying in Germany – understand eligibility, explore courses, unlock scholarships, receive visa support, and master your applications.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature Cards */}
          {[
            { icon: <BookOpen />, title: "Explore Courses", desc: "Access thousands of English-taught programs in Engineering, IT, Business & more." },
            { icon: <FileCheck />, title: "Understand Eligibility", desc: "Free profile evaluation to check your APS and university entry requirements." },
            { icon: <Landmark />, title: "Unlock Scholarships", desc: "Guidance on DAAD and other university-specific funding opportunities." },
            { icon: <MapPin />, title: "Visa Support", desc: "End-to-end assistance for your German Student Visa and blocked account setup." },
            { icon: <GraduationCap />, title: "Master Applications", desc: "Expert SOP editing, LOR guidance, and uni-assist portal management." },
            { icon: <CheckCircle2 />, title: "Post-Study Work", desc: "Benefit from an 18-month job seeking visa after graduation to launch your career." }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 p-6 sm:p-8 rounded-2xl hover:bg-blue-800 transition-colors group">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-200 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const steps = [
    { icon: <FileCheck />, title: "Profile Evaluation", desc: "We assess your academic background, language proficiency (IELTS/TOEFL/German), and career goals to find the perfect fit." },
    { icon: <BookOpen />, title: "Course & University Selection", desc: "Shortlisting the best public and private universities that align with your profile and offer zero or low tuition fees." },
    { icon: <FileText />, title: "Application & Documentation", desc: "Crafting a compelling SOP, arranging LORs, and navigating complex application portals like Uni-Assist." },
    { icon: <Landmark />, title: "Blocked Account & Insurance", desc: "Guided setup of your German Blocked Account (Sperrkonto) and mandatory health insurance." },
    { icon: <Plane />, title: "Visa & Pre-Departure", desc: "Comprehensive visa interview preparation and a pre-departure briefing to ensure a smooth transition to Germany." }
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm mb-4 border border-blue-100">
            <Milestone size={18} /> Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Your 5-Step Success Roadmap</h2>
          <p className="text-gray-600 text-lg md:text-xl">
            We hold your hand through every single step of the journey, ensuring a stress-free transition to your dream university.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform md:-translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 flex items-center justify-center text-white z-10">
                <span className="font-bold text-sm">{index + 1}</span>
              </div>
              
              {/* Content Card */}
              <div className="ml-14 sm:ml-16 md:ml-0 md:w-1/2 md:px-12 w-full">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-blue-200 transition-colors hover:-translate-y-1 transform duration-300">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Do I need to know German to study there?", a: "Not necessarily! There are thousands of fully English-taught programs in Germany, especially for Master's degrees. However, learning basic German is highly recommended for daily life and part-time jobs." },
    { q: "What is a Blocked Account (Sperrkonto)?", a: "A blocked account is a special bank account for international students in Germany. It proves you have enough financial resources to live for a year (currently around €11,208). You can withdraw a set amount each month." },
    { q: "Can I work part-time while studying?", a: "Yes! International students from outside the EU are allowed to work up to 140 full days or 280 half days per year. It's a great way to cover your living expenses." },
    { q: "Are public universities really free?", a: "Yes, most public universities in Germany have abolished tuition fees for both domestic and international students. You only pay a small semester contribution (usually €150-€350) which often includes a public transport ticket." },
    { q: "What is the 18-month post-study work visa?", a: "After successfully graduating from a German university, you can apply for an 18-month residence permit to seek a job related to your field of study. Once you find a job, you can convert it into a work visa or EU Blue Card." }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-blue-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about studying in Germany.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-blue-900 pr-3">{faq.q}</span>
                  {openIndex === index ? <ChevronUp className="text-blue-600 flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 sm:px-6 pb-5 text-gray-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating API Call to FastAPI Backend
    // In the future, replace with: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      console.log("Data to send to FastAPI:", formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', course: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="bg-blue-600 md:w-2/5 p-6 sm:p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-50 transform translate-x-20 -translate-y-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Your German Dream Today</h3>
              <p className="text-blue-100 mb-8">Fill out the form and our expert counselors will get in touch with you within 24 hours to plan your roadmap.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-full"><MapPin size={24} /></div>
                  <p>Berlin, Germany <br/><span className="text-sm text-blue-200">(Local Ops)</span></p>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="md:w-3/5 p-6 sm:p-10 md:p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Book a Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested Course/Field</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a field</option>
                    <option value="engineering">Engineering & Tech</option>
                    <option value="business">Business & Management</option>
                    <option value="it_cs">IT & Computer Science</option>
                    <option value="healthcare">Healthcare & Medicine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-600/30 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                {status !== 'submitting' && <ArrowRight size={20} />}
              </button>

              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 font-medium text-center bg-green-50 py-3 rounded-lg"
                >
                  Success! We will contact you soon.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-blue-950 text-blue-200 py-12 border-t border-blue-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-extrabold text-white tracking-tighter mb-4 md:mb-0 cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
        MN OVERSEAS <span className="text-blue-500">EDUCARE</span>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <button onClick={() => { setCurrentPage('privacy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy Policy</button>
        <button onClick={() => { setCurrentPage('terms'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Terms of Service</button>
      </div>
      <p className="text-sm mt-4 md:mt-0 opacity-60">© 2026 MN OVERSEAS EDUCARE. Germany Exclusive.</p>
    </div>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <WhyGermany />
    <Roadmap />
    <FAQ />
    <Contact />
  </>
);

const PrivacyPolicy = () => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        
        <h3 className="text-2xl font-bold text-blue-800 mt-8">1. Information We Collect</h3>
        <p>We collect information you provide directly to us when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, educational background, and any other details you choose to share.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">2. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6">
          <li>Provide guidance on German university admissions and visa processes.</li>
          <li>Respond to your inquiries and schedule consultations.</li>
          <li>Send you updates, newsletters, or promotional materials (only if you opt-in).</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">3. Data Sharing</h3>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted university partners or service providers solely for the purpose of assisting with your application process, and only with your explicit consent.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">4. Data Security</h3>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">5. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at: info@mnoverseaseducare.com.</p>
      </div>
    </div>
  </div>
);

const TermsConditions = () => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-8">Terms & Conditions</h1>
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p><strong>Effective Date:</strong> January 1, 2026</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">1. Agreement to Terms</h3>
        <p>By accessing or using the MN OVERSEAS EDUCARE website, you agree to be bound by these Terms and Conditions.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">2. Educational Consultation Services</h3>
        <p>MN OVERSEAS EDUCARE provides guidance and assistance for students seeking to study in Germany. While we strive to provide the most accurate and up-to-date information regarding universities, courses, and visa regulations, these policies are subject to change by the respective German authorities and institutions.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">3. No Guarantee of Admission or Visa</h3>
        <p>Our services are advisory. We do not guarantee university admission, scholarship awards, or the approval of student visas. The final decision rests entirely with the respective universities and the German embassy/consulate.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">4. User Responsibilities</h3>
        <p>You agree to provide accurate, current, and complete information during the consultation and application process. Falsifying academic documents or financial records may result in the immediate termination of our services.</p>

        <h3 className="text-2xl font-bold text-blue-800 mt-8">5. Intellectual Property</h3>
        <p>All content, graphics, and structure on this website are the property of MN OVERSEAS EDUCARE and may not be copied or reproduced without permission.</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsConditions />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans antialiased bg-white text-gray-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col min-h-screen overflow-x-hidden">
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        /* Smooth scrolling for anchor links */
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}