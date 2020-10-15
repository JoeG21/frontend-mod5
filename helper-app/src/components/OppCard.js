import React from 'react';
 
const OppCard = (props) => {

    return (
        <div className='opp-card'>

            <div className='opp-title'>
                Title: {props.opp.title}
            </div>

            <div className='opp-des'>
                Description: {props.opp.des}
            </div>

            <div className='opp-date'>
                Date: {props.opp.date}
            </div>

            <div className='opp-howlong'>
                Length: {props.opp.howlong}Hr
            </div>
            <br></br>
        </div>
    )
}

export default OppCard