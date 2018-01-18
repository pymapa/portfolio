import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from '../components/code/Code.css';
import {Code} from '../components/code/Code';
import {addMessage} from '../actions/applicationmessageActions';
import constants from '../shared/applicationConstants';

class CodeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.addMessage('TODO: nothing mutch here yet...', constants.MESSAGE_INFO);
    }

    render () {
        return (
            <div className={styles.wrapper}>
                <Code />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text, type) => {
            dispatch(addMessage(text, type));
        },
    };
};

CodeContainer.propTypes = {
    addMessage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);