

import './TaskList.css'

const TaskList = (props) => {
    return (
      <div className="taskList">
        <form>
        <input type="radio"/>
        <label>{props.taskName}</label>
        </form>
        </div>
    );
  }
  
  export default TaskList;