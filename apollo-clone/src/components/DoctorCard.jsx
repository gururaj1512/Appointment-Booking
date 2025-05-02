import React from 'react';
import Image from 'next/image';
import { FaStar, FaVideo, FaUserMd } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
    const {
        name,
        specialty,
        qualification,
        experience,
        hospital,
        location,
        consultationFee,
        ratings,
        reviews,
        languages,
        imageUrl
    } = doctor;

    return (
        <div className="apollo-card bg-white rounded shadow-md p-4 mb-4 flex flex-col md:flex-row">
            {/* Doctor's profile image and quick actions */}
            <div className="md:w-1/4 flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
                    <Image
                        src={imageUrl || "https://placehold.co/150x150"}
                        alt={`Dr. ${name}`}
                        width={150}
                        height={150}
                        className="rounded-full"
                        priority={false}
                    />
                </div>

                <div className="flex space-x-2 mb-3">
                    <button className="bg-[#00b3e3] text-white p-2 rounded">
                        <FaVideo />
                    </button>
                    <button className="bg-[#02475b] text-white p-2 rounded">
                        <FaUserMd />
                    </button>
                </div>
            </div>

            {/* Doctor's information */}
            <div className="md:w-3/4 md:pl-4">
                <h2 className="text-xl font-semibold text-[#02475b]">{name}</h2>
                <p className="text-gray-600">{specialty}</p>
                <p className="text-gray-600">{qualification}</p>

                <div className="flex items-center mt-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <FaStar className="text-yellow-500 mr-1" /> {ratings}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{reviews} reviews</span>
                </div>

                <div className="flex items-center mt-2">
                    <span className="text-gray-600 font-semibold mr-1">Experience:</span>
                    <span className="text-gray-600">{experience} years</span>
                </div>

                <div className="mt-1">
                    <span className="text-gray-600 font-semibold mr-1">Hospital:</span>
                    <span className="text-gray-600">{hospital}</span>
                </div>

                <div className="mt-1">
                    <span className="text-gray-600 font-semibold mr-1">Location:</span>
                    <span className="text-gray-600">{location}</span>
                </div>

                {languages && languages.length > 0 && (
                    <div className="mt-1">
                        <span className="text-gray-600 font-semibold mr-1">Languages:</span>
                        <span className="text-gray-600">{languages.join(', ')}</span>
                    </div>
                )}

                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Consultation Fee</p>
                        <p className="text-[#02475b] font-semibold">₹{consultationFee}</p>
                    </div>

                    <button className="bg-[#13a873] text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;