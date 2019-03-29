import React from 'react';

const List = (props) => {

  let user = props.user.map(usr => (
    <li key={usr.key}>{usr.name}</li>
  ));
  return(
    <ul>
      {user}
    </ul>
  )
}

export default List;