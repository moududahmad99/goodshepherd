import React, { useState } from 'react';
import { FaArrowRight, FaPills, FaUserMd, FaShippingFast, FaSearch, FaRegCalendarAlt, FaStar } from 'react-icons/fa';
import { FaAward, FaGraduationCap, FaGlobeAmericas, FaHeartbeat } from 'react-icons/fa';

import { RiMedicineBottleLine, RiLeafLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Home = () => {

  const SafeMotion = ({ children, ...props }) => {
    const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
    return <MotionComponent {...props}>{children}</MotionComponent>
  }

  const [prescriptionNumber, setPrescriptionNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');

  return (

    <React.Fragment>
      {/* Banner Section */}
      <div className="overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden">
          {/* Background Image with Custom Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/banner.jpg"
              alt="Premium Pharmacy Background"
              className="w-full h-full object-cover object-center"
            />
            {/* Custom Light Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/70 to-white/10"></div>
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')]"></div>
          </div>

          {/* Floating Medical Elements */}
          <motion.div
            className="absolute top-1/4 left-[15%] w-20 h-20 text-[#3b82f6] opacity-20"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <RiMedicineBottleLine className="w-full h-full" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 right-[20%] w-16 h-16 text-[#10b981] opacity-20"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -20, 20, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <FaPills className="w-full h-full" />
          </motion.div>

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 text-left">
              {/* Animated Trust Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] rounded-full shadow-sm border border-[#86efac]/50"
              >
                <div className="w-2.5 h-2.5 mr-2 bg-gradient-to-r from-[#10b981] to-[#3b82f6] rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1e293b] to-[#334155] tracking-wider">
                  TRUSTED HEALTHCARE PARTNER SINCE 2005
                </span>
              </motion.div>

              {/* Animated Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 80
                }}
                className="text-4xl sm:text-5xl font-extrabold leading-tight"
              >
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] bg-[length:200%_auto] animate-gradient-shift"
                  initial={{ backgroundPosition: '0% center' }}
                  animate={{ backgroundPosition: '200% center' }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Revolutionizing<br />
                </motion.span>
                <motion.span
                  className="text-[#1e293b] inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Pharmaceutical Care
                </motion.span>
              </motion.h1>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-[#334155] max-w-lg leading-relaxed font-medium"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#10b981] font-semibold">
                  Cutting-edge medicine
                </span> meets{' '}
                <span className="underline decoration-[#10b981]/30 decoration-wavy underline-offset-4">
                  compassionate care
                </span>{' '}
                in our seamless healthcare ecosystem designed for modern living.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Services <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group bg-white/95 backdrop-blur-sm border-2 border-[#e2e8f0] text-[#1e293b] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-md hover:text-[#3b82f6]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <motion.span
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaUserMd className="w-4 h-4" />
                    </motion.span>
                    Meet Our Specialists
                  </span>
                  <span className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap items-center gap-4 pt-6"
              >
                {/* <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3 + i * 0.1 }}
        >
          <FaStar className="w-5 h-5 text-[#f59e0b] drop-shadow-[0_1px_2px_#f59e0b/30]" />
        </motion.div>
      ))}
    </div> */}
                {/* <motion.span 
      className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#1e293b] to-[#334155]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
    >
      Trusted by 1,200+ patients with 98% satisfaction rate
    </motion.span> */}
              </motion.div>
            </div>

            {/* Right Column - Refill Card */}
            <motion.div
              className="w-full lg:w-1/2 max-w-md bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] p-5 text-white relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-white/5 rounded-full"></div>
                <h3 className="text-2xl font-bold flex items-center gap-3 relative z-10">
                  <FaPills className="w-6 h-6" />
                  Instant Prescription Refill
                </h3>
                <p className="text-sm opacity-90 relative z-10">Renew your medications in seconds</p>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-[#475569]">Prescription Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={prescriptionNumber}
                      onChange={(e) => setPrescriptionNumber(e.target.value)}
                      placeholder="RX-12345678"
                      className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 pl-11 text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent placeholder-gray-400"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-[#475569]">Date of Birth</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-4 pl-11 text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                    <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white font-semibold py-2.5 px-4 rounded-lg hover:shadow-md transition-all flex items-center justify-center gap-2">
                  <FaPills className="w-4 h-4" /> Find & Refill Now
                </button>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-sm text-[#64748b]">
                    Need help? <a href="#" className="text-[#3b82f6] hover:underline">Contact us</a>
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-xs font-medium text-[#475569]">Secure Refill</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <motion.div
            className="absolute bottom-8 left-0 right-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <FaUserMd className="w-5 h-5" />, value: "12+", label: "Specialist Pharmacists", color: "bg-[#dbeafe] text-[#3b82f6]" },
                  { icon: <FaPills className="w-5 h-5" />, value: "250K+", label: "Prescriptions Filled", color: "bg-[#dcfce7] text-[#10b981]" },
                  { icon: <RiLeafLine className="w-5 h-5" />, value: "100%", label: "Quality Guarantee", color: "bg-[#f0fdf4] text-[#22c55e]" },
                  { icon: <FaShippingFast className="w-5 h-5" />, value: "24/7", label: "Emergency Service", color: "bg-[#eff6ff] text-[#2563eb]" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#1e293b]">{stat.value}</div>
                      <div className="text-sm text-[#64748b]">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Founder & CEO */}
      <section className=" relative py-24 px-6 bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] overflow-hidden">
        {/* Decorative Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 text-[#3b82f6]/10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <RiMedicineBottleLine className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-16 w-20 h-20 text-[#10b981]/10"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaPills className="w-full h-full" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e293b] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
                Ceo & Founder
              </span>
            </h2>
            <p className="text-xl text-[#475569] max-w-2xl mx-auto">
              Meet the brilliant mind behind our pharmaceutical excellence.
            </p>
          </motion.div>

          {/* Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row">
              {/* Founder Image (Replace with actual image) */}
              <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden">
                <img
                  src="/src/assets/user.webp" // Replace with actual image
                  alt="Dr. Mervat Mellak"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Dr. Mervat Mellak</h3>
                  <p className="text-sm opacity-90">Founder & CEO</p>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="w-full md:w-3/5 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center">
                    <FaUserMd className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e293b]">Pharmaceutical Innovator</h3>
                    <p className="text-sm text-[#64748b]">7+ Years of Excellence</p>
                  </div>
                </div>

                <p className="text-[#475569] mb-6 leading-relaxed">
                  With a distinguished career spanning over 7+ years, <span className="font-semibold text-[#1e293b]">Dr. Mervat Mellak</span> has revolutionized pharmaceutical care through her visionary leadership and unwavering commitment to patient well-being. Her expertise in precision medicine and personalized treatment has set new industry standards.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#dcfce7] rounded-full flex items-center justify-center">
                      <FaPills className="w-4 h-4 text-[#10b981]" />
                    </div>
                    <p className="text-[#475569]">
                      <span className="font-semibold text-[#1e293b]">1500+</span> prescriptions supervised
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#f0fdf4] rounded-full flex items-center justify-center">
                      <RiLeafLine className="w-4 h-4 text-[#22c55e]" />
                    </div>
                    <p className="text-[#475569]">
                      Pioneer in <span className="font-semibold text-[#1e293b]">holistic medicine</span> integration
                    </p>
                  </div>
                </div>

                {/* Contact Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <a
                    href="mailto:mervatmellak@yahoo.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                     Dr. Mervat Mellak
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: <FaAward className="w-6 h-6" />, value: "24", label: "Industry Awards" },
              { icon: <FaGraduationCap className="w-6 h-6" />, value: "PhD", label: "Pharmacology" },
              { icon: <FaGlobeAmericas className="w-6 h-6" />, value: "5+", label: "Countries Served" },
              { icon: <FaHeartbeat className="w-6 h-6" />, value: "99.7%", label: "Patient Satisfaction" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${index === 0 ? "bg-[#dbeafe] text-[#3b82f6]" :
                    index === 1 ? "bg-[#f0fdf4] text-[#10b981]" :
                      index === 2 ? "bg-[#eff6ff] text-[#2563eb]" :
                        "bg-[#fef2f2] text-[#ef4444]"
                  }`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#1e293b] mb-1">{item.value}</h4>
                <p className="text-sm text-[#64748b]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </React.Fragment>
  );
};

export default Home;