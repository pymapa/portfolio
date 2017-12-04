import React from 'react';

export const Signin = (props) => {
    return (
        <div>
            <h1>Hi there! What should I call you?</h1>
                <form onSubmit={props.handleSubmit}>
                <input value={props.user.name} name="name" type="text" onChange={props.handleChange}/>
                <input type="submit" value="Continue" />
            </form>
        </div>
    )
}