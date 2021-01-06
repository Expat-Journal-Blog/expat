import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://dtebo-expatbackend.herokuapp.com",
        headers: {
            Authorization:  `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        
    });
};