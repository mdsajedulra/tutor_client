import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.BACKEND_URL, 
        credentials: "include",
        prepareHeaders: (headers, {getState})=>{
            const token = (getState() as RootState).auth.token;
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    
    endpoints: ()=> ({})
})