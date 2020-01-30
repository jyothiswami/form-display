import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
 
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                // name: '',
                // phoneNumber: '',
                // email: '',
                // address: '',
                // city: '',
                // date: '' 
            }, 
            isEditing: false             
        }
        this.handleChange = this.handleChange.bind(this);
    }   

    componentDidMount() {
        this.setState({'formData': this.props.formData});
        if (this.props.formData.name !== '') {
            this.setState({isEditing : true});
        }
    }

    handleChange(field, evt) {
        let data = {...this.state.formData};
        if (field === 'name') {
            data.name = evt.target.value;
        }
        if (field === 'number') {
            data.phoneNumber = evt.target.value;
        }
        if (field === 'email') {
            data.email = evt.target.value;
        }
        if (field === 'address') {
            data.address = evt.target.value;
        }
        if (field === 'city') {
            data.city = evt.target.value;
        }
        if (field === 'date') {
            data.date = evt.target.value;
        }
        this.setState({formData: data});
    }

    handleSubmit() {
        let data = {
            name: '',
            phoneNumber: '',
            email: '',
            address: '',
            city: '',
            date: '' 
        }
        this.props.onSubmit({...this.state.formData});
        this.setState({'formData': data});
    }

    handleUpdate() {
        this.props.onUpdate({...this.state.formData});
    }

    render(){
        return (
        <div className="form">
            <div>
                <h1>Enter the Details</h1>
            </div>
            <form>
            <Row>
                <Col md={2} sm={2}><b>Name</b></Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('name', event)}
                        value={this.state.formData.name}
                        type="text"
                        placeholder="Enter name"
                        
                    />
                </Col>
            </Row>
            <br/>
            
             <Row>
                <Col md={2} sm={2}><b>Contact No:</b></Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('number', event)}
                        value={this.state.formData.phoneNumber}
                        type="text"
                        placeholder="Enter phone number"
                    />
                </Col>
            </Row>
            <br/>

            <Row>
                <Col md={2} sm={2}><b>Email:</b></Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('email', event)}
                        value={this.state.formData.email}
                        type="email"
                        placeholder="Enter email"
                    />
                </Col>
            </Row>            
            <br/>
            <Row>
                <Col md={2} sm={2}><b>Address</b>:</Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('address', event)}
                        value={this.state.formData.address}
                        type="text"
                        placeholder="Enter adress"
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={2} sm={2}><b>City:</b></Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('city', event)}
                        value={this.state.formData.city}
                        type="text"
                        placeholder="Enter name"
                    />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={2} sm={2}><b>Date:</b></Col>
                <Col md={10} sm={10}>
                    <input
                        onChange={(event) => this.handleChange('date', event)}
                        value={this.state.formData.date}
                        type="date"
                        placeholder="Enter date"
                    />
                </Col>
            </Row>
            {
               this.state.isEditing ?
               <Button outline="success" onClick={() => this.handleUpdate()}>Update</Button> :
               <Button outline="success" onClick={() => this.handleSubmit()}>Submit</Button> 
            }
            </form>
        </div>
        );
    }
}

export default FormComponent;