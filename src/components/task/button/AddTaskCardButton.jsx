import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const AddTaskCardButton = ({taskCardsList,setTaskCardsList}) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    // タスクカードの追加
    setTaskCardsList([...taskCardsList,{
      id:taskCardId,
      draggableId:`item-${taskCardId}`
    }]);
  };

  return (
    <div className='addTaskCardButtonArea'>
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
