import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../actions';

import GradientBackground from '../layout/GradientBackground';
import CenterView from '../layout/CenterView';
import Logo from '../layout/Logo';
import FieldCard from '../layout/FieldCard';
import Footer from '../layout/Footer';

class Signup extends Component {
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
            this.props.history.push('/home/dashboard');
        });
    };

    renderField({label, input, type}) {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    className="form-control"
                    {...input}
                    type={type}
                />
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <GradientBackground>
                <CenterView>
                    <Logo/>
                    <FieldCard>
                        <div className="card-body mx-3">
                            <h4 className="card-title text-center mb-3 text-gradient">Sign up for acqua!</h4>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Field
                                    label="Email"
                                    name="email"
                                    type="email"
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
                                    label="Phone Number"
                                    name="phone_number"
                                    type="number"
                                    component={this.renderField}
                                    autoComplete="none"
                                />
                                <button type="submit" className="btn btn-primary btn-block mt-4 btn-gradient">Create Account</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/signin" className="text">Go back</Link>
                        </div>
                    </FieldCard>
                </CenterView>
                <Footer/>
            </GradientBackground>
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