import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/Sarah.jpg';
import profile2 from './image/Mariah.jpg';
import profile3 from './image/Salem.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className = 'ui comments'>
            <UserCard>
                Hello my name is Alex, I'm from Chicago
            </UserCard>
           <UserCard>
            <SingleComment 
            name = 'Sarah' 
            date = "Today at 5:00PM" 
            text = "Hello"
            picture = {profile1}/>
           </UserCard>
           <UserCard>
           <SingleComment 
           name = 'Mariah' 
           date = "Today at 6:00PM" 
           text = "Its amazing"
           picture = {profile2}/>
           </UserCard>
           <UserCard>
           <SingleComment 
           name = 'Salem' 
           date = "Today at 7:00PM" 
           text = "Are you okay?"
           picture = {profile3}/>
           </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
