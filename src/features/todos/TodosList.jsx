import NewTodoForm from './NewTodoForm' ; 
import SingleTodo from './SingleTodo';

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
    else if ( isSuccess ) {
        content = todos.map ( todo => { return <SingleTodo todo = { todo } key = { todo.id }/> } )
    }
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