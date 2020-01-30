import React, { Component } from 'react';
import {Row, Col, Button, Card} from 'react-bootstrap';

class DisplayComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                {
                    this.props.memberList.map((listData, index) => {
                        return (
                                <Card key={index}>
                                    <Card.Body>
                                        <Row>
                                            <Col md={2} sm={2}><b>Name:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.name}
                                            </Col>
                                            <Col md={2} sm={2}><b>Contact:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.phoneNumber}
                                            </Col>
                                            <Col md={2} sm={2}><b>Email:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.email}

                                            </Col>
                                            <Col md={2} sm={2}><b>Address:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.address}
                                            </Col>
                                            <Col md={2} sm={2}><b>City:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.city}
                                            </Col>
                                            <Col md={2} sm={2}><b>Date:</b></Col>
                                            <Col md={2} sm={2}>
                                                {listData.date}
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="primary" onClick={() => this.props.onEdit(index)}>Edit</Button>
                                        <Button variant="danger" onClick={() => this.props.onDelete(index)}>Delete</Button>
                                    </Card.Footer>
                                </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayComponent;