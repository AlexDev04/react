import React from 'react';

export const Post = ({children, ...props}) => {

    const postStyle = {
        padding: '5px',
        margin: '20px'
    }

    return (
        <div style={postStyle}>
            <h2>{props.item.title}</h2>
            <p>{props.item.body}</p>
        </div>
    );
};
