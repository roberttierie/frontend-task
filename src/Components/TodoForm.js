import React, {useState,useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";


const formSchema = yup.object().shape({
    name: yup.string().required('task is required')
    
})


const TodoForm = ({ addTodo }) => {
const [todo, setTodo] = useState({
    id:'',
    name:"",
    isComplete: false,
})

const [errors, setErrors] = useState({
    id:'',
    name:"",
    isComplete: false,
})

const [buttonDisabled, setButtonDisabled] = useState(true);



useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(todo).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [todo]);

const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
        console.log(errors)
      });
  };


function handleInputChange(e) {
    validateChange(e);
    setTodo({...todo, name:e.target.value});

}


function handleSubmit(e) {
    e.preventDefault();
    addTodo({...todo, id:uuidv4()});
    setTodo({...todo, name: ''});
}



    return (
      <div className="flex flex-col items-center space-y-12">
        <div className="flex space-x-4 items-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              value={todo.name}
              onChange={handleInputChange}
              type="text"
              className="border-blue-200 border-2 rounded-lg p-2"
            />
            <p className="error">{errors.name}</p>
          </div>
          <div>
            <button disabled={buttonDisabled} className="p-2 bg-blue-200 hover:bg-blue-400 hover:text-white rounded-lg border-2 border-blue-200 hover:border-blue-400" >
              Add task
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  };

  export default TodoForm;