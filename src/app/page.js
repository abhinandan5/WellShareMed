/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion } from 'framer-motion';

// Main App component
export default function App() {
  // Define text and background color variables for consistent styling
  const primaryTextColor = "text-gray-900";
  const secondaryTextColor = "text-gray-600";
  const accentColor = "text-teal-600";
  const buttonPrimaryBg = "bg-gradient-to-r from-green-600 to-teal-600";
  const buttonPrimaryText = "text-white";
  const buttonSecondaryBg = "bg-white";
  const buttonSecondaryText = "text-teal-600";
  const sectionBgLight = "bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50";
  const sectionBgMedium = "bg-gradient-to-r from-green-50 to-teal-50";
  const sectionBgDark = "bg-teal-600";
  const sectionBgAccent = "bg-gradient-to-r from-green-600 to-teal-600";

  // Define animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-white overflow-hidden font-inter">
      {/* Global font import (Inter) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Hero Section with medical-themed colors and enhanced background */}
      <div className={`relative ${sectionBgLight} min-h-[80vh] flex flex-col items-center justify-start pt-24 pb-16`}>
        {/* Floating organic shapes - Increased size and added a fourth shape */}
        {/* Shape 1 (Top-left) */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob z-0"></div>
        {/* Shape 2 (Top-right) */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 z-0"></div>
        {/* Shape 3 (Bottom-left) */}
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000 z-0"></div>
        {/* New Shape 4 (Bottom-right) */}
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-6000 z-0"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Revolutionizing Medicine Donation
          </motion.h1>

          <motion.p
            className={`text-lg md:text-2xl ${secondaryTextColor} mb-12 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Connecting surplus medicines with those in need through a trusted, transparent platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl overflow-hidden" // Ensure shadow applies correctly
            >
              <a
                href="/donate" // Placeholder for navigation
                className={`px-8 py-4 ${buttonPrimaryBg} ${buttonPrimaryText} rounded-xl transition-all duration-300 text-lg font-medium block`}
              >
                Donate Medicines
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl overflow-hidden"
            >
              <a
                href="/finder" // Placeholder for navigation
                className={`px-8 py-4 ${buttonSecondaryBg} ${buttonSecondaryText} border-2 border-teal-600 rounded-xl hover:bg-teal-50 transition-all duration-300 text-lg font-medium block`}
              >
                Find Medicines
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Medical illustration with subtle animation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 lg:pb-0">
          <motion.div
            className="w-full max-w-5xl px-4"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-40 sm:h-48 md:h-64">
              {/* Pill icon */}
              <motion.div
                className="absolute left-1/4 top-10 sm:top-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {/* SVG for Pill */}
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.div>
              {/* Syringe icon */}
              <motion.div
                className="absolute right-1/4 top-20 sm:top-1/3 w-14 h-14 sm:w-16 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
              >
                {/* SVG for Syringe */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </motion.div>
              {/* Heartbeat line at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-t-full flex items-center justify-center opacity-70">
                <svg className="w-full h-8 text-white stroke-current stroke-2" fill="none" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 C 20 0, 30 20, 50 10 C 70 0, 80 20, 100 10" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 ${sectionBgMedium}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: '10,000+', label: 'Medicines Donated' },
              { value: '5,000+', label: 'Lives Impacted' },
              { value: '200+', label: 'Communities Served' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className={`text-3xl md:text-4xl font-bold ${accentColor} mb-2`}>{stat.value}</div>
                <div className={`${secondaryTextColor} text-sm sm:text-base`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className={`text-4xl sm:text-5xl font-bold text-center ${primaryTextColor} mb-4`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Healthcare Solution
          </motion.h2>

          <motion.p
            className={`text-lg md:text-xl text-center ${secondaryTextColor} max-w-3xl mx-auto mb-16`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Combining technology with compassion to transform healthcare access.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: 'Verified Donations',
                description: 'Every medicine is carefully verified for authenticity and quality, ensuring safety and trust.',
                icon: (
                  // SVG for Shield with Checkmark
                  <svg className={`w-12 h-12 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Needy Matching',
                description: 'Our intelligent system efficiently matches donated medicines with patients who need them most.',
                icon: (
                  // SVG for Users connecting
                  <svg className={`w-12 h-12 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Expiry Alerts',
                description: 'Automated notifications and tracking ensure medicines are utilized well before their expiration date.',
                icon: (
                  // SVG for Clock/Timer
                  <svg className={`w-12 h-12 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="mb-5 flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full">{feature.icon}</div>
                <h3 className={`text-xl font-bold ${primaryTextColor} mb-3`}>{feature.title}</h3>
                <p className={`${secondaryTextColor}`}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`relative py-24 overflow-hidden ${sectionBgDark}`}>
        {/* Subtle background pattern (optional: add more complex SVG background here) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23047857\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34.23l2.844 2.844L40 36l-.872-2.316L36 34.23zM25 41.365l3.524 3.524L29 43l-.476-2.015L25 41.365zM56 12l2 2 1.3-1.857L56 12zM0 48l1.328 1.328L2 48l-.672-1.328L0 48zM58 2l1.637 1.637L60 2l-.363-1.637L58 2zM0 12l1.637 1.637L2 12l-.363-1.637L0 12zM38 0l2 2 1.3-1.857L38 0zM42 36l2 2 1.3-1.857L42 36zM10 0l2 2 1.3-1.857L10 0zM0 0l2 2 1.3-1.857L0 0z\" fill=\"#047857\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by the Healthcare Community
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-teal-100 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands who have transformed medicine distribution and accessibility.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                quote: "WellShareMed has significantly reduced our medicine wastage by 78% and enabled us to reach rural communities we previously couldn't serve.",
                author: "Dr. Priya Mehta",
                role: "Medical Director, HealthFirst Foundation",
                avatar: "PM"
              },
              {
                quote: "The robust verification system gives me absolute confidence that medicines reach genuine patients. It's a true game-changer for philanthropy.",
                author: "Rahul Kapoor",
                role: "Pharmaceutical Executive",
                avatar: "RK"
              },
              {
                quote: "As a community health worker, I can now locate critical medicines within hours instead of days. This platform is saving lives every day.",
                author: "Ananya Singh",
                role: "Community Health Coordinator",
                avatar: "AS"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between transform hover:scale-[1.02] transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="text-5xl text-teal-100 mb-6 font-serif leading-none">"</div> {/* Stylish quote mark */}
                <p className={`text-lg ${secondaryTextColor} mb-6 flex-grow`}>{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <div className={`w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center ${accentColor} font-bold text-lg mr-4 ring-2 ring-teal-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold ${primaryTextColor}`}>{testimonial.author}</div>
                    <div className={`${secondaryTextColor} text-sm`}>{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-24 ${sectionBgAccent}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Make a Difference?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our growing movement to make essential medicines accessible to everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-xl overflow-hidden" // Ensure shadow applies correctly
            >
              <a
                href="/auth/signup" // Placeholder for navigation
                className={`px-10 py-5 ${buttonSecondaryBg} ${buttonSecondaryText} rounded-xl text-xl font-bold transition-all duration-300 block`}
              >
                Join Us Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for blob animation and Inter font */}
      <style jsx>{`
        /* Blob animation */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
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

        /* Ensure smooth scrolling for internal links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
