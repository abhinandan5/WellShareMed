// src/components/ProfileCard.jsx
'use client';
import { useState, useRef } from 'react';
import { FiUser, FiEdit, FiLock, FiCamera, FiFile, FiCheck } from 'react-icons/fi';

// Country data for dropdowns
const countries = [
  { code: 'IN', name: 'India', phone: '+91' },
  { code: 'US', name: 'United States', phone: '+1' },
  { code: 'GB', name: 'United Kingdom', phone: '+44' },
  { code: 'CA', name: 'Canada', phone: '+1' },
  { code: 'AU', name: 'Australia', phone: '+61' },
  { code: 'DE', name: 'Germany', phone: '+49' },
  { code: 'FR', name: 'France', phone: '+33' },
  { code: 'JP', name: 'Japan', phone: '+81' },
  // Add more countries as needed
];

const documentTypes = [
  "Aadhar Card",
  "Passport",
  "Driver's License",
  "National ID",
  "Green Card",
  "Other Government ID"
];

export default function ProfileCard() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phoneCountryCode: '+91',
    phoneNumber: '9876543210',
    street: '123 Health Street',
    city: 'Ludhiana',
    state: 'Punjab',
    country: 'India',
    profilePic: '/default-avatar.png',
    documentType: '',
    documentFile: null,
    documentPreview: null,
    isVerified: false,
    profileComplete: false
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({...userData});
  const fileInputRef = useRef(null);
  const docInputRef = useRef(null);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // In a real app, you would send this data to your backend
    setUserData({...tempData, profileComplete: true});
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempData(prev => ({ ...prev, profilePic: e.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDocumentChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempData(prev => ({ 
          ...prev, 
          documentFile: file,
          documentPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={isEditing ? tempData.profilePic : userData.profilePic} 
              alt={userData.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-avatar.png";
              }}
            />
          </div>
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full cursor-pointer shadow-md">
              <FiCamera />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </label>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
        <p className="text-sm text-gray-600">{userData.email}</p>
        
        {!isEditing ? (
          <button 
            onClick={handleEditProfile}
            className="mt-3 flex items-center text-sm text-teal-600 hover:text-teal-800"
          >
            <FiEdit className="mr-1" /> Edit Profile
          </button>
        ) : (
          <button 
            onClick={handleSaveProfile}
            className="mt-3 flex items-center text-sm text-green-600 hover:text-green-800"
          >
            <FiCheck className="mr-1" /> Save Profile
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={tempData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
              <select
                name="phoneCountryCode"
                value={tempData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.phone}>
                    {country.phone} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={tempData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Street/Building/Road</label>
            <input
              type="text"
              name="street"
              value={tempData.street}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={tempData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={tempData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                name="country"
                value={tempData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Identity Verification</h3>
            <p className="text-sm text-gray-600 mb-4">
              To ensure the security of our platform and verify your identity, please upload a valid government-issued ID.
            </p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
              <select
                name="documentType"
                value={tempData.documentType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select document type</option>
                {documentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Document</label>
              {tempData.documentPreview ? (
                <div className="mt-2">
                  <img 
                    src={tempData.documentPreview} 
                    alt="Document preview" 
                    className="max-w-full h-40 object-contain border rounded-lg"
                  />
                  <button 
                    type="button"
                    className="mt-2 text-sm text-red-600"
                    onClick={() => {
                      setTempData(prev => ({ 
                        ...prev, 
                        documentFile: null,
                        documentPreview: null
                      }));
                      if (docInputRef.current) docInputRef.current.value = '';
                    }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FiFile className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF (MAX. 5MB)</p>
                    </div>
                    <input 
                      type="file" 
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden" 
                      onChange={handleDocumentChange}
                      ref={docInputRef}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FiUser className="text-green-600" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm">Phone</h3>
              <p className="font-medium">
                {userData.phoneCountryCode} {userData.phoneNumber}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <FiEdit className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm">Address</h3>
              <p className="font-medium">
                {userData.street}, {userData.city},<br />
                {userData.state}, {userData.country}
              </p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Verification Status</h3>
            {userData.isVerified ? (
              <div className="flex items-center text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <FiCheck className="mr-2" />
                <span>Identity Verified</span>
              </div>
            ) : (
              <div className="text-yellow-700 bg-yellow-50 px-3 py-2 rounded-lg text-sm">
                {userData.documentType ? 
                  "Your document is under review by our team" : 
                  "Please complete identity verification to access all features"
                }
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8">
        <button className="w-full flex items-center justify-center py-3 px-4 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
          <FiLock className="mr-2" /> Change Password
        </button>
      </div>
    </div>
  );
}