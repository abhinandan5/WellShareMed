'use client'
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaMedkit, FaCalendarAlt, FaEnvelope, FaUser, FaBox, FaArrowRight } from 'react-icons/fa';

export default function DonateMedicinePage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    medicineName: '',
    expiryDate: '',
    packing: 'Tablets',
    quantity: '',
    city: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Nearby needs state
  const [nearbyNeeds, setNearbyNeeds] = useState([]);
  const [needsLoading, setNeedsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Mock data for nearby needs
  const mockNeedsData = [
    { 
      id: 1, 
      medicine: 'Insulin', 
      quantity: '5 boxes', 
      city: 'New York', 
      status: 'Urgent',
      requestedBy: 'John Smith',
      contact: 'john@example.com'
    },
    { 
      id: 2, 
      medicine: 'Paracetamol', 
      quantity: '20 packs', 
      city: 'Los Angeles', 
      status: 'Needed',
      requestedBy: 'Community Health Center',
      contact: 'health@community.org'
    },
    { 
      id: 3, 
      medicine: 'Amoxicillin', 
      quantity: '30 capsules', 
      city: 'Chicago', 
      status: 'Urgent',
      requestedBy: 'Sarah Johnson',
      contact: 'sarahj@example.com'
    },
  ];

  // Fetch nearby needs (mock implementation)
  const fetchNearbyNeeds = useCallback(async () => {
    setNeedsLoading(true);
    try {
      // Simulate API call
      setTimeout(() => {
        setNearbyNeeds(mockNeedsData);
        setNeedsLoading(false);
      }, 800);
    } catch (err) {
      console.error('Error fetching needs:', err);
      setNeedsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNearbyNeeds();
  }, [fetchNearbyNeeds]);

  const handleChange = (e) => {
    setSubmissionStatus(null);
    setErrorMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus(null);
    setErrorMessage('');

    // Validation
    if (!formData.name || !formData.email || !formData.medicineName || 
        !formData.expiryDate || !formData.quantity || !formData.city) {
      setErrorMessage('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    const today = new Date();
    const expiry = new Date(formData.expiryDate);
    if (expiry < today) {
      setErrorMessage('Expiry date must be in the future.');
      setLoading(false);
      return;
    }

    // Simulate submission
    try {
      setTimeout(() => {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          medicineName: '',
          expiryDate: '',
          packing: 'Tablets',
          quantity: '',
          city: ''
        });
      }, 1000);
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }, [formData]);

  // Pre-fill form from a need
  const handleDonateToNeed = (need) => {
    setFormData({
      ...formData,
      medicineName: need.medicine,
      quantity: need.quantity,
      city: need.city
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Donate Medicines 💊
          </h1>
          <p className="text-gray-600 text-lg">
            Your contribution can save lives. Fill the form below to donate.
          </p>
        </motion.div>

        {/* Form Toggle Button */}
        <div className="mb-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {showForm ? (
              <>
                <span>Hide Donation Form</span>
              </>
            ) : (
              <>
                <FaMedkit />
                <span>Show Donation Form</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Donation Form */}
        {showForm && (
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl mb-12"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Medicine Donation Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaUser className="text-teal-600" /> Full Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Enter your Name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-teal-600" /> Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Enter your Email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Medicine Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Medicine Name */}
                <div className="flex flex-col">
                  <label htmlFor="medicineName" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaMedkit className="text-teal-600" /> Medicine Name*
                  </label>
                  <input
                    id="medicineName"
                    name="medicineName"
                    type="text"
                    placeholder='Enter Medicine Name'
                    required
                    value={formData.medicineName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Expiry Date */}
                <div className="flex flex-col">
                  <label htmlFor="expiryDate" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-teal-600" /> Expiry Date*
                  </label>
                  <input
                    id="expiryDate"
                    name="expiryDate"
                    type="date"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Packing Type */}
                <div className="flex flex-col">
                  <label htmlFor="packing" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <FaBox className="text-teal-600" /> Packing Type*
                  </label>
                  <select
                    id="packing"
                    name="packing"
                    required
                    value={formData.packing}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="Tablets">Tablets</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Capsules">Capsules</option>
                    <option value="Injection">Injection</option>
                    <option value="Ointment">Ointment</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="flex flex-col">
                  <label htmlFor="quantity" className="font-medium text-gray-700 mb-2">Quantity*</label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder='Enter Quantity'
                    required
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label htmlFor="city" className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-teal-600" /> City*
                </label>
                <input
                  id="city"
                    name="city"
                    type="text"
                    placeholder='Enter City Name'
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 text-gray-800 text-base rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Submission Status/Error Messages */}
                {loading && (
                  <div className="text-center text-teal-600 font-medium flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-teal-500"></div>
                    <span>Submitting donation...</span>
                  </div>
                )}
                {submissionStatus === 'success' && (
                  <div className="text-center text-green-700 font-medium p-3 bg-green-100 rounded-md">
                    🎉 Your donation has been submitted successfully! Thank you for your generosity.
                  </div>
                )}
                {submissionStatus === 'error' && errorMessage && (
                  <div className="text-center text-red-700 font-medium p-3 bg-red-100 rounded-md">
                    ❌ {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-md transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Donate Medicines'}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          )}

          {/* Nearby Needs Section */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Medicines Needed Nearby</h2>
              <div className="flex items-center gap-2 text-teal-600">
                <FaMapMarkerAlt />
                <span className="font-medium">Based on your location</span>
              </div>
            </div>

            {needsLoading ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600 mb-4"></div>
                <p className="text-gray-800 text-base">Finding nearby medicine needs...</p>
              </div>
            ) : nearbyNeeds.length === 0 ? (
              <div className="text-center py-10">
                <div className="text-5xl text-gray-300 mb-4">💊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No urgent needs found</h3>
                <p className="text-gray-600 text-base">Currently there are no urgent medicine requests in your area</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyNeeds.map((need) => (
                  <motion.div
                    key={need.id}
                    className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                          <FaMedkit className="text-teal-600" />
                          {need.medicine}
                        </h3>
                        <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                          need.status === 'Urgent' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-teal-100 text-teal-800'
                        }`}>
                          {need.status}
                        </div>
                      </div>
                      <div className="text-3xl text-teal-200">
                        💊
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <div className="w-8 text-teal-600">
                          📦
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Quantity Needed</p>
                          <p className="font-medium text-gray-800">{need.quantity}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 text-teal-600">
                          <FaMapMarkerAlt />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-gray-800">{need.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 text-teal-600">
                          👤
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Requested By</p>
                          <p className="font-medium text-gray-800">{need.requestedBy}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDonateToNeed(need)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2.5 rounded-lg hover:opacity-90 transition"
                    >
                      Donate This Medicine <FaArrowRight />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    );
  }