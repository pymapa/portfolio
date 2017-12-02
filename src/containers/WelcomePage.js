import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';

class Welcome extends Component {
    render () {
        return (
            <div>
                
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
        setName: (e) => {
            dispatch(setName(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);