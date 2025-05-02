import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        const showEllipsis = totalPages > 7;

        if (showEllipsis) {
            if (currentPage <= 4) {
                // Show first 5 pages, ellipsis, and last page
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 3) {
                // Show first page, ellipsis, and last 5 pages
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                // Show first page, ellipsis, current page and neighbors, ellipsis, last page
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        } else {
            // Show all pages if total pages are 7 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    return (
        <div className="flex justify-center items-center space-x-2 mt-6 mb-4">
            {/* Previous button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-full
          ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#02475b] hover:bg-[#f8f8f8]'}`}
            >
                <FaChevronLeft size={16} />
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' ? onPageChange(page) : null}
                    disabled={page === '...'}
                    className={`w-10 h-10 rounded-full flex items-center justify-center
            ${page === currentPage
                            ? 'bg-[#02475b] text-white'
                            : page === '...'
                                ? 'text-gray-400 cursor-default'
                                : 'text-[#02475b] hover:bg-[#f8f8f8]'}`}
                >
                    {page}
                </button>
            ))}

            {/* Next button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-full
          ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#02475b] hover:bg-[#f8f8f8]'}`}
            >
                <FaChevronRight size={16} />
            </button>
        </div>
    );
};

export default Pagination;