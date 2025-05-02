import React, { useState, useEffect } from 'react';
import { FaFilter, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        gender: '',
        experience: '',
        consultationFee: '',
        availability: '',
        sortBy: 'ratings:desc'
    });

    const [isOpen, setIsOpen] = useState({
        gender: true,
        experience: true,
        consultationFee: true,
        availability: true,
        sortBy: true
    });

    const handleFilterChange = (category, value) => {
        const newFilters = {
            ...filters,
            [category]: value
        };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const toggleSection = (section) => {
        setIsOpen({
            ...isOpen,
            [section]: !isOpen[section]
        });
    };

    useEffect(() => {
        onFilterChange(filters);
    }, []);

    return (
        <div className="bg-white rounded shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#02475b] flex items-center">
                    <FaFilter className="mr-2" /> Filters
                </h2>
                <button
                    className="text-sm text-[#00b3e3]"
                    onClick={() => {
                        const resetFilters = {
                            gender: '',
                            experience: '',
                            consultationFee: '',
                            availability: '',
                            sortBy: 'ratings:desc'
                        };
                        setFilters(resetFilters);
                        onFilterChange(resetFilters);
                    }}
                >
                    Clear All
                </button>
            </div>

            <div className="border-b pb-3 mb-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('sortBy')}
                >
                    <h3 className="font-medium text-[#032c6e]">Sort By</h3>
                    {isOpen.sortBy ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isOpen.sortBy && (
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="relevance"
                                name="sortBy"
                                value="ratings:desc"
                                checked={filters.sortBy === 'ratings:desc'}
                                onChange={() => handleFilterChange('sortBy', 'ratings:desc')}
                                className="mr-2"
                            />
                            <label htmlFor="relevance" className="text-sm text-[#02475b]">Relevance</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="experience-high"
                                name="sortBy"
                                value="experience:desc"
                                checked={filters.sortBy === 'experience:desc'}
                                onChange={() => handleFilterChange('sortBy', 'experience:desc')}
                                className="mr-2"
                            />
                            <label htmlFor="experience-high" className="text-sm text-[#02475b]">Experience (High to Low)</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-low"
                                name="sortBy"
                                value="consultationFee:asc"
                                checked={filters.sortBy === 'consultationFee:asc'}
                                onChange={() => handleFilterChange('sortBy', 'consultationFee:asc')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-low" className="text-sm text-[#02475b]">Fee (Low to High)</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-high"
                                name="sortBy"
                                value="consultationFee:desc"
                                checked={filters.sortBy === 'consultationFee:desc'}
                                onChange={() => handleFilterChange('sortBy', 'consultationFee:desc')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-high" className="text-sm text-[#02475b]">Fee (High to Low)</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-b pb-3 mb-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('gender')}
                >
                    <h3 className="font-medium text-[#032c6e]">Gender</h3>
                    {isOpen.gender ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isOpen.gender && (
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-all"
                                name="gender"
                                value=""
                                checked={filters.gender === ''}
                                onChange={() => handleFilterChange('gender', '')}
                                className="mr-2"
                            />
                            <label htmlFor="gender-all" className="text-sm text-[#02475b]">All</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="Male"
                                checked={filters.gender === 'Male'}
                                onChange={() => handleFilterChange('gender', 'Male')}
                                className="mr-2"
                            />
                            <label htmlFor="gender-male" className="text-sm text-[#02475b]">Male</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="Female"
                                checked={filters.gender === 'Female'}
                                onChange={() => handleFilterChange('gender', 'Female')}
                                className="mr-2"
                            />
                            <label htmlFor="gender-female" className="text-sm text-[#02475b]">Female</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-b pb-3 mb-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('experience')}
                >
                    <h3 className="font-medium text-[#032c6e]">Experience</h3>
                    {isOpen.experience ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isOpen.experience && (
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="exp-all"
                                name="experience"
                                value=""
                                checked={filters.experience === ''}
                                onChange={() => handleFilterChange('experience', '')}
                                className="mr-2"
                            />
                            <label htmlFor="exp-all" className="text-sm text-[#02475b]">All</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="exp-0-5"
                                name="experience"
                                value="0-5"
                                checked={filters.experience === '0-5'}
                                onChange={() => handleFilterChange('experience', '0-5')}
                                className="mr-2"
                            />
                            <label htmlFor="exp-0-5" className="text-sm text-[#02475b]">0-5 years</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="exp-5-10"
                                name="experience"
                                value="5-10"
                                checked={filters.experience === '5-10'}
                                onChange={() => handleFilterChange('experience', '5-10')}
                                className="mr-2"
                            />
                            <label htmlFor="exp-5-10" className="text-sm text-[#02475b]">5-10 years</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="exp-10-plus"
                                name="experience"
                                value="10-100"
                                checked={filters.experience === '10-100'}
                                onChange={() => handleFilterChange('experience', '10-100')}
                                className="mr-2"
                            />
                            <label htmlFor="exp-10-plus" className="text-sm text-[#02475b]">10+ years</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-b pb-3 mb-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('consultationFee')}
                >
                    <h3 className="font-medium text-[#032c6e]">Consultation Fee</h3>
                    {isOpen.consultationFee ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isOpen.consultationFee && (
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-all"
                                name="consultationFee"
                                value=""
                                checked={filters.consultationFee === ''}
                                onChange={() => handleFilterChange('consultationFee', '')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-all" className="text-sm text-[#02475b]">All</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-0-500"
                                name="consultationFee"
                                value="0-500"
                                checked={filters.consultationFee === '0-500'}
                                onChange={() => handleFilterChange('consultationFee', '0-500')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-0-500" className="text-sm text-[#02475b]">₹0 - ₹500</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-500-1000"
                                name="consultationFee"
                                value="500-1000"
                                checked={filters.consultationFee === '500-1000'}
                                onChange={() => handleFilterChange('consultationFee', '500-1000')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-500-1000" className="text-sm text-[#02475b]">₹500 - ₹1000</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="fee-1000-plus"
                                name="consultationFee"
                                value="1000-10000"
                                checked={filters.consultationFee === '1000-10000'}
                                onChange={() => handleFilterChange('consultationFee', '1000-10000')}
                                className="mr-2"
                            />
                            <label htmlFor="fee-1000-plus" className="text-sm text-[#02475b]">₹1000+</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="pb-3">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('availability')}
                >
                    <h3 className="font-medium text-[#032c6e]">Availability</h3>
                    {isOpen.availability ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {isOpen.availability && (
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="avail-all"
                                name="availability"
                                value=""
                                checked={filters.availability === ''}
                                onChange={() => handleFilterChange('availability', '')}
                                className="mr-2"
                            />
                            <label htmlFor="avail-all" className="text-sm text-[#02475b]">All</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="avail-morning"
                                name="availability"
                                value="Morning"
                                checked={filters.availability === 'Morning'}
                                onChange={() => handleFilterChange('availability', 'Morning')}
                                className="mr-2"
                            />
                            <label htmlFor="avail-morning" className="text-sm text-[#02475b]">Morning</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="avail-afternoon"
                                name="availability"
                                value="Afternoon"
                                checked={filters.availability === 'Afternoon'}
                                onChange={() => handleFilterChange('availability', 'Afternoon')}
                                className="mr-2"
                            />
                            <label htmlFor="avail-afternoon" className="text-sm text-[#02475b]">Afternoon</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="avail-evening"
                                name="availability"
                                value="Evening"
                                checked={filters.availability === 'Evening'}
                                onChange={() => handleFilterChange('availability', 'Evening')}
                                className="mr-2"
                            />
                            <label htmlFor="avail-evening" className="text-sm text-[#02475b]">Evening</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;