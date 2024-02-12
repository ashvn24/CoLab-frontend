import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";

export const UserStatus = async(id,access)=>{
    try {

        const jwtToken = access

        const res = await axios.post(`${API}/admin/allUsers/`,{
            user_id: id,
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