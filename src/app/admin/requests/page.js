// src/app/admin/needys/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiUser, FiHeart, FiClock, FiFilter, FiPhone, FiMapPin, FiCalendar, FiAlertCircle, FiCheck, FiX, FiEye, FiEdit3 } from 'react-icons/fi';

export default function AdminRequestStats() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNeedy, setSelectedNeedy] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const needys = [
    {
      id: 1,
      name: 'Arjun Patel',
      condition: 'Diabetes',
      medicines: ['Insulin', 'Metformin'],
      location: 'Mumbai',
      requested: '2023-07-15',
      status: 'Pending',
      urgency: 'High',
      contact: '+91 98765 43210',
      age: 45,
      notes: 'Patient requires urgent insulin supply for diabetes management.'
    },
    {
      id: 2,
      name: 'Meena Desai',
      condition: 'Hypertension',
      medicines: ['Amlodipine', 'Losartan'],
      location: 'Delhi',
      requested: '2023-07-18',
      status: 'Fulfilled',
      urgency: 'Medium',
      contact: '+91 87654 32109',
      age: 52,
      notes: 'Blood pressure medication refill completed successfully.'
    },
    {
      id: 3,
      name: 'Sunil Kumar',
      condition: 'Asthma',
      medicines: ['Salbutamol', 'Budesonide'],
      location: 'Bangalore',
      requested: '2023-07-20',
      status: 'Pending',
      urgency: 'High',
      contact: '+91 76543 21098',
      age: 38,
      notes: 'Acute asthma episode, requires immediate inhaler supply.'
    },
    {
      id: 4,
      name: 'Rekha Sharma',
      condition: 'Arthritis',
      medicines: ['Diclofenac', 'Paracetamol'],
      location: 'Chennai',
      requested: '2023-07-10',
      status: 'In Progress',
      urgency: 'Low',
      contact: '+91 65432 10987',
      age: 63,
      notes: 'Chronic arthritis pain management medication needed.'
    },
    {
      id: 5,
      name: 'Vijay Reddy',
      condition: 'Heart Disease',
      medicines: ['Atorvastatin', 'Clopidogrel'],
      location: 'Hyderabad',
      requested: '2023-07-19',
      status: 'Fulfilled',
      urgency: 'High',
      contact: '+91 54321 09876',
      age: 58,
      notes: 'Post-cardiac surgery medication successfully delivered.'
    },
  ];

  const filteredNeedys = needys.filter(needy =>
    needy.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || needy.status.toLowerCase().replace(' ', '') === activeTab.toLowerCase().replace(' ', ''))
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Fulfilled': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800'; // Changed to orange for medium urgency
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateStatus = (id, newStatus) => {
    // In a real app, this would make an API call
    console.log(`Updating request ${id} to ${newStatus}`);
    // For demo purposes, you might want to update the local state to reflect the change
    // setNeedys(needys.map(needy => needy.id === id ? { ...needy, status: newStatus } : needy));
  };

  const openModal = (needy) => {
    setSelectedNeedy(needy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNeedy(null);
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
            className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Needy Requests
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
              placeholder="Search requests by name..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg">
            <FiFilter className="mr-2" />
            Apply Filters
          </button>
        </motion.div>

        {/* Stats Cards - Reverted to previous design with minor adjustments for consistency */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: <FiUser className="text-red-500" />, value: '387', label: 'Total Requests', change: '+15%' },
            { icon: <FiHeart className="text-green-500" />, value: '298', label: 'Fulfilled', change: '+12%' },
            { icon: <FiClock className="text-amber-500" />, value: '89', label: 'Pending', change: '+8%' },
            { icon: <FiPhone className="text-blue-500" />, value: '42', label: 'Urgent Cases', change: '+5' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between">
                <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
                <div className={`text-sm px-2 py-1 rounded-full flex items-center
                  ${index === 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
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
          {['All', 'Pending', 'In Progress', 'Fulfilled'].map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-1 font-semibold text-base border-b-2 transition-colors duration-200 ${
                activeTab === tab.toLowerCase().replace(' ', '')
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Requests Table */}
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Condition</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Medicines</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Urgency</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredNeedys.map((needy) => (
                  <motion.tr
                    key={needy.id}
                    className="hover:bg-blue-50/50 transition-colors duration-200"
                    whileHover={{ backgroundColor: '#eef2ff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-red-200 rounded-full flex items-center justify-center text-red-700 shadow-sm">
                          <FiUser size={20} />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-gray-900">{needy.name}</div>
                          <div className="text-sm text-gray-600 flex items-center mt-1">
                            <FiCalendar className="mr-1 text-gray-400" />
                            {needy.requested}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-800 font-medium">{needy.condition}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {needy.medicines.map((medicine, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            {medicine}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700 flex items-center">
                        <FiMapPin className="mr-1.5 text-gray-400" />
                        {needy.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(needy.status)}`}>
                        {needy.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(needy.urgency)}`}>
                        <FiAlertCircle size={14} className="mr-1" />
                        {needy.urgency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => openModal(needy)}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-1 rounded-md hover:bg-blue-100"
                          title="View Details"
                        >
                          <FiEye size={18} />
                        </button>
                        {needy.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => updateStatus(needy.id, 'In Progress')}
                              className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200 p-1 rounded-md hover:bg-yellow-100"
                              title="Mark as In Progress"
                            >
                              <FiEdit3 size={18} />
                            </button>
                            <button
                              onClick={() => updateStatus(needy.id, 'Fulfilled')}
                              className="text-green-600 hover:text-green-800 transition-colors duration-200 p-1 rounded-md hover:bg-green-100"
                              title="Mark as Fulfilled"
                            >
                              <FiCheck size={18} />
                            </button>
                          </>
                        )}
                        {needy.status === 'In Progress' && (
                          <button
                            onClick={() => updateStatus(needy.id, 'Fulfilled')}
                            className="text-green-600 hover:text-green-800 transition-colors duration-200 p-1 rounded-md hover:bg-green-100"
                            title="Mark as Fulfilled"
                          >
                            <FiCheck size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Modal */}
        {showModal && selectedNeedy && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
            <motion.div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6 border-b pb-4">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Request Details</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-800 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                    title="Close"
                  >
                    <FiX size={28} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FiUser className="mr-2 text-blue-500" /> Patient Information
                      </h3>
                      <div className="space-y-3 text-gray-700 text-base">
                        <p><strong>Name:</strong> {selectedNeedy.name}</p>
                        <p><strong>Age:</strong> {selectedNeedy.age} years</p>
                        <p className="flex items-center">
                          <FiPhone className="mr-2 text-gray-500" />
                          <strong>Contact:</strong> {selectedNeedy.contact}
                        </p>
                        <p className="flex items-center">
                          <FiMapPin className="mr-2 text-gray-500" />
                          <strong>Location:</strong> {selectedNeedy.location}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FiHeart className="mr-2 text-red-500" /> Request Details
                      </h3>
                      <div className="space-y-3 text-gray-700 text-base">
                        <p><strong>Condition:</strong> {selectedNeedy.condition}</p>
                        <p className="flex items-center">
                          <FiCalendar className="mr-2 text-gray-500" />
                          <strong>Requested:</strong> {selectedNeedy.requested}
                        </p>
                        <p className="flex items-center">
                          <strong>Status:</strong>
                          <span className={`ml-2 px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedNeedy.status)}`}>
                            {selectedNeedy.status}
                          </span>
                        </p>
                        <p className="flex items-center">
                          <strong>Urgency:</strong>
                          <span className={`ml-2 px-3 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(selectedNeedy.urgency)} flex items-center`}>
                            <FiAlertCircle size={14} className="mr-1" />
                            {selectedNeedy.urgency}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FiClock className="mr-2 text-purple-500" /> Required Medicines
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedNeedy.medicines.map((medicine, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                          {medicine}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <FiEdit3 className="mr-2 text-teal-500" /> Notes
                    </h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-xl leading-relaxed border border-gray-200">
                      {selectedNeedy.notes}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-200">
                    {selectedNeedy.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => {
                            updateStatus(selectedNeedy.id, 'In Progress');
                            closeModal();
                          }}
                          className="flex-1 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                        >
                          <FiEdit3 className="mr-2" /> Mark as In Progress
                        </button>
                        <button
                          onClick={() => {
                            updateStatus(selectedNeedy.id, 'Fulfilled');
                            closeModal();
                          }}
                          className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                        >
                          <FiCheck className="mr-2" /> Mark as Fulfilled
                        </button>
                      </>
                    )}
                    {selectedNeedy.status === 'In Progress' && (
                      <button
                        onClick={() => {
                          updateStatus(selectedNeedy.id, 'Fulfilled');
                          closeModal();
                        }}
                        className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                      >
                        <FiCheck className="mr-2" /> Mark as Fulfilled
                      </button>
                    )}
                    <button
                      onClick={closeModal}
                      className="flex-1 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      <FiX className="mr-2" /> Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
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
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}