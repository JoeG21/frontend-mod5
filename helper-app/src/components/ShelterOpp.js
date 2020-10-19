import React from 'react';

const ShelterOpp = (props) => {
    return(
        <div className='shelter-opp'>
            <div className='shelter-opp-name'>
                <h3>{props.selShelter.name}</h3>
            </div>

            <div className='shelter-opp-location'>
                <h4>{props.selShelter.location}</h4>
            </div>

            <div className='shelter-opp-phone'>
                <h5>{props.selShelter.phone}</h5>
            </div>

        </div>
    )
};

export default ShelterOpp;