import React from 'react';
import axios from 'axios';
import UserCard from './components/Card';
import 'semantic-ui-css/semantic.min.css'

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
      
      <UserCard userData={this.state.userData}
            userFollowers={this.state.userFollowers}/>
    </div>
  );
    
}
}

export default App;
