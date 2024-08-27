import { faTrash  } from '@fortawesome/free-solid-svg-icons'; 
import { useUpdateTodoMutation , useDeleteTodoMutation } from '../api/apiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleTodo = ( { todo } ) => {

    const [ updateTodo ] = useUpdateTodoMutation () ; 
    const [ deleteTodo ] = useDeleteTodoMutation () ; 

    return (
        <article>
            <div className="todo">
                <input 
                    type="checkbox" 
                    id = { todo.id }
                    checked = { todo.completed } 
                    onChange = { () => updateTodo ({...todo , completed : !todo.completed })}
                />
                <label htmlFor={todo.id}>{ todo.title }</label>
            </div>

            <button 
                className='trash' 
                onClick = { () => deleteTodo ( { id : todo.id } ) }
            >
                <FontAwesomeIcon icon = { faTrash } />
            </button>
        </article>
    )
}

export default SingleTodo ; 