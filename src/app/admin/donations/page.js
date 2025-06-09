// src/app/admin/donors/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiUser, FiPackage, FiDollarSign, FiFilter, FiMapPin, FiCalendar, FiActivity } from 'react-icons/fi';

export default function AdminDonationStats() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const donors = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      type: 'Individual',
      donations: 12,
      medicines: 45,
      location: 'Mumbai',
      lastDonation: '2023-07-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'MedLife Pharmacy',
      type: 'Organization',
      donations: 24,
      medicines: 128,
      location: 'Delhi',
      lastDonation: '2023-07-18',
      status: 'Verified'
    },
    {
      id: 3,
      name: 'HealthPlus Clinics',
      type: 'Organization',
      donations: 8,
      medicines: 32,
      location: 'Bangalore',
      lastDonation: '2023-06-30',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      type: 'Individual',
      donations: 5,
      medicines: 18,
      location: 'Chennai',
      lastDonation: '2023-07-10',
      status: 'Pending'
    },
    {
      id: 5,
      name: 'Apollo Hospitals',
      type: 'Organization',
      donations: 42,
      medicines: 210,
      location: 'Hyderabad',
      lastDonation: '2023-07-20',
      status: 'Verified'
    },
  ];

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || donor.status.toLowerCase() === activeTab)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Verified': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Donor Directory
          </motion.h1>
        </div>

        {/* Search and Filters */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative flex-1 w-full md:w-auto md:mr-4 mb-4 md:mb-0">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search donors by name..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
            <FiFilter className="mr-2" />
            Apply Filters
          </button>
        </motion.div>

        {/* Stats Cards - Reverted to previous design */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: <FiUser className="text-blue-500" />, value: '142', label: 'Total Donors', change: '+12%' },
            { icon: <FiPackage className="text-green-500" />, value: '568', label: 'Medicines Donated', change: '+8%' },
            { icon: <FiDollarSign className="text-purple-500" />, value: '₹1.2M', label: 'Estimated Value', change: '+15%' },
            { icon: <FiMapPin className="text-amber-500" />, value: '42', label: 'Cities Covered', change: '+3' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between">
                <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
                <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                  <span className="mr-1">↑</span>
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200 px-2 sm:px-0">
          {['All', 'Active', 'Verified', 'Pending'].map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-1 font-semibold text-base border-b-2 transition-colors duration-200 ${activeTab === tab.toLowerCase() ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab} {tab !== 'All' && `(${donors.filter(d => d.status.toLowerCase() === tab.toLowerCase()).length})`}
            </button>
          ))}
        </div>

        {/* Donors Table */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Donor</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Donations</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Medicines</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Last Donation</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredDonors.map((donor) => (
                  <motion.tr
                    key={donor.id}
                    className="hover:bg-blue-50/50 transition-colors duration-200"
                    whileHover={{ backgroundColor: '#eef2ff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 shadow-sm">
                          <FiUser size={20} />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-gray-900">{donor.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${donor.type === 'Individual' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {donor.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-medium">
                      {donor.donations}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-medium">
                      {donor.medicines}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        <FiMapPin className="mr-1.5 text-gray-400" />
                        {donor.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1.5 text-gray-400" />
                        {donor.lastDonation}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(donor.status)}`}>
                        <FiActivity size={14} className="mr-1" />
                        {donor.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white/80 backdrop-blur-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 rounded-b-3xl">
            <div className="text-sm text-gray-700 mb-2 sm:mb-0">
              Showing <span className="font-medium">{filteredDonors.length > 0 ? 1 : 0}</span> to <span className="font-medium">{filteredDonors.length}</span> of{' '}
              <span className="font-medium">{donors.length}</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                Previous
              </button>
              <button className="px-4 py-2 border border-green-500 bg-green-500 text-white rounded-md text-sm font-medium shadow-sm">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm">
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for blob animation */}
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