"use client";

import { useState } from 'react';
import { addDoctor } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function AddDoctorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    qualification: '',
    experience: '',
    hospital: '',
    location: '',
    consultationFee: '',
    languages: '',
    gender: '',
    availability: ['Morning', 'Evening'],
    imageUrl: 'https://placehold.co/150x150.png'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const doctorData = {
        ...formData,
        experience: parseInt(formData.experience),
        consultationFee: parseInt(formData.consultationFee),
        languages: formData.languages.split(',').map(lang => lang.trim()),
      };

      await addDoctor(doctorData);
      router.push('/doctors');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add doctor');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#02475b] mb-8">Add New Doctor</h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="specialty">
                Specialty*
              </label>
              <input
                type="text"
                id="specialty"
                name="specialty"
                required
                value={formData.specialty}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="qualification">
                Qualification*
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="experience">
                Experience (years)*
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                min="0"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="hospital">
                Hospital*
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                required
                value={formData.hospital}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="location">
                Location*
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="consultationFee">
                Consultation Fee (₹)*
              </label>
              <input
                type="number"
                id="consultationFee"
                name="consultationFee"
                required
                min="0"
                value={formData.consultationFee}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="languages">
                Languages (comma-separated)
              </label>
              <input
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="English, Hindi, Telugu"
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gender">
                Gender*
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-[#02475b] focus:border-[#02475b] text-gray-700"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={() => router.push('/doctors')}
              className="px-6 py-2 border border-[#02475b] text-[#02475b] rounded-full hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#02475b] text-white rounded-full hover:bg-opacity-90 disabled:opacity-50"
            >
              {loading ? 'Adding...' : 'Add Doctor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}