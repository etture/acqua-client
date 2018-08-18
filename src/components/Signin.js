import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
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
                    <h1 className="text">Signin Page!</h1>
                </CenterView>
            </div>
        );
    }
}

export default withRouter(connect()(Signin));
