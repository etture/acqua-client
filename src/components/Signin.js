import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import './SigninStyle.css';
import CenterView from './CenterView';

class Signin extends Component {
    render() {
        return (
            <div className="signin-bg">
                <CenterView>
                    <div className="img-parent">
                        <img className='signin-img' src={window.location.origin + '/images/logo_only_white.png'}/>
                    </div>
                    <Link to="/signup" className="text">Sign Up</Link>
                </CenterView>
            </div>
        );
    }
}

export default connect()(Signin);
