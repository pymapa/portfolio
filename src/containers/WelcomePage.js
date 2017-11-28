import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';

class Welcome extends Component {
    render () {
        return (
            <div>
                <h1>Welcome</h1>

                <input type="text" onChange={this.props.setName}/>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);