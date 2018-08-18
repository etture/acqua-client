import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CenterView extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col sm="12" md={{size: 6, offset: 3}}>{this.props.children}</Col>
                </Row>
            </Container>
        );
    }
}