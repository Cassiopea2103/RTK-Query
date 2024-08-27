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
                ) , 
                // new todo : 
                createTodo : builder.mutation (
                    {
                        query : ( requestData ) => (
                            {
                                url : 'todos' , 
                                method : 'POST' , 
                                body : requestData 
                            }
                        )
                    }
                ) , 
                // update : 
                updateTodo : builder.mutation (
                    {
                        query : ( requestData ) => (
                            {
                                url : `/todos/${ requestData.id }`, 
                                method : 'PUT' ,
                                body : requestData 
                            }
                        )
                    }
                ) ,
                deleteTodo : builder.mutation (
                    {
                        query : ( { id } ) => (
                            {
                                url : `/todos/${ id }` , 
                                method : 'DELETE' , 
                                body : id 
                            }
                        )
                    }
                )
            }
        )
    }
)

export const { 
    useFetchTodosQuery , 
    useCreateTodoMutation , 
    useUpdateTodoMutation , 
    useDeleteTodoMutation
} = apiSlice ;  