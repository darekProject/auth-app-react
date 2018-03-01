import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PropTypes from "prop-types";

class SignOut extends Component {
    static propTypes = {
        signOutUser: PropTypes.func
    };

    static defaultProps = {
        signOutUser: () => {
        }
    };

    componentWillMount() {
        this.props.signOutUser();
    }

    render() {
        return <div>See you again!!!</div>
    }
}

export default connect(null, actions)(SignOut);