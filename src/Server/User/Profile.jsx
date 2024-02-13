import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";
import { Profile } from "../../Store/UserSlice";
import { useDispatch } from "react-redux";

export const UserProfile = async(access)=>{
    try {

        const jwtToken = access
        console.log('reached');
        const res = await axios.get(`${API}/profile/`,{
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