import React from 'react';
import OppList from './OppList'
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
                <OppList opps={props.opps} />
        }
      </div>
    );
}

export default Content