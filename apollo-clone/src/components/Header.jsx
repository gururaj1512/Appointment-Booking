import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                {/* Top navigation bar */}
                <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center">
                        <Link href="/" className="mr-6">
                            <div className="w-36 h-10 relative">
                                <Image
                                    src="/images/logos/apollo-logo.svg"
                                    alt="Apollo 247 Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                        </Link>

                        <nav className="hidden md:flex space-x-6">
                            <Link href="/doctors" className="text-[#02475b] font-medium hover:text-[#00b3e3] transition">
                                Doctors
                            </Link>
                            <Link href="#" className="text-gray-600 font-medium hover:text-[#00b3e3] transition">
                                Medicines
                            </Link>
                            <Link href="#" className="text-gray-600 font-medium hover:text-[#00b3e3] transition">
                                Lab Tests
                            </Link>
                            <Link href="#" className="text-gray-600 font-medium hover:text-[#00b3e3] transition">
                                Health Records
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center border rounded-full px-4 py-2 bg-[#f8f8f8]">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search doctors, medicines, etc."
                                className="bg-transparent outline-none w-64"
                            />
                        </div>

                        <button className="p-2 text-[#02475b] hover:text-[#00b3e3]">
                            <FaShoppingCart size={20} />
                        </button>

                        <button className="p-2 text-[#02475b] hover:text-[#00b3e3]">
                            <FaUser size={20} />
                        </button>
                    </div>
                </div>

                {/* Breadcrumb navigation */}
                <div className="py-3 text-sm text-gray-500">
                    <Link href="/" className="hover:text-[#00b3e3]">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/doctors" className="hover:text-[#00b3e3]">
                        Doctors
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#02475b]">General Physician & Internal Medicine</span>
                </div>
            </div>
        </header>
    );
};

export default Header;