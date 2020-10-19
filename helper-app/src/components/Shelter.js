import React from 'react';

const Shelter = (props) => (
  <div className='shelter'>
    <li onClick={() => props.selShelter(props.shelter)}>
      <h2>{props.shelter.name}</h2>
    </li>
  </div>
);

export default Shelter;