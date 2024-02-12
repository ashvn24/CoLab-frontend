import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";

export const listUserslist = async(access)=>{
    try {

        const jwtToken = access

        const res = await axios.get(`${API}/admin/allUsers/`,{
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });
        if (res.status === 200) {
            // Assuming the response contains users data
            return res;
        } else {
            // Handle unexpected status code
            console.error('Unexpected status code:', res.status);
            return res.statusText;
        }

    } catch (error) {
        return error
    }
}