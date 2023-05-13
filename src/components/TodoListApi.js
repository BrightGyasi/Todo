import React, {useEffect, useState} from "react";
import axios from "axios";


function TodoListApi() {
    // Task todos list state
    const [todos, setTodos] =  useState([]);
    
    // Temporary state
    const [newTodos, setNewTodos] = useState('');
    const [updateData, setUpdateData] = useState('');
  
    //Get todoss
    useEffect(()=>{
          fetchTodo();
      },[]);

      function fetchTodo() {
        axios.get('https://todo-app-nyce.onrender.com/api/v1/todo')
          .then(res => {
            setTodos(res.data.data)
            console.log(res.data)
          })          
          .catch(err => console.log(err))
      }

    // Add todos - post todos to the api
    const addTodos = () => {
      if (!newTodos) {
        alert("Please enter an item.");
        return;
      }
      let newEntry = {todo: newTodos}
      axios.post('https://todo-app-nyce.onrender.com/api/v1/todo', newEntry)
        .then(res => {
        fetchTodo();
      })
      .catch(err => err)
      }
      
  
    // Delete todos
     const deleteTodos = (id) => {
    //   let newTasks = todos.filter(task => task.id !== id)
    //   settodoss(newTasks);

    axios
    .delete(`https://todo-app-nyce.onrender.com/api/v1/todo/id`)
    .then(() => {
      alert("Deleted successfully");
      setTodos(null)
      });
    }
    
    // Edit todos
    const editTodos = (e) => {
      let newEntry = {
        id: updateData.id,
        title: e.target.value
      }
       setUpdateData(newEntry);
      }
  
    // Update todos
    const updateTodos = () => {
      let filterRecords = [...todos].filter(task => task.id !== updateData.id)
      let updatedObject = [...filterRecords, updateData]
      setTodos(updatedObject);
      setUpdateData('');
      }
      
  
  
  
  
    return (
      <div>
        <h1>To Do List</h1>
  
        {/* form */}
        
          {/* Update task - edit task input */}
          {updateData && updateData ?(
            <>
              <form className='todo-form'>
              <input type="text" id='enterTodo' name="text" value={updateData && updateData.title}
                onChange={(e) => editTodos(e)}
              />
                {/* submit button */}
                <button type='button' onClick={()=>{updateTodos()}} id='submitBtn' >Update</button> 
                </form>
              
                {/* line to divide the form and list */}
                <div className='rectangle'></div>
                

            </>
  
            
            ) : (
                  <>
                  <form className='todo-form'>
                  <input type="text" id='enterTodo' name="text" placeholder="Enter your todos"  value={newTodos}
                    onChange = { (e) => setNewTodos(e.target.value)}
                  />
                  {/* submit button */}
                  <button type='button' onClick={()=>{addTodos()}} id='submitBtn' >Submit</button> 
                  </form>
  
                  {/* line to divide the form and list */}
                  <div className='rectangle'></div>
                  
                  </>

                 
                )

                }

          
  
        {/* to display todos list */}
        
        {!!todos.length && todos
          
          // .sort((a,b) => a.id > b.id? 1:-1 )
        .map((todos) => {
            return(
              <React.Fragment key={todos.id}>
                <div className='todos-list'>
                  <li>{todos.todo}
  
                  
                  <button className='editBtn' onClick={() => setUpdateData({id: todos.id, title: todos.title})}><span>Edit</span></button>
                  <button className='deleteBtn' onClick={()=>deleteTodos(todos.id)}><span>Delete</span></button>
                  
                  </li>
                </div>
              </React.Fragment>
            )
          })
        }
      
      
      </div>
  
    );
  }
  
  
  export default TodoListApi;
  