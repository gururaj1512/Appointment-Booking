const Doctor = require('../models/Doctor');

// Add a new doctor
exports.addDoctor = async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        const savedDoctor = await newDoctor.save();
        res.status(201).json({
            success: true,
            data: savedDoctor
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// List doctors with filtering and pagination
exports.listDoctors = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            specialty,
            gender,
            experience,
            consultationFee,
            ratings,
            availability,
            location,
            sortBy,
            search
        } = req.query;

        // Build filter object (only include filters that are provided)
        const filter = {};

        if (specialty) filter.specialty = specialty;
        if (gender) filter.gender = gender;
        if (location) filter.location = location;

        if (experience) {
            const [min, max] = experience.split('-').map(Number);
            filter.experience = { $gte: min };
            if (max) filter.experience.$lte = max;
        }

        if (consultationFee) {
            const [min, max] = consultationFee.split('-').map(Number);
            filter.consultationFee = { $gte: min };
            if (max) filter.consultationFee.$lte = max;
        }

        if (ratings) {
            filter.ratings = { $gte: parseFloat(ratings) };
        }

        if (availability) {
            filter.availability = { $in: Array.isArray(availability) ? availability : [availability] };
        }

        if (search) {
            filter.$text = { $search: search };
        }

        // Build sort object
        let sort = {};
        if (sortBy) {
            const [field, order] = sortBy.split(':');
            sort[field] = order === 'desc' ? -1 : 1;
        } else {
            sort = { ratings: -1 }; // Default sort by ratings (highest first)
        }

        // Execute query with pagination
        const options = {
            limit: parseInt(limit),
            skip: (parseInt(page) - 1) * parseInt(limit),
            sort
        };

        const doctors = await Doctor.find(filter, null, options);
        const totalDoctors = await Doctor.countDocuments(filter);

        res.status(200).json({
            success: true,
            total: totalDoctors,
            page: parseInt(page),
            pages: Math.ceil(totalDoctors / parseInt(limit)),
            data: doctors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};