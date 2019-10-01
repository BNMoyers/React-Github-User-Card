import React from "react";
import Axios from "axios";

class FollowerList extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    Axios.get("https://api.github.com/users/BNMoyers/followers")
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log("error: ", err));
  }
  render() {
    return (
      <div className="followers">
        {this.state.followers.map(follower => (
          <div className="followercard">
            <img src={follower.avatar_url} alt="avatar" />
            <span className="follower-name">
              <a href={follower.url}>{follower.login}</a>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default FollowerList;
