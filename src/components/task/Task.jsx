import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({index,task,taskList,setTaskList}) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox' key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p className='taskText'>{task.text}</p>
          <button className='taskTrushButton' onClick={()=>handleDelete(task.id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Task
