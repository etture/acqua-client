import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Signin from "./Signin";
import Dashboard from "./Dashboard";

class App extends Component {
    componentWillMount(){
        console.log('token:', this.props.authenticated);
        if(!this.props.authenticated){
            this.props.history.push('/signin');
        }else{
            this.props.history.push('/home/dashboard');
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/home/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state){
    return {authenticated: state.auth.authenticated};
}

export default withRouter(connect(mapStateToProps)(App));