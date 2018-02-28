import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.signOutUser();
    }

    render() {
        return <div>See you again!!!</div>
    }
}

export default connect(null, actions)(SignOut);