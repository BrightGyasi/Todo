import React, {useState} from "react";

function TodoListApp() {
    // Task todo list state
    const [input, setInput] = useState ([]);
    
    // Temporary state
    const [newInput, setNewInput] = useState('');
    const [updateData, setUpdateData] = useState('');
  
    
    // Add todo
    const addTodo = () => {
      if (newInput) {
        //  e.preventDefault();
        //  e.addTodo();
        let num = input.length + 1;
        let newEntry = {id: num, title: newInput, status: false}
        setInput([...input, newEntry])
        
      }
      setNewInput('');
      }
  
    // Delete todo
    const deleteTodo = (id) => {
      let newTasks = input.filter(task => task.id !== id)
      setInput(newTasks);
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
      let filterRecords = [...input].filter(task => task.id !== updateData.id)
      let updatedObject = [...filterRecords, updateData]
      setInput(updatedObject);
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
                onChange={(e) => editTodo(e)}
              />
                {/* submit button */}
                <button type='button' onClick={()=>{updateTodo(); addTodo()}} id='submitBtn' >Update</button> 
                </form>
              
                {/* line to divide the form and list */}
                <div className='rectangle'></div>
                

            </>
  
            
            ) : (
                  <>
                  <form className='todo-form'>
                  <input type="text" id='enterTodo' name="text" placeholder="Enter your todo"  value={newInput}
                    onChange={ (e) => setNewInput(e.target.value)}
                  />
                  {/* submit button */}
                  <button type='button' onClick={()=>{updateTodo(); addTodo()}} id='submitBtn' >Submit</button> 
                  </form>
  
                  {/* line to divide the form and list */}
                  <div className='rectangle'></div>
                  
                  </>

                 
                )

                }

          
  
        {/* to display todo list */}
        
        {input && input
          
          .sort((a,b) => a.id > b.id? 1:-1 )
          .map((task, index) => {
            return(
              <React.Fragment key={task.id}>
                <div className='todo-list'>
                  <p>{task.title}</p>
  
                  <div className="Btns">
                  <button className='editBtn' onClick={() => setUpdateData({id: task.id, title: task.title})}><span>Edit</span></button>
                  <button className='deleteBtn' onClick={()=>deleteTodo(task.id)}><span>Delete</span></button>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        }
      
      
      </div>
  
    );
  }
  
  
  export default TodoListApp;
  