import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from "../../actions/index";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class SignUp extends Component {
    static propTypes = {
        authenticated: PropTypes.bool,
        errorMessage: PropTypes.string,
        signUpUser: PropTypes.func
    };

    static defaultProps = {
        authenticated: false,
        errorMessage: '',
        signUpUser: () => {
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticated) {
            this.props.history.push('/orders');
        }
    }

    handleFormSubmit = ({email, password}) => {
        this.props.signUpUser({email, password});
    };

    renderAlert = () => {
        if (this.props.errorMessage) {
            return <div className="alert alert-danger">
                <strong>Oops!</strong> {this.props.errorMessage}
            </div>
        }
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container d-flex justify-content-center">
                <form style={{marginTop: '50px'}} className="col-6" onSubmit={handleSubmit((values) => this.handleFormSubmit(values))}>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">E-mail: </label>
                        <div className="col-10">
                            <Field type="text" component="input" name="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Password: </label>
                        <div className="col-10">
                            <Field type="password" component="input" name="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Password Confirm: </label>
                        <div className="col-10">
                            <Field type="password" component="input" name="passwordConfirm" className="form-control"/>
                        </div>
                    </div>
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated,
        errorMessage: state.auth.error
    }
};

const reduxFormSignUp = reduxForm({
    form: 'signup'
})(SignUp);

export default connect(mapStateToProps, actions)(reduxFormSignUp);