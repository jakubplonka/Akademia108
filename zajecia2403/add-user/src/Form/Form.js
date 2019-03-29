import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.addNewUser}>
      <input 
      type="text"
      onChange={props.changeUserName}
      value={props.value}
      />
      <button >Add user</button>
    </form>
  )
}

export default Form;