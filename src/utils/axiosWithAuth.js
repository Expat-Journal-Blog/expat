import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://dtebo-expatbackend.herokuapp.com",
        headers: {
            Authorization:  `Basic ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        
    });
};