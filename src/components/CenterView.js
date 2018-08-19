import React, {Component} from 'react';

export default class CenterView extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-md-offset-3">{this.props.children}</div>
                </div>
            </div>
        );
    }
}