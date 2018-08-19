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
    render() {
        return (
            <GradientBackground>
                <CenterView>
                    <Logo/>
                    <FieldCard>
                        <div className="card-body mx-3">
                            <h4 className="card-title text-center mb-3 text-gradient">Sign in to acqua</h4>
                        </div>
                        <div className="card-footer">
                            <Link to="/signup" className="text">Sign Up</Link>
                        </div>
                    </FieldCard>
                </CenterView>
            </GradientBackground>
        );
    }
}

export default connect()(Signin);
