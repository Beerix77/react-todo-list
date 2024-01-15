import { useState } from 'react';

const initialList = [
  {
    description: 'Learn React',
    completed: true
  },
  {
    description: 'Learn Solidity',
    completed: false
  },
]


function TodoList() {

  const [newItemDescription, setNewItemDescription] = useState( '' );

  const [taskItems, setTaskItems] = useState(initialList);


  function handleInput( ev ) {
    console.log('form input:', ev.target.value);
    setNewItemDescription(ev.target.value);
  }

  function handleSubmit( ev ) {
    ev.preventDefault();
    console.log('form submitted:', newItemDescription);

    const newTaskItems = taskItems.slice();   // no args makes a full copy

    newTaskItems.push({
      description: newItemDescription,
      completed: false
    });

    setTaskItems( newTaskItems );
     
  }



  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {taskItems.map( item => <li>{item.description}</li>)}  
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} placeholder="Enter description" />
        <button>Add new Item</button>
      </form>
      <p>{newItemDescription}</p>
    </>
  )
  
   

} // end of TodoList


export default TodoList; 