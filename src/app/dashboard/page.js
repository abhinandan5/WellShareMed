// src/app/dashboard/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiSearch, FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';

export default function DashboardPage() {
  const router = useRouter();
  const [action, setAction] = useState(null);

  useEffect(() => {
    if (action === 'donate') router.push('/donate');
    if (action === 'request') router.push('/finder');
  }, [action, router]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 overflow-hidden py-12 px-4">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main grid with 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Content Cards (spans 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to Your Dashboard
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                How would you like to contribute to our healthcare community today?
              </motion.p>
            </motion.div>

            {/* Donation & Request Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Donate Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 h-full"
              >
                <div className="p-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FiPackage className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Donate Medicines</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Share surplus medicines with those in need. Your donation can save lives and reduce waste.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAction('donate')}
                    className="flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Start Donation <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Request Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100 h-full"
              >
                <div className="p-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FiSearch className="text-teal-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Medicine</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Find the medicines you need. Our platform connects you with verified donors in your community.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAction('request')}
                    className="flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Find Medicine <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => router.push('/dashboard/donations')}
                  className="flex items-center justify-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                >
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FiPackage className="text-blue-600" />
                  </div>
                  <span className="text-gray-800">My Donations</span>
                </button>
                <button 
                  onClick={() => router.push('/dashboard/requests')}
                  className="flex items-center justify-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                >
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <FiSearch className="text-purple-600" />
                  </div>
                  <span className="text-gray-800">My Requests</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-8"
            >
              <ProfileCard />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blob animation CSS */}
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