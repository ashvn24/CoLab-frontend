
import {axiosInstance} from "../utils/axiosInstance";

export const UserStatus = async(id)=>{
    try {

        const user_id ={id}
        const res = await axiosInstance.post(`/admin/allUsers/`,user_id);
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