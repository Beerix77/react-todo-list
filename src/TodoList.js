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

  function handleInput( ev ) {
    console.log('form input:', ev.target.value);
    setNewItemDescription(ev.target.value);
  }

  function handleSubmit( ev ) {
    ev.preventDefault();
    console.log('form submitted:', newItemDescription);
  }



  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {initialList.map( item => <li>{item.description}</li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} placeholder="Enter description" />
        <button>Add new Item</button>
      </form>
      {newItemDescription}
    </>
  )
  
   

} // end of TodoList


export default TodoList; 