// Enhanced Stats Page
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPackage, FiUser, FiMap, FiHeart, FiTrendingUp, 
  FiCalendar, FiBarChart2, FiCheckCircle, FiClock,
  FiActivity, FiAward, FiGlobe
} from 'react-icons/fi';

export default function StatsPage() {
  const [stats, setStats] = useState({
    medicines: 0,
    lives: 0,
    communities: 0,
    satisfaction: 0,
    donations: 0,
    partners: 0
  });

  useEffect(() => {
    // Simulate API loading with counting animation
    const timer = setTimeout(() => {
      setStats({
        medicines: 15420,
        lives: 8650,
        communities: 285,
        satisfaction: 98,
        donations: 1240,
        partners: 156
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const impactCards = [
    {
      icon: <FiPackage size={28} />,
      label: 'Medicines Donated',
      value: stats.medicines.toLocaleString(),
      change: '+18%',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      description: 'Life-saving medications shared'
    },
    {
      icon: <FiUser size={28} />,
      label: 'Lives Impacted',
      value: stats.lives.toLocaleString(),
      change: '+23%',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'People helped with essential medicines'
    },
    {
      icon: <FiMap size={28} />,
      label: 'Communities Served',
      value: stats.communities,
      change: '+12',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Cities and towns connected'
    },
    {
      icon: <FiHeart size={28} />,
      label: 'Satisfaction Rate',
      value: `${stats.satisfaction}%`,
      change: '+2%',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
      description: 'User satisfaction with our service'
    },
    {
      icon: <FiActivity size={28} />,
      label: 'Active Donations',
      value: stats.donations,
      change: '+45',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      description: 'Ongoing donation campaigns'
    },
    {
      icon: <FiGlobe size={28} />,
      label: 'Healthcare Partners',
      value: stats.partners,
      change: '+8',
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      description: 'Verified healthcare providers'
    }
  ];

  const monthlyData = [
    { month: 'Jan', donations: 820, recipients: 650 },
    { month: 'Feb', donations: 950, recipients: 780 },
    { month: 'Mar', donations: 1100, recipients: 890 },
    { month: 'Apr', donations: 1350, recipients: 1080 },
    { month: 'May', donations: 1200, recipients: 980 },
    { month: 'Jun', donations: 1520, recipients: 1240 }
  ];

  const maxValue = Math.max(...monthlyData.map(data => data.donations));

  const testimonials = [
    {
      quote: "WellShareMed helped me access insulin when I couldn't afford it. This platform saved my life.",
      author: "Rahul Sharma",
      location: "New Delhi",
      rating: 5
    },
    {
      quote: "Donating our surplus cancer medication felt rewarding. Knowing it went to someone in need made all the difference.",
      author: "Priya Patel",
      location: "Mumbai",
      rating: 5
    },
    {
      quote: "As a community health worker, WellShareMed has been invaluable for getting medicines to remote villages.",
      author: "Dr. Ananya Singh",
      location: "Rural Punjab",
      rating: 5
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 overflow-hidden py-16 px-4">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Impact
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Real numbers that showcase lives changed through medicine sharing
            </motion.p>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl shadow-lg px-6 py-4 mt-6 lg:mt-0 border border-white/20">
            <FiCalendar className="text-green-500 text-xl" />
            <span className="font-semibold text-lg">
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
        </motion.div>
        
        {/* Enhanced Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`${card.bgColor} rounded-2xl p-4`}>
                    <div className={card.iconColor}>
                      {card.icon}
                    </div>
                  </div>
                  <div className="flex items-center bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold">
                    <FiTrendingUp className="mr-1 text-xs" />
                    {card.change}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-gray-900 font-semibold text-lg">{card.label}</div>
                  <div className="text-gray-600 text-sm">{card.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts and Success Stories Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-16">
          {/* Enhanced Impact Chart */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Monthly Impact Trend</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-medium">Donations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-medium">Recipients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-end justify-between h-80 space-x-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 h-full">
                    <div className="flex items-end justify-center w-full h-full space-x-2 relative">
                      {/* Donations Bar */}
                      <motion.div
                        className="bg-gradient-to-t from-green-400 to-green-500 rounded-t-xl relative flex-1 shadow-lg"
                        style={{ height: `${(data.donations / maxValue) * 85}%` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.donations / maxValue) * 85}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                          {data.donations}
                        </div>
                      </motion.div>

                      {/* Recipients Bar */}
                      <motion.div
                        className="bg-gradient-to-t from-teal-400 to-teal-500 rounded-t-xl relative flex-1 shadow-lg"
                        style={{ height: `${(data.recipients / maxValue) * 85}%` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.recipients / maxValue) * 85}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                          {data.recipients}
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="text-sm font-semibold text-gray-700">{data.month}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Success Stories */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
              <div className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-2 rounded-full text-sm font-semibold">
                <FiAward className="mr-1 text-xs" />
                Verified
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <FiHeart key={i} className="text-red-500 fill-current w-4 h-4 mr-1" />
                    ))}
                  </div>
                  <div className="text-gray-700 mb-4 italic text-lg">"{story.quote}"</div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{story.author}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <FiMap className="mr-1 text-xs" />
                        {story.location}
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Impact Banner */}
        <motion.div
          className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">Making Healthcare Accessible</h2>
              <p className="text-green-100 text-xl">Together, we're building a healthier tomorrow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">₹2.5Cr</div>
                <div className="text-green-100 font-medium">Worth of Medicines Donated</div>
              </motion.div>

              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-green-100 font-medium">Platform Availability</div>
              </motion.div>

              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">Zero</div>
                <div className="text-green-100 font-medium">Platform Fees</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced CSS Animations */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
}