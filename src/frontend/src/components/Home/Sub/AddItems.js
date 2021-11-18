import React from 'react';
import axios from 'axios';
import { Form, Card, Button } from 'react-bootstrap';

class AddItems extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      count: '',
      owner: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addItems() {
    try {
      let url = window.location.origin + '/api/item/';

      if(
        this.state.name === '' ||
        this.state.count === '' ||
        this.state.owner === ''
      ) {
        throw new Error('Invalid input from form.')
      }

      axios.post(url, {
        name: this.state.name,
        count: this.state.count,
        owner: this.state.owner
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.err(err);
        })
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return(
      <>
        <Card className='text-left'>
            <Card.Header>
            <h4>Add Items</h4>
            </Card.Header>
            <Card.Body>
            <Form onSubmit={this.addItems}>
                <Form.Group>
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type='text' placeholder='Item Name'  name='name' value={ this.state.name } onChange={ this.handleChange }/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Count</Form.Label>
                  <Form.Control type='text' placeholder='Count' name='count' value={ this.state.count } onChange={ this.handleChange }/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Owner</Form.Label>
                  <Form.Control type='text' placeholder='Owner Name' name='owner' value={ this.state.owner } onChange={ this.handleChange }/>
                </Form.Group><br/>
                <Button variant='primary' type='submit'>Add</Button>
            </Form>
            </Card.Body>
        </Card>
      </>
    );
  };
}

export default AddItems;