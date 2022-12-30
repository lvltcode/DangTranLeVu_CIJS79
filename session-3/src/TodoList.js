import './TodoList.css'
import TaskList from './TaskList';

function TodoList() {
  const tasks = ["Clean up bedroom", "Buy some milk", "Jogging", "Learn React", "Doing Exercise"];
    return (
      <div className="TodoList">
        <div className='row'>
        <form>
            <input className='inputTask border-b border-b-black outline-none py-1 px-3 text-xl w-full mb-4' placeholder="Enter your task here" />
            
          </form>
          {tasks.map(item => {
        return <TaskList key={item} taskName={item} />
      })}
          {/* <TaskList taskName='Clean up the bedroom'/>
          <TaskList taskName='Buy milk'/>
          <TaskList taskName='Jogging'/>
          <TaskList taskName='Learn React'/>
          <TaskList taskName='Doing Exercise'/> */}
        </div>
        <div className="flex justify-between items-center mt-6">
        <div>{tasks.length} tasks left!</div>
        <div>MindX todolist</div>
      </div>
        </div>
    );
  }
  
  export default TodoList;