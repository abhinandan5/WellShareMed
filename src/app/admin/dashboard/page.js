// src/app/admin/dashboard/page.js
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers, FiPackage, FiMap, FiActivity,
  FiArrowUp, FiCalendar, FiBarChart2, FiAlertCircle,
  FiTrendingUp, FiClock, FiCheckCircle
} from 'react-icons/fi';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    donors: 0,
    medicines: 0,
    cities: 0,
    requests: 0,
    fulfillmentRate: 0,
    activeDonations: 0
  });

  useEffect(() => {
    // Simulate API loading with counting animation
    const timer = setTimeout(() => {
      setStats({
        donors: 1423,
        medicines: 5689,
        cities: 42,
        requests: 3876,
        fulfillmentRate: 78,
        activeDonations: 243
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      icon: <FiUsers size={24} />,
      label: 'Total Donors',
      value: stats.donors.toLocaleString(),
      change: '+12%',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <FiPackage size={24} />,
      label: 'Medicines Donated',
      value: stats.medicines.toLocaleString(),
      change: '+8%',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: <FiMap size={24} />,
      label: 'Cities Served',
      value: stats.cities,
      change: '+3',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <FiActivity size={24} />,
      label: 'Total Requests',
      value: stats.requests.toLocaleString(),
      change: '+5%',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <FiBarChart2 size={24} />,
      label: 'Fulfillment Rate',
      value: `${stats.fulfillmentRate}%`,
      change: '+4%',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      icon: <FiAlertCircle size={24} />,
      label: 'Active Donations',
      value: stats.activeDonations,
      change: '+9',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'Rajesh Kumar', action: 'donated 5 medicines', time: '2 mins ago', icon: <FiPackage className="text-green-500" />, type: 'donation' },
    { id: 2, user: 'MedLife Pharmacy', action: 'added new inventory', time: '15 mins ago', icon: <FiBarChart2 className="text-blue-500" />, type: 'inventory' },
    { id: 3, user: 'Priya Sharma', action: 'requested insulin', time: '32 mins ago', icon: <FiActivity className="text-orange-500" />, type: 'request' },
    { id: 4, user: 'HealthFirst NGO', action: 'completed delivery', time: '1 hr ago', icon: <FiCheckCircle className="text-green-500" />, type: 'delivery' },
    { id: 5, user: 'Amit Patel', action: 'registered as donor', time: '2 hrs ago', icon: <FiUsers className="text-blue-500" />, type: 'registration' }
  ];

  const fulfillmentData = [
    { month: 'Jan', requests: 320, fulfilled: 240 },
    { month: 'Feb', requests: 410, fulfilled: 320 },
    { month: 'Mar', requests: 380, fulfilled: 310 },
    { month: 'Apr', requests: 520, fulfilled: 410 },
    { month: 'May', requests: 480, fulfilled: 380 },
    { month: 'Jun', requests: 620, fulfilled: 520 }
  ];

  const maxValue = Math.max(...fulfillmentData.map(data => data.requests));

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen py-8 px-4 sm:px-6">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-lg">Monitor platform activity and key metrics</p>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl shadow-lg px-6 py-4 mt-6 lg:mt-0 border border-white/20">
            <FiCalendar className="text-blue-500 text-xl" />
            <span className="font-semibold text-lg">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
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
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-gray-600 font-medium">{card.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts and Activities Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-12">
          {/* Enhanced Fulfillment Chart */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Request Fulfillment Trend</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-medium">Requests</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-medium">Fulfilled</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-end justify-between h-80 space-x-4">
                {fulfillmentData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 h-full">
                    <div className="flex items-end justify-center w-full h-full space-x-2 relative">
                      {/* Requests Bar */}
                      <motion.div
                        className="bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-xl relative flex-1 shadow-lg"
                        style={{ height: `${(data.requests / maxValue) * 85}%` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.requests / maxValue) * 85}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                          {data.requests}
                        </div>
                      </motion.div>

                      {/* Fulfilled Bar */}
                      <motion.div
                        className="bg-gradient-to-t from-green-400 to-green-500 rounded-t-xl relative flex-1 shadow-lg"
                        style={{ height: `${(data.fulfilled / maxValue) * 85}%` }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(data.fulfilled / maxValue) * 85}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                          {data.fulfilled}
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

          {/* Enhanced Recent Activities */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activities</h2>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors px-4 py-2 rounded-xl hover:bg-blue-50">
                View All
              </button>
            </div>

            <div className="space-y-6">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="flex items-center p-4 hover:bg-gray-50/80 rounded-2xl transition-all duration-300 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="bg-gray-100 rounded-2xl p-3 mr-4 group-hover:scale-110 transition-transform">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg">{activity.user}</div>
                    <div className="text-gray-600">{activity.action}</div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-xl">
                    <FiClock className="mr-1 text-xs" />
                    {activity.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Quick Stats Banner */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Platform Performance</h2>
              <p className="text-blue-100 text-lg">Key metrics at a glance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100 font-medium">Donor Satisfaction</div>
              </motion.div>

              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">24h</div>
                <div className="text-blue-100 font-medium">Avg. Response Time</div>
              </motion.div>

              <motion.div
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl font-bold mb-2">12</div>
                <div className="text-blue-100 font-medium">New Partners</div>
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
    </section>
  );
}