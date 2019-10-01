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
    <div className="App">
      <UserCard user={this.state.user} />
      <FollowerList />
    </div>
  );
}
}
export default App;
