import React, { Component } from 'react';
import './App.css';
import AppRouter from './js/approuter';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormData: {
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        city: '',
        date: '' 
      },
    /*  memberList: [{
        name: 'jyothi',
        phoneNumber: '929299292',
        email: 'abcd@gmail.com',
        address: 'lorum ipsum',
        city: 'bangalore',
        date: '23-04-2011'
      }, {
        name: 'jyothi s',
        phoneNumber: '919199191',
        email: 'lorum@ipsum.com',
        address: 'lorum ipsum',
        city: 'bangaluru',
        date: '23-04-2016'
      }],*/
      index: null
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  inputChangeHandler = (event) => {
    this.setState({
        name: event.target.value
    });
  }

  handleSubmit(data){
    let arr = [...this.state.memberList];
    arr.push(data);
    this.setState({memberList: arr});
    window.location.href="http://localhost:3000/#/display";
  }

  handleDelete(index){
    let arr = [...this.state.memberList];
    arr.splice(index, 1);
    this.setState({memberList: arr});
  }

  handleUpdate(data) {
    let arr = [...this.state.memberList];
    arr[this.state.index] = data;
    this.setState({memberList: arr});
    window.location.href="http://localhost:3000/#/display";
  }

  handleEdit(index){
    this.setState({index: index});
    this.setState({editFormData: this.state.memberList[index]});
    window.location.href="http://localhost:3000/#/";
  }

  render(){
    return (
      <Container>
          <AppRouter 
            formData={this.state.editFormData}
            memberList={this.state.memberList}
            onSubmit={this.handleSubmit}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}
            onEdit={this.handleEdit}
          />
      </Container>
    );
  }
}

export default App;