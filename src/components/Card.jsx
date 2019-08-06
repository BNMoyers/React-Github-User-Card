import React from 'react';


const Card = (props) => {
   return (
       <div>
           <img src={props.userData.avatar_url} alt='avatar'/>
         <h2>{props.userData.login} - {props.userData.name}</h2>  
         <p>Blog: {props.userData.blog}</p>
         <p> Location: {props.userData.location}</p>
       </div>
   )

}

export default Card;