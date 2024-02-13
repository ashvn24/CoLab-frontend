import { axiosInstanceUser } from "../utils/axiosInstance";

export const UserProfile = async()=>{
    try {

        const res = await axiosInstanceUser.get(`/profile/`,);
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