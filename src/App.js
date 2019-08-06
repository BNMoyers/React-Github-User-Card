import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
      userFollowers: []
  };
}

componentDidMount() {
  this.getUsers();
  this.getFollowers();
};

getUsers = () => {
  axios
  .get('https://api.github.com/users/BNMoyers')
  .then(res => this.setState({userData: res.data}))
  .catch(err => {console.log('error', err);});
};
  
  
getFollowers = () => {
  axios
  .get('https://api.github.com/users/BNMoyers/followers')
  .then(res => this.setState({userFollowers: res.data}))
  .catch(err => {console.log('error', err);});
};


  render() {  
  return (
    <div className="App">
      <header className="App-header">
     {console.log(this.state.userFollowers)}
      </header>
      <Card userData={this.state.userData}
            userFollowers={this.state.userFollowers}/>
    </div>
  );
    
}
}

export default App;
