import React from 'react';
import { Card } from 'semantic-ui-react'

import '../Card.css' 

const UserCard = (props) => {
   return (
       <Card >
          <div id = 'frame'> <img id='polaroid' src={props.userData.avatar_url} alt='avatar'/>
         <Card.Content>
             <Card.Header>{props.userData.name} </Card.Header>  
             <Card.Meta>- {props.userData.login}</Card.Meta>
         <Card.Description>Blog: {props.userData.blog}
         <p> Location: {props.userData.location}</p>
         </Card.Description>
        </Card.Content>
            </div>
         <p id='followerGrid'> {props.userFollowers.map(
             follower => {
                 return <div id='follower'><img width='100' height='100' src={follower.avatar_url} alt='followers' />
                        <p>{follower.login}</p>  </div>
             }
         )}</p>
         
         
       </Card>
   )

}

export default UserCard;