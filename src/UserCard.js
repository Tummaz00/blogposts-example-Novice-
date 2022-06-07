import React from 'react';

//when trying to put a component inside another you must you "props.children for it to show up"

const UserCard = (props) => {
    return(
        <div className = 'ui card'>
            <div className = 'content'>
                <div className = 'header'>Alex Tancredi</div>
                <div className = 'description'>
                    {props.children}
                </div>
                <div className = 'ui bottom button'>
                    <i className = 'add icon'></i>
                    Add Friend
                </div>
            </div>
        </div>
    )
}

export default UserCard;