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
    <div className='credits'>
      <h2>resources from:</h2>
        <ul>
         <li>
           <span>Background Image:</span></li><li> <a href="https://unsplash.com/@dvandijk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David van Dijk</a>,
         </li>
         <li>
           <span>Corkboard:</span></li><li><a href="https://www.freepik.com/free-photos-vectors/frame">Layerace</a>,
         </li>
          <li>
            <span>Polaroids and Paper: </span></li><li><a href="https://www.freepik.com/free-photos-vectors/technology">freepik</a>,
          </li>
          <li><span>Index Card:</span></li><li> <a href="https://www.freepik.com/free-photos-vectors/frame">kstudio</a>
          </li>
          </ul>
          </div>
  </>
  );
}
}
export default App;
