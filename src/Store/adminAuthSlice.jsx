import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { initialstate } from "./rootStore";
import { AdminResponse } from "../Server/Admin/AdminLogin";




// -----MIDDLEWARES---

// user
export const LoginAdmin = createAsyncThunk('user/LoginAdmin', async ({ email, password }) => {
    const authdata = await AdminResponse(email, password);
    return authdata
});

// get access from refresh
// export const GetAccess = createAsyncThunk('user/GetAccess', async ({ refresh }) => {
//     const authdata = await UserAccess(refresh)
//     return authdata
// })




const AdminauthSlice = createSlice({
    name: 'auth',
    initialState: initialstate.AdminToken,
    reducers: {
        AdminLogout: (state) => {
            return initialstate.AdminToken;
        },
        Success: (state, action) => {
            return {
                ...state,
                registerSuccess: action.payload.message,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginAdmin.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    return {
                        access: action.payload.access,
                        refresh: action.payload.refresh,
                        user: action.payload.user,
                        type: 'user',
                        is_authenticated: true,
                        is_superuser: true,
                        registerSuccess: null,
                    };
                }
            })
            // .addCase(GetAccess.fulfilled, (state, action) => {
            //     if (action.payload) {
            //         return {
            //             ...state,
            //             access: action.payload.access,
            //             refresh: action.payload.refresh,
            //             type: 'user',
            //             is_authenticated: true,
            //             registerSuccess: null,
            //         }
            //     }
            // })
    },
});

export const { AdminLogout, Success } = AdminauthSlice.actions;
export default AdminauthSlice.reducer