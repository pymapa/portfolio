import React, { Component } from 'react'
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to Bar Foo!</h1>

        <h3>Hi there {this.props.user.name}! Nice to meet you. Would you like something?</h3>
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
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);