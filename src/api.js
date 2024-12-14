// import axios from 'axios';
// const device = import.meta.env.VITE_DEVICE;

// const apiClient = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

import axios from 'axios';
const device = import.meta.env.VITE_DEVICE;

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

const dailyData = async () => {
    try {
        const response = await apiClient.get(`/soilMoisture/today/${device}`);
        console.log("get today data successful");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const weeklyData = async () => {
    try {
        const response = await apiClient.get(`/soilMoisture/last-week/${device}`);
        console.log("get weekly data successful");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const getThreshold = async () => {
    try{
        const res = await apiClient.get(`/threshold/${device}`);
        console.log("get threshhold successful");
        return res.data;
    }catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const postThreshold = async (low, high) => {
    try {
      const response = await apiClient.post("/threshold", {
        low: low,
        high: high,
        deviceId: device
      });
      return response.data
    } catch (error) {
        console.error('Error sending threshold:', error);
        throw error; 
    }
}

export default { dailyData, weeklyData, getThreshold, postThreshold}

