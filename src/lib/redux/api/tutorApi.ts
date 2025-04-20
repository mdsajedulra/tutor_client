import { baseApi } from "./baseApi";

const tutorApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
    getTutor: builder.query({
        query: () => "/tutor",
    }),
    getTutorById: builder.query({
        query: (id: string) => `/tutor/${id}`,
    })
   })
})


export const {useGetTutorQuery, useGetTutorByIdQuery} = tutorApi