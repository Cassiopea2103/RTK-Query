import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = "http://localhost:3500" ; 

export const apiSlice = createApi (
    {
        reducerPath : 'api' , 
        baseQuery : fetchBaseQuery ( { baseUrl : API_URL } ) , 
        tagTypes : [ 'todos' ] ,
        endpoints : ( builder ) => (
            {
                // fetch todos : 
                fetchTodos : builder.query (
                    {
                        query : () => '/todos' , 
                        providesTags : [ 'todos' ]
                    }
                ) , 
                // new todo : 
                createTodo : builder.mutation (
                    {
                        query : ( requestData ) => (
                            {
                                url : '/todos' , 
                                method : 'POST' , 
                                body : requestData 
                            }
                        ) , 
                        invalidatesTags : [ 'todos' ]
                    }
                ) , 
                // update : 
                updateTodo : builder.mutation (
                    {
                        query : ( requestData ) => (
                            {
                                url : `/todos/${requestData.id}`, 
                                method : 'PUT' ,
                                body : requestData 
                            }
                        ) , 
                        invalidatesTags : [ 'todos' ] , 
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
                        ) , 
                        invalidatesTags : [ 'todos' ]
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