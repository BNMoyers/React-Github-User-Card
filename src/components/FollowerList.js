import React from 'react';
import FollowerCard from './FollowerCard';

class FollowerList extends React.Component {
    constructor(){
        super();
        this.state=[]
    }

    componentDidMount(){
        //axios call for followers goes here
    }

    render(){
        return(
            <div></div>
            //this is where the cards will be mapped over and displayed
        );
    }

}