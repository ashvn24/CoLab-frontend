import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";


export const VerifyUser = async(otp)=>{
    const api=API
    const Otp = {otp}
    const headers = {'Content-Type': 'application.json'};
    try {
        const response = await axios.post(`${api}/verify/`,
            Otp,
            headers
        );
        return response.data;
    } catch (error) {
        if (error.response.error) {
            return error.response.error;
        } else {
            return error;
        }
    }
}