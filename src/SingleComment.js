import React from 'react';


//props is short for properties, prop.name refers to the name property each SingleComment has in index.js

const SingleComment = (props) => {
    return(
        <div className = 'comment'>
            <a href = "/" className = 'avatar'>
                <img src = {props.picture} alt = "profilePicture"/>
            </a>
            <div className = 'content'>
                <a href = "/" className = 'author'>
                    {props.name}
                </a>
                <div className = 'metadata'>
                    <span className = 'date'>
                        {props.date}
                    </span>
                </div>
                <div className = 'text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default SingleComment;