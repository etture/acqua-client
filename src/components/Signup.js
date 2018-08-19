import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';


import * as actions from '../actions';

class Signup extends Component {
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
            this.props.history.push('/home/dashboard');
        });
    };

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        label="Last Name"
                        name="last_name"
                        type="text"
                        component={this.renderField}
                        autoComplete="none"
                    />
                    <Field
                        label="First Name"
                        name="first_name"
                        type="text"
                        component={this.renderField}
                        autoComplete="none"
                    />
                    <Field
                        label="Email"
                        name="email"
                        type="text"
                        component={this.renderField}
                        autoComplete="none"
                    />
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        component={this.renderField}
                        autoComplete="none"
                    />
                    <Field
                        label="Phone Number"
                        name="phone_number"
                        type="number"
                        component={this.renderField}
                        autoComplete="none"
                    />
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signup'})
)(Signup);