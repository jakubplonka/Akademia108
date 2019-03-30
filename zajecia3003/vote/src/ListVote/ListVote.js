import React from 'react';

const ListVote = (props) => {

  let userReact = props.userReact.map(usr => (
    <li key={usr.key}>{usr.name}</li>
  ));
  let userAngular = props.userAngular.map(usr => (
    <li key={usr.key}>{usr.name}</li>
  ));
  return(
    <>
      <ul>
        {userReact}
      </ul>
      <ul>
        {userAngular}
      </ul>
    </>
  )
}

export default ListVote;