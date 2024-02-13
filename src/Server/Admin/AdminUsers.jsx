import axios from "axios";
import { API } from "../../ApiPoints/UserApi/UserApi";
import {axiosInstance} from "../utils/axiosInstance";

export const listUserslist = async()=>{
    try {

        // const jwtToken = access
        const res = await axiosInstance.get(`/admin/allUsers/`);
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