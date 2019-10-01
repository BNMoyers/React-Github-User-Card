import React from "react";

const UserCard = props => {
  return (
    <div className="usercard">
      <img src={props.user.avatar_url} alt="avatar"></img>
      <div className="user-bio">
        <div className="name">
          {props.user.name} -{" "}
          <span>
            <a href={props.user.html_url}>{props.user.login}</a>
          </span>
        </div>
        <div className="info">
          <p>-- {props.user.company}</p>
          <p>-- from {props.user.location}</p>
          <p>
            <a href={props.user.blog}>Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
