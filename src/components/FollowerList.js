import React from 'react';
import FollowerCard from './FollowerCard';
import Axios from 'axios';

class FollowerList extends React.Component {
    constructor(){
        super();
        this.state={
            followers: []
        }
    }

    componentDidMount(){
        Axios
        .get('https://api.github.com/users/BNMoyers/followers')
        .then(res => this.setState({followers: res.data}))
        .catch(err => console.log('error: ', err))
    }

    render(){
        return(
            <div>
                {this.state.followers.map(follower => <div>{follower.login}</div>)}
            </div>
            
        );
    }

}

export default FollowerList