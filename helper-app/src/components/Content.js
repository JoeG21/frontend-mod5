import React from 'react';
import OppList from './OppList'
import ShelterOpp from './ShelterOpp'

const Content = (props) => {
    return (
      <div className='content'>
        {
            props.selShelter !== null ? 
                <ShelterOpp 
                selShelter={props.selShelter} /> 
            : 
                <OppList opps={props.opps} />
        }
      </div>
    );
}

export default Content