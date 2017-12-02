import React from 'react';

export const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome</h1>
                <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.setName}/>
                <p>{props.user.name}</p>
                <input type="submit" value="Continue" />
            </form>
        </div>
    )
}