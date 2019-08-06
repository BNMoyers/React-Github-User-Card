import React from 'react';
import { Card } from 'semantic-ui-react'

import '../Card.css' 

const UserCard = (props) => {
   return (
       <Card className = 'frame'>
           <img id='polaroid' src={props.userData.avatar_url} alt='avatar'/>
         <Card.Content>
             <Card.Header>{props.userData.name} </Card.Header>  
             <Card.Meta>- {props.userData.login}</Card.Meta>
         <Card.Description>Blog: {props.userData.blog}
         <p> Location: {props.userData.location}</p>
         </Card.Description>
        </Card.Content>

         <p>Followers: {props.userFollowers.map(
             follower => {
                 return <div><img width='50' height='50' src={follower.avatar_url} alt='followers' />
                        <p>{follower.login} - {follower.name}</p>  </div>
             }
         )}</p>
         
         
       </Card>
   )

}

export default UserCard;