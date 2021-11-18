import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddItems from './Sub/AddItems';
import DeleteItem from './Sub/DeleteItem';

class Home extends React.Component {

  render() {
    return(
      <>
        <Container style={{marginTop: 30}}>
          <Row>
            <Col>
              <AddItems/>
            </Col>
            <Col>
              <DeleteItem/>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
}

export default Home;