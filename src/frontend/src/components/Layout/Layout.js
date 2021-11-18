import React from 'react';
import { FormControl, Navbar, Form, Button } from 'react-bootstrap';
import CreateTable from './CreateTable';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      page: <CreateTable name=''/>
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchItem() {
    this.setState({
      page: <CreateTable name={ this.state.keyword }/>
    });
    console.log(this.state.page);
  }

  render() {
    return(
      <>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{ marginLeft: 15 }}>Item Store</Navbar.Brand>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Item Name" className="me-2" value={ this.state.keyword } onChange={ this.handleChange } name="keyword"/>
              <Button variant="outline-success" onClick={ this.searchItem }>Search</Button>
            </Form>
          </Navbar>
        </div>
        <div>
          { this.state.page }
        </div>
      </>
    );
  };
}

export default Layout;