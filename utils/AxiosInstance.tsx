import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./Urls";


export const getAccessToken = async () => {
    let token;
    const localStorage = await AsyncStorage.getItem('persist:root');
    if (localStorage) {
        const data = JSON.parse(localStorage);
        const userData = data?.userReducer;
        if (userData) {
            const allUserData = JSON.parse(userData);
            token = allUserData?.user?.jwtToken;
            setAuthToken(token);
        }
    }
};

getAccessToken();

// Function to set the Bearer token in the Authorization header
export const setAuthToken = (token: string) => {
    if (token) {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common.Authorization;
    }
};

export const instance = axios.create({
    baseURL: BASE_URL, 
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});
