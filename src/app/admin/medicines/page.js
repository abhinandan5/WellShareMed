// src/app/admin/medicines/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiSearch,
  FiFilter,
  FiCalendar,
  FiAlertTriangle,
  FiCheckCircle,
  FiPlus,
  FiDownload,
  FiBarChart2,
  FiArrowUp,
  FiEdit,
  FiEye,
  FiTrash2,
  FiClock // FiClock is used for quantity now, not expiry
} from 'react-icons/fi';
// Import the new icon from react-icons/gi
import { GiMedicines } from 'react-icons/gi';

export default function AdminMedicines() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const categories = ['All', 'Antibiotics', 'Pain Relief', 'Chronic', 'Vitamins', 'Other'];
  const statuses = ['All', 'Active', 'Expiring Soon', 'Expired', 'Donated'];

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      quantity: 120,
      expiry: '2024-12-15',
      donor: 'Rajesh Kumar',
      status: 'Active',
      batch: 'PRC20231201'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      quantity: 85,
      expiry: '2024-08-30',
      donor: 'City Pharmacy',
      status: 'Active',
      batch: 'AMX20230801'
    },
    {
      id: 3,
      name: 'Metformin 500mg',
      category: 'Chronic',
      quantity: 45,
      expiry: '2024-05-20',
      donor: 'HealthPlus NGO',
      status: 'Expired',
      batch: 'MTF20230501'
    },
    {
      id: 4,
      name: 'Vitamin D3 1000IU',
      category: 'Vitamins',
      quantity: 200,
      expiry: '2025-02-28',
      donor: 'Wellness Center',
      status: 'Expired',
      batch: 'VTD20230201'
    },
    {
      id: 5,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      quantity: 0,
      expiry: '2023-11-15',
      donor: 'Community Health',
      status: 'Expired',
      batch: 'IBP20231101'
    },
    {
      id: 6,
      name: 'Atorvastatin 20mg',
      category: 'Chronic',
      quantity: 60,
      expiry: '2024-10-10',
      donor: 'MedLife Foundation',
      status: 'Expired',
      batch: 'ATV20231001'
    },
    {
      id: 7,
      name: 'Aspirin 75mg',
      category: 'Pain Relief',
      quantity: 150,
      expiry: '2024-09-12',
      donor: 'Care Foundation',
      status: 'Expired',
      batch: 'ASP20230901'
    },
    {
      id: 8,
      name: 'Losartan 50mg',
      category: 'Chronic',
      quantity: 30,
      expiry: '2024-06-25',
      donor: 'Heart Care NGO',
      status: 'Expired',
      batch: 'LOS20230601'
    },
    {
      id: 9,
      name: 'New Antibiotic',
      category: 'Antibiotics',
      quantity: 50,
      expiry: '2025-07-30',
      donor: 'Pharma Corp',
      status: 'Active',
      batch: 'NAB20250730'
    },
    {
      id: 10,
      name: 'Cold & Flu Max',
      category: 'Other',
      quantity: 75,
      expiry: '2025-06-20',
      donor: 'Community Pharmacy',
      status: 'Expiring Soon',
      batch: 'CFM20250620'
    },
    {
      id: 11,
      name: 'Calcium Tablets',
      category: 'Vitamins',
      quantity: 100,
      expiry: '2026-01-01',
      donor: 'Wellness NGO',
      status: 'Active',
      batch: 'CAL20260101'
    },
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          medicine.batch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || medicine.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || medicine.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicines = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expiring Soon': return 'bg-yellow-100 text-yellow-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Donated': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Active': return <FiCheckCircle className="mr-1" />;
      case 'Expiring Soon': return <FiAlertTriangle className="mr-1" />;
      case 'Expired': return <FiAlertTriangle className="mr-1" />;
      default: return <FiCheckCircle className="mr-1" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Antibiotics': return 'bg-purple-100 text-purple-800';
      case 'Pain Relief': return 'bg-blue-100 text-blue-800';
      case 'Chronic': return 'bg-teal-100 text-teal-800';
      case 'Vitamins': return 'bg-amber-100 text-amber-800';
      case 'Other': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddMedicine = () => {
    console.log('Add medicine clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleEdit = (medicineId) => {
    console.log('Edit medicine:', medicineId);
  };

  const handleView = (medicineId) => {
    console.log('View medicine:', medicineId);
  };

  const handleDelete = (medicineId) => {
    console.log('Delete medicine:', medicineId);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate stats
  const totalMedicines = medicines.length;
  const activeMedicines = medicines.filter(med => med.status === 'Active').length;
  const expiringSoon = medicines.filter(med => med.status === 'Expiring Soon').length;
  const totalCategories = new Set(medicines.map(med => med.category)).size;

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Medicine Inventory
          </motion.h1>
          <div className="flex space-x-3 w-full md:w-auto mt-4 lg:mt-0">
            <button
              onClick={handleAddMedicine}
              className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FiPlus className="mr-2" />
              Add Medicine
            </button>
            <button
              onClick={handleExport}
              className="flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FiDownload className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Filters Section */}
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
              placeholder="Search medicines by name or batch..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300  text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <select
              className="w-full sm:w-auto pl-3 pr-10 py-3 border border-gray-300  text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white bg-no-repeat bg-right-2"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")`, backgroundSize: '1.5rem', backgroundPosition: 'right 0.75rem center' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              className="w-full sm:w-auto pl-3 pr-10 py-3 border border-gray-300  text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white bg-no-repeat bg-right-2"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")`, backgroundSize: '1.5rem', backgroundPosition: 'right 0.75rem center' }}
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            // Used GiMedicines here
            { icon: <GiMedicines className="text-purple-500" />, value: totalMedicines.toString(), label: 'Total Medicines', change: '+12%', changeColor: 'text-green-600' },
            { icon: <FiCheckCircle className="text-green-500" />, value: activeMedicines.toString(), label: 'Active Stock', change: '+8%', changeColor: 'text-green-600' },
            { icon: <FiAlertTriangle className="text-yellow-500" />, value: expiringSoon.toString(), label: 'Expiring Soon', change: '+5', changeColor: 'text-orange-600' },
            { icon: <FiBarChart2 className="text-blue-500" />, value: totalCategories.toString(), label: 'Unique Categories', change: '+2', changeColor: 'text-green-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between">
                <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
                <div className={`text-sm px-2 py-1 rounded-full flex items-center ${stat.changeColor} bg-opacity-20 ${stat.changeColor.replace('text-', 'bg-').replace('600', '100')}`}>
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

        {/* Main Table */}
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Medicine</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Expiry Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {currentMedicines.map((medicine) => (
                  <motion.tr
                    key={medicine.id}
                    className="hover:bg-purple-50/50 transition-colors duration-200"
                    whileHover={{ backgroundColor: '#f3e8ff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 shadow-sm">
                          {/* Used GiMedicines here */}
                          <GiMedicines size={20} />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-gray-900">{medicine.name}</div>
                          <div className="text-xs text-gray-500">Batch: {medicine.batch}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(medicine.category)}`}>
                        {medicine.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 font-medium">
                      <div className="flex items-center">
                        <FiClock className="mr-1.5 text-gray-400" />
                        {medicine.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1.5 text-gray-400" />
                        <span className={`${medicine.status === 'Expired' ? 'text-red-600 line-through' : 'text-gray-700'}`}>
                          {medicine.expiry}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(medicine.status)}`}>
                        {getStatusIcon(medicine.status)}
                        {medicine.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(medicine.id)}
                          className="text-purple-600 hover:text-purple-900 p-1 rounded-full hover:bg-purple-50 transition"
                          title="Edit"
                        >
                          <FiEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleView(medicine.id)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50 transition"
                          title="View"
                        >
                          <FiEye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(medicine.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition"
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredMedicines.length === 0 && (
            <div className="text-center py-12">
              {/* Used GiMedicines here */}
              <GiMedicines className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No medicines found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleAddMedicine}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <FiPlus className="-ml-1 mr-2 h-5 w-5" />
                  Add New Medicine
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          {filteredMedicines.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 rounded-b-3xl">
              <div className="text-sm text-gray-700 mb-2 sm:mb-0">
                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                <span className="font-medium">{Math.min(indexOfLastItem, filteredMedicines.length)}</span> of{' '}
                <span className="font-medium">{filteredMedicines.length}</span> medicines
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium shadow-sm ${
                      currentPage === index + 1
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Expiry Alert Section */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiAlertTriangle className="h-6 w-6 text-red-500 mr-3" />
              <h3 className="text-lg font-medium text-red-800">Expiry Alerts</h3>
            </div>
            {medicines.filter(med => med.status === 'Expiring Soon' || med.status === 'Expired').length > 0 && (
              <button className="text-sm font-medium text-red-600 hover:text-red-800">
                View All
              </button>
            )}
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {medicines
              .filter(med => med.status === 'Expiring Soon' || med.status === 'Expired')
              .slice(0, 3)
              .map(medicine => (
                <div key={medicine.id} className="bg-white p-4 rounded-lg shadow-xs border-l-4 border-red-500 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{medicine.name}</h4>
                      <p className="text-xs text-gray-500">Batch: {medicine.batch}</p>
                    </div>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(medicine.status)}`}>
                      {medicine.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <FiCalendar className="mr-2 text-gray-400" size={14} />
                    <span className="text-xs text-gray-600">Expires: {medicine.expiry}</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <FiClock className="mr-2 text-gray-400" size={14} />
                    <span className="text-xs text-gray-600">Quantity: {medicine.quantity}</span>
                  </div>
                </div>
              ))}
          </div>
          {medicines.filter(med => med.status === 'Expiring Soon' || med.status === 'Expired').length === 0 && (
            <div className="mt-4 text-center py-8">
              <FiCheckCircle className="mx-auto h-12 w-12 text-green-500 mb-2" />
              <p className="text-green-800 font-medium">No urgent expiry alerts!</p>
              <p className="text-green-600 text-sm">All medicines are within safe expiry dates.</p>
            </div>
          )}
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