import './TodoList.css'
import TaskList from './TaskList';

function TodoList() {
    return (
      <div className="TodoList">
        <div className='row'>
        <form>
            <input className='inputTask' placeholder="Enter your task here" />
            
          </form>
          <TaskList taskName='Clean up the bedroom'/>
          <TaskList taskName='Buy milk'/>
          <TaskList taskName='Jogging'/>
          <TaskList taskName='Learn React'/>
          <TaskList taskName='Doing Exercise'/>
        </div>
        <div className='row'>
        5 tasks left!
        MindX todolist
        
        </div>
        </div>
    );
  }
  
  export default TodoList;