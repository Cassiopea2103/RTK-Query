import { useState } from 'react' ; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faTrash , faUpload } from '@fortawesome/free-solid-svg-icons'; 

const NewTodoForm = () => {

    // temporary state : 
    const [ title , setTitle ] = useState ( '' ) ; 
    const onTitleChange = e => setTitle ( e.target.value ) ; 

    const handleSubmit = ( e ) => {
        e.preventDefault () ; 
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