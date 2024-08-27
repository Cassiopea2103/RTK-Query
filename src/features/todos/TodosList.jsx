import NewTodoForm from './NewTodoForm' ; 

import { useFetchTodosQuery } from '../api/apiSlice';

const TodosList = () => {

    const {
        data : todos , 
        isLoading , 
        isSuccess , 
        isError , 
        error 
    } = useFetchTodosQuery () ; 

    let content ; 

    if ( isLoading ) content = <p>Loading data ...</p>
    else if ( isSuccess ) content = JSON.stringify ( todos ) 
    else if ( isError ) content = <p>{ error}</p>

    return (
        <main>
            <h1>Todos List</h1>
            <NewTodoForm />

            { content }
        </main>
    )

}

export default TodosList ; 