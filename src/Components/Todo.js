import React from 'react'

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckbox() {
        toggleComplete(todo.id)
    }

    function handleRemove() {
        removeTodo(todo.id);
    }


    return (
        <div className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-4">
                    <div>{todo.name}</div>
                    <div>
                        <input type="checkbox" onClick={handleCheckbox} />
                    </div>
                    <button onClick={handleRemove}>
                        X
                    </button>
                    </div>
            
        </div>
    )
}

export default Todo
