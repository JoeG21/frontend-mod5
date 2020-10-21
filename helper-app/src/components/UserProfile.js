import React, { Component } from 'react';

class UserProfile extends Component {





    render() {
        return (
            <div className='user-profile'>
                <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                <h2>Username: {this.props.user.username}</h2>
            </div>
        )
    }
}

export default UserProfile;