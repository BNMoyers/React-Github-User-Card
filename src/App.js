import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state={
    user: {}
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/BNMoyers')
    .then(res => this.setState({user: res.data}))
    .catch(err => console.log('error: ', err))
  }

  render(){
  return (
    <>
    <div className="corkboard">
      <UserCard user={this.state.user} />
      <FollowerList />
    </div>
    <div className='credits'>resources from: <a href="https://unsplash.com/@dvandijk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David van Dijk</a>,<a href="https://www.freepik.com/free-photos-vectors/frame">Layerace</a></div>
  </>
  );
}
}
export default App;
