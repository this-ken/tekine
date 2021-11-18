import React from 'react';
import axios from 'axios';
import { Form, Card, Button } from 'react-bootstrap';

class DeleteItem extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  deleteItem() {
    try {
      if(this.state.name === '') {
        throw new Error('Invalid input from form.')
      }

      let url = window.location.origin + '/api/item/' + this.state.name + '/';
      console.log(url);
      axios.delete(url)
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
            <h4>Delete Item</h4>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.deleteItem}>
              <Form.Group>
                <Form.Label>Item Name</Form.Label>
                <Form.Control type='text' placeholder='Item Name'  name='name' value={ this.state.name } onChange={ this.handleChange }/>
              </Form.Group><br/>
              <Button variant='primary' type='submit'>Delete</Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  };
}

export default DeleteItem;