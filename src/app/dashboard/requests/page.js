'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RequestsDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests([
      {
        id: 1,
        medicine: 'Insulin - 2 Vials',
        city: 'Mumbai',
        status: 'Pending',
        date: '2025-06-02',
        donor: 'MediCare Foundation'
      },
      {
        id: 2,
        medicine: 'ORS - 3 Packets',
        city: 'Nagpur',
        status: 'Approved',
        date: '2025-06-05',
        donor: 'HealthFirst NGO'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Your Medicine Requests
          </h1>
          <p className="text-gray-600 text-lg">
            Track the status of your requested medicines 🩺
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">Total Requests</h3>
            <p className="text-3xl font-bold text-teal-600">12</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">Approved</h3>
            <p className="text-3xl font-bold text-green-600">8</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">4</p>
          </motion.div>
        </div>

        {/* Requests Table */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-teal-50">
            <h2 className="text-xl font-semibold text-gray-800">Request History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Medicine</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">City</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Donor</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {requests.map((req) => (
                  <tr key={req.id}>
                    <td className="px-6 py-4 text-gray-800 font-medium">{req.medicine}</td>
                    <td className="px-6 py-4 text-gray-600">{req.city}</td>
                    <td className="px-6 py-4 text-gray-500">{req.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{req.donor}</td>
                  </tr>
                ))}
                {requests.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-6">
                      No requests made yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}