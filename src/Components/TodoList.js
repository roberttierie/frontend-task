import React, {useState} from 'react'
import Todo from './Todo';

const TodoList= ( {todos, toggleComplete, removeTodo })=> {
    // const todosData = [
    //     {
    //       name: "Learn React",
    //       isComplete: false,
    //     },
    //     {
    //       name: "Learn Redux",
    //       isComplete: false,
    //     },
    //     {
    //       name: "Build an app",
    //       isComplete: false,
    //     },
    //   ];

      
    return(
        <div className="grid grid-cols-2 gap-x-48">
            <div className="flex flex-col space-y-4">
                <div>
                    <h1 className="text-xl font-semibold">Tasks TODO</h1>

                </div>
            {/* <div className="flex flex-col space-y-2 items-center">
                {todosData
                .filter((task) => !task.isComplete)
                .map((task) => (
                    <div className="flex space-x-4">
                    <div>{task.name}</div>
                    <div>
                        <input type="checkbox" checked={false} />
                    </div>
                    </div>
                ))}
            </div> */}
            <div>
                {todos.filter((task ) => !task.isComplete).slice(0, 5).map(todo => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
                ))}
            </div>
            {/* <div>
                {todos.filter((task) => !task.isComplete).map(todo=> {
                    if(todo.length < 5);
                    return(
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />)
                })}
            </div> */}
            </div>
            <div className="flex flex-col space-y-4">
            <div>
                <h1 className="text-xl font-semibold">Tasks Done</h1>
            </div>
            <div>
                {todos.filter((task) => task.isComplete).map(todo=> (
                    <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
                ))}
            </div>
            </div>
        </div>
)}
export default TodoList;