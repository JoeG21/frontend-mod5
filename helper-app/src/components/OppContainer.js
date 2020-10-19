import React, { Component } from 'react';
import SideBar from './SideBar'
import Content from './Content'

class OppContainer extends Component {

    state = {
        opps: [],
        shelters: [],
        selShelter: null
    }

    componentDidMount () {
        this.getShelters()
        this.getOpps()
    }

   getShelters = () => {
        fetch('http://localhost:3000/shelters')
        .then(res => res.json())
        .then(shelters => this.setState({
            ...this.state,
            shelters: shelters
        }))
    }

    getOpps = () => {
        fetch('http://localhost:3000/opps')
        .then(res => res.json())
        .then(opps=> this.setState({
            ...this.state,
            opps: opps
        }))
    }

    selShelter = (props) => {
        this.setState({
            selShelter: props
        })
    }


    render() {
        return (
            <div className='opp-con'>
                <SideBar shelters={this.state.shelters} selShelter={this.selShelter} />
                <Content opps={this.state.opps} selShelter={this.state.selShelter} />
            </div>
        )
    }
}

export default OppContainer