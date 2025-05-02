import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchDoctors = async (filters = {}, page = 1, limit = 10) => {
    try {
        const params = new URLSearchParams();

        params.append('page', page);
        params.append('limit', limit);

        if (filters.gender) params.append('gender', filters.gender);
        if (filters.experience) params.append('experience', filters.experience);
        if (filters.consultationFee) params.append('consultationFee', filters.consultationFee);
        if (filters.availability) params.append('availability', filters.availability);
        if (filters.sortBy) params.append('sortBy', filters.sortBy);
        if (filters.specialty) params.append('specialty', filters.specialty);
        if (filters.search) params.append('search', filters.search);

        console.log(`/doctors?${params.toString()}`);
        const response = await api.get(`/doctors?${params.toString()}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
    }
};

export const addDoctor = async (doctorData) => {
    try {
        const response = await api.post('/doctors', doctorData);
        return response.data;
    } catch (error) {
        console.error('Error adding doctor:', error);
        throw error;
    }
};