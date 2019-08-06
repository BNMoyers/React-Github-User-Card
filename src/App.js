import React from 'react';
import CardList from './components/CardList'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: []
  };
}

componentDidMount() {
  this.getUsers();
};

getUsers = () => {
  axios
  .get('https://api.github.com/users/BNMoyers')
  .then(res => this.setState({user: res.data}))
  .catch(err => {console.log('error', err);});
};
  }
  
  render(){  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <CardList user={this.user}/>
    </div>
  );
    
}

export default App;
