"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // For metadata
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import DoctorCard from '../../components/DoctorCard';
import Pagination from '../../components/Pagination';
import { fetchDoctors } from '../../lib/api';
import { generateDoctorsMetadata } from '../../lib/utils';

export default function DoctorsPage() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        specialty: '',
        gender: '',
        experience: '',
        consultationFee: '',
        availability: '',
        sortBy: 'ratings:desc',
        search: '',
    });
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalDoctors: 0,
    });

    const metadata = generateDoctorsMetadata({
        specialty: 'General Physician & Internal Medicine',
        page: pagination.currentPage,
    });

    const loadDoctors = async () => {
        try {
            setLoading(true);
            const response = await fetchDoctors(
                filters,
                pagination.currentPage,
                10
            );

            setDoctors(response.data);
            setPagination({
                currentPage: response.page,
                totalPages: response.pages,
                totalDoctors: response.total,
            });
            setError(null);
        } catch (err) {
            console.error('Failed to fetch doctors:', err);
            setError('Failed to load doctors. Please try again later.');
            // Set empty data as fallback
            setDoctors([]);
        } finally {
            // Use a timeout to simulate network delay for better UX testing
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        // Reset to page 1 when filters change
        setPagination((prev) => ({ ...prev, currentPage: 1 }));
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    // Handle pagination
    const handlePageChange = (page) => {
        setPagination((prev) => ({ ...prev, currentPage: page }));
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Fetch doctors when component mounts or filters/pagination change
    useEffect(() => {
        loadDoctors();
    }, [filters, pagination.currentPage]);

    // Demo data for initial render (in case API is not available)
    useEffect(() => {
        if (process.env.NODE_ENV === 'development' && !doctors.length && !loading) {
            // Sample data for development
            const sampleDoctors = [
                {
                    _id: '1',
                    name: 'Dr. Anjali Sharma',
                    specialty: 'General Physician & Internal Medicine',
                    qualification: 'MBBS, MD (Internal Medicine)',
                    experience: 12,
                    hospital: 'Apollo Hospital, CBD Belapur',
                    location: 'Mumbai',
                    consultationFee: 900,
                    ratings: 4.8,
                    reviews: 246,
                    languages: ['English', 'Hindi', 'Marathi'],
                    availability: ['Morning', 'Evening'],
                    imageUrl: 'https://placehold.co/150x150',
                    gender: 'Female'
                },
                {
                    _id: '2',
                    name: 'Dr. Rajesh Kumar',
                    specialty: 'General Physician & Internal Medicine',
                    qualification: 'MBBS, DNB (General Medicine)',
                    experience: 8,
                    hospital: 'Apollo Clinic, Powai',
                    location: 'Mumbai',
                    consultationFee: 700,
                    ratings: 4.5,
                    reviews: 187,
                    languages: ['English', 'Hindi', 'Tamil'],
                    availability: ['Morning', 'Afternoon'],
                    imageUrl: 'https://placehold.co/150x150',
                    gender: 'Male'
                },
                {
                    _id: '3',
                    name: 'Dr. Sunil Mehta',
                    specialty: 'General Physician & Internal Medicine',
                    qualification: 'MBBS, MD (General Medicine)',
                    experience: 15,
                    hospital: 'Apollo Hospital, Navi Mumbai',
                    location: 'Mumbai',
                    consultationFee: 1200,
                    ratings: 4.9,
                    reviews: 321,
                    languages: ['English', 'Hindi', 'Gujarati'],
                    availability: ['Evening'],
                    imageUrl: 'https://placehold.co/150x150',
                    gender: 'Male'
                }
            ];

            setDoctors(sampleDoctors);
            setPagination({
                currentPage: 1,
                totalPages: 1,
                totalDoctors: sampleDoctors.length,
            });
        }
    }, [doctors.length, loading]);

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href={metadata.canonical} />
                {metadata.additionalMetaTags.map((tag, index) => (
                    <meta key={index} name={tag.name} content={tag.content} />
                ))}
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Header />

                <main className="container mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold text-[#02475b] mb-6">
                        General Physician & Internal Medicine Doctors
                    </h1>

                    <div className="flex flex-col md:flex-row">
                        {/* Sidebar filters */}
                        <div className="md:w-1/4 md:pr-6 mb-6 md:mb-0">
                            <Filters onFilterChange={handleFilterChange} />
                        </div>

                        {/* Main content area */}
                        <div className="md:w-3/4">
                            {/* Results stats */}
                            <div className="bg-white rounded shadow-md p-4 mb-4">
                                <p className="text-[#02475b]">
                                    {loading
                                        ? 'Finding doctors...'
                                        : `Found ${pagination.totalDoctors} doctors matching your criteria`}
                                </p>
                            </div>

                            {/* Loading state */}
                            {loading && (
                                <div className="bg-white rounded shadow-md p-8 flex justify-center">
                                    <div className="text-center">
                                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#02475b]"></div>
                                        <p className="mt-2 text-[#02475b]">Loading doctors...</p>
                                    </div>
                                </div>
                            )}

                            {/* Error state */}
                            {error && !loading && (
                                <div className="bg-white rounded shadow-md p-8">
                                    <div className="text-center text-red-600">
                                        <p>{error}</p>
                                        <button
                                            onClick={loadDoctors}
                                            className="mt-4 bg-[#02475b] text-white py-2 px-4 rounded hover:bg-blue-700"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Empty state */}
                            {!loading && !error && doctors.length === 0 && (
                                <div className="bg-white rounded shadow-md p-8">
                                    <div className="text-center text-gray-600">
                                        <p>No doctors found matching your criteria.</p>
                                        <p className="mt-2">Try adjusting your filters.</p>
                                    </div>
                                </div>
                            )}

                            {/* Doctor cards */}
                            {!loading && !error && doctors.length > 0 && (
                                <div>
                                    {doctors.map((doctor) => (
                                        <DoctorCard key={doctor._id} doctor={doctor} />
                                    ))}

                                    {/* Pagination */}
                                    {pagination.totalPages > 1 && (
                                        <Pagination
                                            currentPage={pagination.currentPage}
                                            totalPages={pagination.totalPages}
                                            onPageChange={handlePageChange}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </main>

                <footer className="bg-[#02475b] text-white py-8 mt-12">
                    <div className="container mx-auto px-4">
                        <p className="text-center">
                            © {new Date().getFullYear()} Apollo247 Clone - For Demonstration Purposes Only
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}