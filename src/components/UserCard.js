import React from 'react';

const UserCard = (props) => {
    return(
        <div className="usercard">
        <img src={props.user.avatar_url} alt='avatar'>
        </img>
        <div className='user-bio'>
        {props.user.name} - <span><a href={props.user.html_url}>{props.user.login}</a></span>
        
        </div>
        </div>
    )
}

export default UserCard