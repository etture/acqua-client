import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

import GradientBackground from '../layout/GradientBackground';
import CenterView from '../layout/CenterView';
import Logo from '../layout/Logo';
import FieldCard from '../layout/FieldCard';

class Signin extends Component {
    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            this.props.history.push('/home/dashboard');
        });
    };

    renderField({placeholder, input, type}) {
        return (
            <div className="form-group">
                <input
                    className="form-control"
                    {...input}
                    type={type}
                    placeholder={placeholder}
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
                            <h4 className="card-title text-center mb-5 mt-3 text-gradient">Sign in to acqua</h4>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Field
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    component={this.renderField}
                                    autoComplete="none"
                                />
                                <Field
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    component={this.renderField}
                                    autoComplete="none"
                                />
                                <button type="submit" className="btn btn-primary btn-block mt-4 btn-gradient">Sign In</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            New to acqua? <Link to="/signup" className="text">Sign Up</Link>
                        </div>
                    </FieldCard>
                </CenterView>
            </GradientBackground>
        );
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signin'})
)(Signin);