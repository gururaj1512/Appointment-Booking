/**
* Format price in Indian Rupees
* @param {number} amount - Amount to format
* @returns {string} - Formatted price with ₹ symbol
*/
export const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);
};

/**
* Generate SEO metadata for doctor listings
* @param {object} params - Parameters for meta tags
* @returns {object} - Meta tags object
*/
export const generateDoctorsMetadata = ({
    specialty = 'General Physician',
    location = '',
    page = 1,
}) => {
    const title = `${specialty} Doctors ${location ? `in ${location}` : ''} | Apollo247 Clone`;

    const description = `Consult with the best ${specialty} doctors ${location ? `in ${location}` : ''
        } online or book an appointment. Connect with experienced specialists for quality healthcare.`;

    const canonical = `/doctors/${specialty.toLowerCase().replace(/\s+/g, '-')}${location ? `/${location.toLowerCase()}` : ''
        }${page > 1 ? `?page=${page}` : ''}`;

    return {
        title,
        description,
        canonical,
        openGraph: {
            title,
            description,
            url: `https://apollo-clone.example.com${canonical}`,
            type: 'website',
        },
        additionalMetaTags: [
            {
                name: 'keywords',
                content: `${specialty} doctors, online doctor consultation, book doctor appointment, ${location ? location + ' doctors,' : ''
                    } healthcare, Apollo247`,
            },
        ],
    };
};