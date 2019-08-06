import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: []
  };
}

componentDidMount() {
  this.getUsers();
};

getUsers = () => {
  axios
  .get('https://api.github.com/users/BNMoyers')
  .then(res => this.setState({userData: res.data}))
  .catch(err => {console.log('error', err);});
};
  
  
  render() {  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <Card userData={this.state.userData}/>
    </div>
  );
    
}
}

export default App;
