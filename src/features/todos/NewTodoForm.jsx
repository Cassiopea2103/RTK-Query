import { useState } from 'react' ; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faUpload } from '@fortawesome/free-solid-svg-icons'; 

import { useCreateTodoMutation } from '../api/apiSlice';

const NewTodoForm = () => {

    const [ createTodo ] = useCreateTodoMutation () ;

    // temporary state : 
    const [ title , setTitle ] = useState ( '' ) ; 
    const onTitleChange = e => setTitle ( e.target.value ) ; 

    const handleSubmit = ( e ) => {
        e.preventDefault () ; 
        createTodo ( { userId : 1 , title : title , completed : false })
        setTitle ('') ; 
    }

    return (
        <form onSubmit={ handleSubmit }>

            <label htmlFor="new-todo">Title : </label>
            <div className="new-todo">
                <input 
                    type="text" 
                    required 
                    placeholder="Enter a new todo..."
                    value = { title }
                    onChange = { onTitleChange } 
                />
            </div>


            <button className='submit'>
                <FontAwesomeIcon icon = { faUpload }/>
            </button>
        </form>
    )
}


export default NewTodoForm