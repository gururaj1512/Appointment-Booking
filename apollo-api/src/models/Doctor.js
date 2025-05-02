const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialty: {
        type: String,
        required: true,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    hospital: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    consultationFee: {
        type: Number,
        required: true,
        min: 0
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0,
        min: 0
    },
    languages: {
        type: [String],
        default: []
    },
    availability: {
        type: [String],
        default: ['Morning', 'Evening']
    },
    imageUrl: {
        type: String,
        default: 'https://placehold.co/150x150'
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    }
}, {
    timestamps: true
});

doctorSchema.index({ name: 'text', specialty: 'text', hospital: 'text', location: 'text' });
doctorSchema.index({ specialty: 1 });
doctorSchema.index({ experience: 1 });
doctorSchema.index({ consultationFee: 1 });
doctorSchema.index({ ratings: 1 });
doctorSchema.index({ gender: 1 });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;