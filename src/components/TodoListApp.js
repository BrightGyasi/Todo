import React, {useState} from "react";

function TodoListApp() {
    // Task todo list state
    const [todo, setTodos] = useState ([]);
    
    // Temporary state
    const [newTodo, setNewTodo] = useState('');
    const [updateData, setUpdateData] = useState('');
  
    
    // Add todo
    const addTodo = () => {
      if (!newTodo) {
        alert("Please enter an item.");
        return;
      }
      
      let num = todo.length + 1;
      let newEntry = {id: num, title: newTodo}
      setTodos([...todo, newEntry]) 

      setNewTodo('');
      }
  
    // Delete todo
    const deleteTodo = (id) => {
      let newTasks = todo.filter(task => task.id !== id)
      setTodos(newTasks);
      }
    
    // Edit todo
    const editTodo = (e) => {
      let newEntry = {
        id: updateData.id,
        title: e.target.value
      }
       setUpdateData(newEntry);
      }
  
    // Update todo
    const updateTodo = () => {
      let filterRecords = [...todo].filter(task => task.id !== updateData.id)
      let updatedObject = [...filterRecords, updateData]
      setTodos(updatedObject);
      setUpdateData('');
      }
      
  
  
  
  
    return (
      <div>
        <h1>To Do List</h1>
  
        {/* form */}
        
          {/* Update task - edit task todo */}
          {updateData && updateData ?(
            <>
              <form className='todo-form'>
              <input type="text" id='enterTodo' name="text" value={updateData && updateData.title}
                onChange={(e) => editTodo(e)}
              />
                {/* submit button */}
                <button type='button' onClick={()=>{updateTodo()}} id='submitBtn' >Update</button> 
                </form>
              
                {/* line to divide the form and list */}
                <div className='rectangle'></div>
                

            </>
  
            
            ) : (
                  <>
                  <form className='todo-form'>
                  <input type="text" id='enterTodo' name="text" placeholder="Enter your todo"  value={newTodo}
                    onChange={ (e) => setNewTodo(e.target.value)}
                  />
                  {/* submit button */}
                  <button type='button' onClick={()=>{addTodo()}} id='submitBtn' >Submit</button> 
                  </form>
  
                  {/* line to divide the form and list */}
                  <div className='rectangle'></div>
                  
                  </>

                 
                )

                }

          
  
        {/* to display todo list */}
        
        {todo && todo
          
          .sort((a,b) => a.id > b.id? 1:-1 )
          .map((task, index) => {
            return(
              <React.Fragment key={task.id}>
                <div className='todo-list'>
                  <li>{task.title}
                  <div className="editDelete-btns">
                  <button className='editBtn' onClick={() => setUpdateData({id: task.id, title: task.title})}><span>Edit</span></button>
                  <button className='deleteBtn' onClick={()=>deleteTodo(task.id)}><span>Delete</span></button>
                  </div>
                  </li>
                </div>
              </React.Fragment>
            )
          })
        }
      
      
      </div>
  
    );
  }
  
  
  export default TodoListApp;
  