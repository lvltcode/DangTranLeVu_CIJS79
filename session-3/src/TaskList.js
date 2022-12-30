

import './TaskList.css'

const TaskList = (props) => {
    return (
      <div className="flex justify-between items-center mt-6">
        <form>
        <input className='mr-4' type="radio"/>
        <label>{props.taskName}</label>
        </form>
        </div>
    );
  }
  
  export default TaskList;