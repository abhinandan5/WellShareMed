'use client';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaPlus, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaInfoCircle,
  FaMapMarkerAlt 
} from 'react-icons/fa';

export default function FinderPage() {
  // State management
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newRequest, setNewRequest] = useState({ medicine: '', quantity: '', city: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  // Simulate API data fetching
  const fetchMedicines = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulated API response with donor information
      const mockData = [
        { 
          id: 1, 
          name: 'Insulin', 
          availability: 'Available', 
          quantity: '5 boxes', 
          city: 'New York', 
          donor: {
            name: 'John Smith',
            phone: '(212) 555-1234',
            email: 'john@example.com'
          }
        },
        { 
          id: 2, 
          name: 'Paracetamol', 
          availability: 'Available', 
          quantity: '20 packs', 
          city: 'Los Angeles', 
          donor: {
            name: 'Sarah Johnson',
            phone: '(310) 555-5678',
            email: 'sarah@example.com'
          }
        },
        { 
          id: 3, 
          name: 'Amoxicillin', 
          availability: 'Available', 
          quantity: '30 capsules', 
          city: 'Chicago', 
          donor: {
            name: 'Michael Brown',
            phone: '(312) 555-9012',
            email: 'michael@example.com'
          }
        },
        { 
          id: 4, 
          name: 'Lisinopril', 
          availability: 'Not Available', 
          quantity: '0', 
          city: 'Miami', 
          donor: null
        },
        { 
          id: 5, 
          name: 'Metformin', 
          availability: 'Available', 
          quantity: '10 boxes', 
          city: 'Seattle', 
          donor: {
            name: 'Emily Davis',
            phone: '(206) 555-3456',
            email: 'emily@example.com'
          }
        },
      ];

      // Apply filters to mock data
      let filteredMedicines = mockData;
      
      if (search) {
        filteredMedicines = filteredMedicines.filter(med => 
          med.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      if (cityFilter) {
        filteredMedicines = filteredMedicines.filter(med => 
          med.city.toLowerCase().includes(cityFilter.toLowerCase())
        );
      }
      
      setTimeout(() => {
        setMedicines(filteredMedicines);
        setLoading(false);
      }, 800);
      
    } catch (err) {
      console.error('Error fetching medicines:', err);
      setError('Failed to load medicine information. Please try again later.');
      setLoading(false);
    }
  }, [search, cityFilter]);

  useEffect(() => {
    fetchMedicines();
  }, [fetchMedicines]);

  // Form submission handler
  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      setTimeout(() => {
        // Add the new request to the list
        const newRequestWithId = {
          ...newRequest,
          id: medicines.length + 1,
          availability: 'Not Available',
          donor: null
        };
        
        setMedicines([newRequestWithId, ...medicines]);
        setNewRequest({ medicine: '', quantity: '', city: '' });
        setSubmitting(false);
        setShowForm(false);
      }, 1000);
      
    } catch (err) {
      console.error(err);
      setSubmitError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const showDonorInfo = (donor) => {
    setSelectedDonor(donor);
  };

  const closeDonorInfo = () => {
    setSelectedDonor(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Medicine Finder
            </h1>
            <p className="text-gray-600 text-base">Find and request essential medicines in your area</p>
          </div>
          
          <button
            onClick={toggleForm}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition text-base"
          >
            <FaPlus />
            <span>Request Medicine</span>
          </button>
        </div>

        {/* Request Form */}
        {showForm && (
          <motion.form
            onSubmit={handleRequestSubmit}
            className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Request Medicine</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Medicine Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Insulin"
                  value={newRequest.medicine}
                  onChange={(e) => setNewRequest({ ...newRequest, medicine: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Quantity Needed</label>
                <input
                  type="number"
                  placeholder="e.g., 5 boxes"
                  value={newRequest.quantity}
                  onChange={(e) => setNewRequest({ ...newRequest, quantity: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  value={newRequest.city}
                  onChange={(e) => setNewRequest({ ...newRequest, city: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-base"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={toggleForm}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-base"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition disabled:opacity-70 text-base"
              >
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
            
            {submitError && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-base">
                {submitError}
              </div>
            )}
          </motion.form>
        )}

        {/* Search Section */}
        <div className="bg-white p-5 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Search Medicine
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Medicine name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-base"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Filter by City
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="City name..."
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-800 text-base"
                />
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            
            <div className="flex items-end">
              <button 
                onClick={() => {setSearch(''); setCityFilter('');}} 
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition text-base"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">
                  Medicine Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">
                  Quantity Available
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800 uppercase tracking-wider">
                  Donor Info
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-600"></div>
                    </div>
                    <p className="mt-2 text-gray-800 text-base">Searching for medicines...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center">
                    <p className="text-red-600 text-base">{error}</p>
                  </td>
                </tr>
              ) : medicines.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center">
                    <div className="flex flex-col items-center">
                      <FaInfoCircle className="text-4xl text-gray-300 mb-3" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">No medicines found</h3>
                      <p className="text-gray-600 text-base">
                        {search || cityFilter 
                          ? "No matches for your search criteria" 
                          : "No medicine information currently available"}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                medicines.map((med) => (
                  <tr key={med.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-800 text-base font-medium">{med.name}</div>
                      <div className="text-gray-600 text-sm">{med.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                        med.availability === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {med.availability}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-800 text-base">{med.quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {med.donor ? (
                        <button
                          onClick={() => showDonorInfo(med.donor)}
                          className="px-4 py-2 bg-teal-100 text-teal-800 rounded-lg hover:bg-teal-200 transition text-base"
                        >
                          View Contact
                        </button>
                      ) : (
                        <span className="text-gray-500 text-base">No donor information</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Donor Info Modal */}
      {selectedDonor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Donor Information</h3>
                <button 
                  onClick={closeDonorInfo}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaUser className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Donor Name</p>
                    <p className="text-gray-800 text-base font-medium">{selectedDonor.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone Number</p>
                    <p className="text-gray-800 text-base font-medium">{selectedDonor.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Address</p>
                    <p className="text-gray-800 text-base font-medium">{selectedDonor.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={closeDonorInfo}
                  className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}