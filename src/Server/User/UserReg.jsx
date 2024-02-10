import axios from "axios";

const API = 'http://127.0.0.1:8000/api';

export const UserRegister = async (username, email, role, password ) =>{
    const newUser ={
        username, email, role, password 
    };
    console.log(newUser);
    const headers = {'Content-Type': 'application.json'};
    try {
        const response = await axios.post(`${API}/register/`,
            newUser,
            headers
        );
        return response.data;
    } catch (error) {
        if (error.response.data.error) {
            return error.response.data.error;
        } else {
            return error;
        }
    }
}
