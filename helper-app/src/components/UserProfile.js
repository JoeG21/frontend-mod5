import React, { Component } from 'react';

class UserProfile extends Component {





    render() {
        return (
            <div className='user-profile'>
                <h1>userpage </h1>
                <p>{this.props.user.username}</p>
                {/* <h2>{this.props.user}</h2> */}
                {console.log(this.props.user.username)}
            </div>
        )
    }


}

export default UserProfile;