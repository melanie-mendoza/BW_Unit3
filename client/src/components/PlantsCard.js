import React from 'react';

const PlantsCard = props => {
  return (
    <div className='plants-card' key={props.id}>
      <h2>Nickname: {props.nickname}</h2>
      <p>Species: {props.species}</p>
    </div>
  );
};
export default PlantsCard;