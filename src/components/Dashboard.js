import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return (
            <div>
                Acqua Dashboard
            </div>
        );
    }
}

export default connect()(Dashboard);