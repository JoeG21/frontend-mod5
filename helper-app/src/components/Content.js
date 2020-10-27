import React from 'react';
import OppsList from './OppsList'
import ShelterCard from './ShelterCard'

const Content = (props) => {

    // console.log(props.opps)
    return (
      <div className='content'>
        {
            props.selShelter !== null ? 
                <ShelterCard 
                selShelter={props.selShelter} selShelterOpps={props.selShelterOpps} />
              
            : 
                <OppsList opps={props.opps} setUserOpps={props.setUserOpps} removeUserOpp={props.removeUserOpp} />
        }
      </div>
    );
}

export default Content