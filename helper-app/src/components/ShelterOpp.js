import React from 'react';
import SelShelterOppsCard from './SelShelterOppsCard'

const ShelterOpp = (props) => {
    return(
        <div className='shelter-opp'>
            <div className='shelter-opp-name'>
                <h3>{props.selShelter.name}</h3>
            </div>

            <div className='shelter-opp-location'>
                <h4>Address: {props.selShelter.location}</h4>
            </div>

            <div className='shelter-opp-phone'>
                <h5>Phone: {props.selShelter.phone}</h5>
            </div>

            <div className='shelter-opps'>
                {props.selShelterOpps.map(opp => <SelShelterOppsCard key={opp.id} opp={opp} />)}
                        {/* {props.selShelterOpps.map(opp => opp.title)} */}
            </div>
        </div>
    )
};

export default ShelterOpp;