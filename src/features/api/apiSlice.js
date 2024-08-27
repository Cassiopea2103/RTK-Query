import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = "http://localhost:3500" ; 

export const apiSlice = createApi (
    {
        reducerPath : 'api' , 
        baseQuery : fetchBaseQuery ( { baseUrl : API_URL } ) , 
        endpoints : ( builder ) => (
            {
                // fetch todos : 
                fetchTodos : builder.query (
                    {
                        query : () => '/todos' 
                    }
                )
            }
        )
    }
)

export const { useFetchTodosQuery } = apiSlice ; 