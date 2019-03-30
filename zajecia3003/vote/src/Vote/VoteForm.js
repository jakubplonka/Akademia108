import React from 'react';

const VoteForm = (props) => {
  return (
    <>
    <div className="form">
      <form onSubmit={props.addNewUserReact}>
        <input 
        type="text"
        onChange={props.changeUserNameReact}
        value={props.value}
        />
        <button >Vote</button>
      </form>
      <form onSubmit={props.addNewUserAngular}>
        <input 
        type="text"
        onChange={props.changeUserNameAngular}
        value={props.value}
        />
        <button >Vote</button>
      </form>
    </div>
  </>

  )
}

export default VoteForm;
