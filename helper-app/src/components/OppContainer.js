import React, { Component } from 'react';
import OppCard from './OppCard'

class OppContainer extends Component {

    state = {
        opps: []
    }

    componentDidMount () {
        fetch('http://localhost:3000/opps')
        .then(res => res.json())
        .then(opps => this.setState({
            opps: opps
        }))
    }



    render() {
        return (
            <div className='opp-con'>
                {
                    this.state.opps.map(opp => <OppCard opp={opp} key={opp.id} />)
                }
            </div>
        )
    }
}

export default OppContainer