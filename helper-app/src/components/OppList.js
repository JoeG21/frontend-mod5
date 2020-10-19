import React from 'react';
import OppCard from './OppCard'


const OppList = (props) => {

    return (
        <div className='side-bar'>
            {props.opps.map(opp => <OppCard key={opp.id} opp={opp} />)}
        </div>
    )
}

export default OppList