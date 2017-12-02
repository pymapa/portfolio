import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Welcome} from '../components/Welcome';
import {Home} from '../components/Home';

class HomeContainer extends Component {
  render () {
    return (
      <div>
        {this.props.user.signed === false ? <Welcome user={this.props.user} setName={this.props.setName} /> : <Home />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (e) => {
      dispatch({
        type: "SET_NAME",
        payload: e.target.value
      });
    },
    signIn: (e) => {
      dispatch({
        type: "SIGN_IN",
        payload: e.target
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);