import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Table } from 'react-bootstrap';

class CreateTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchData(this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.name !== this.props.name) {
      this.fetchData(this.props.name);
    }
  }

  fetchData(name) {
    let url = '';
    console.log(name);
    if (this.props.name === '') {
      url = window.location.origin + '/api/item/';
    } else {
      url = window.location.origin + '/api/item/' + name + '/';
    }
    console.log(url);
    axios.get(url)
      .then(res => {
        this.setState({ data: JSON.parse(res.data), loading: false })
      })
      .catch(err => {
        console.error(err);
      })
    this.forceUpdate();
  }

  render() {
    if(this.state.loading) {
      return(
        <Spinner animation="border" role="status" className='center'>
          <span className="sr-only"></span>
        </Spinner>
      )
    } else {
      return(
        <>
          <Container style={{marginTop: 30}}>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Count</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(this.state.data).map((items) => (
                      <tr key={items.pk}>
                        <td>{items.pk}</td>
                        <td>{items.fields.count}</td>
                        <td>{items.fields.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  };
}

export default CreateTable;