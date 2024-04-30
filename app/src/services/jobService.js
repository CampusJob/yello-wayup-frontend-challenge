import axios from 'axios';

export const fetchJobs = async () => {
  try {
    const response = await axios.get('https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs');
    return response.data; 
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return []; 
  }
};
