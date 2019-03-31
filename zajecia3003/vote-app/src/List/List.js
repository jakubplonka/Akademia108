import React from 'react';


const List = (props) => {

  return (
    <ul>
      {props.user.map((el) => {
        return <li key={el.key}>{el.name}</li>
      })}
    </ul>

  )
}

export default List;