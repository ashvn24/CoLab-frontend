import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";

    

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
