'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiHeart, FiUsers, FiTarget, FiAward, FiChevronDown, FiArrowRight, FiStar, FiTrendingUp } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

export default function AboutPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const missionInView = useInView(missionRef, { threshold: 0.3 });
  const valuesInView = useInView(valuesRef, { threshold: 0.3 });
  const statsInView = useInView(statsRef, { threshold: 0.3 });

  const stats = [
    { number: "25,000+", label: "Medicines Donated", icon: <FiHeart /> },
    { number: "15,000+", label: "Lives Impacted", icon: <FiUsers /> },
    { number: "500+", label: "Active Donors", icon: <FiTrendingUp /> },
    { number: "4.9★", label: "Community Rating", icon: <FiStar /> }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200 to-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-100 to-teal-100 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative z-5 pt-10 pb-0 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 mb-6 leading-tight"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              About WellShareMed
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-gray-700 font-light mb-6 leading-relaxed">
                Bridging the gap between surplus medicines and those in <span className="text-green-600 font-semibold">need</span>
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                We are building a healthcare community where no medicine goes to waste and everyone has access to the medications they need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Mission
                <FiArrowRight className="text-lg" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="relative z-10 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl text-green-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-4xl font-black text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Impact Section */}
      <motion.section 
        ref={missionRef}
        className="relative z-10 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Story</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <FiTarget className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  WellShareMed was founded to bridge the critical gap in medicine access. Our platform connects surplus pharmaceuticals with individuals in need through a transparent, secure system.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We believe that no medicine should go to waste when it could save a life. By creating a trusted network of donors and recipients, we are building a healthcare community that supports everyone.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <FiTrendingUp className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Impact</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Since our founding, we've facilitated thousands of medicine donations that have impacted countless lives. Every day, our community grows as more people join our mission.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you are a donor with surplus medicines, someone seeking medication, or both, you are part of a movement thats changing healthcare access one donation at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Values Section */}
      <motion.section 
        ref={valuesRef}
        className="relative z-10 py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our communitys culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <FiHeart className="text-red-500 text-3xl" />,
                title: "Compassion",
                description: "We approach every interaction with empathy and understanding, recognizing the human story behind every request.",
                color: "from-red-50 to-pink-50",
                iconBg: "from-red-500 to-pink-500"
              },
              { 
                icon: <FiUsers className="text-blue-500 text-3xl" />,
                title: "Community",
                description: "We believe in the power of people coming together to create meaningful change in healthcare access.",
                color: "from-blue-50 to-indigo-50",
                iconBg: "from-blue-500 to-indigo-500"
              },
              { 
                icon: <FiTarget className="text-green-500 text-3xl" />,
                title: "Impact",
                description: "We measure success by lives improved and medicines saved, focusing on real-world outcomes.",
                color: "from-green-50 to-emerald-50",
                iconBg: "from-green-500 to-emerald-500"
              },
              { 
                icon: <FiAward className="text-amber-500 text-3xl" />,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do, ensuring quality and reliability.",
                color: "from-amber-50 to-orange-50",
                iconBg: "from-amber-500 to-orange-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${value.color} backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${value.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 shadow-2xl text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of others who are transforming healthcare access through compassionate giving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Donating
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Enhanced blob animation CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(30px, -50px) scale(1.1) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9) rotate(180deg);
          }
          75% {
            transform: translate(40px, 30px) scale(1.05) rotate(270deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}