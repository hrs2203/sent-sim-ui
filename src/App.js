import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {

  const [per, setPer] = useState(-10);
  const [strt, setStrt] = useState(false)

  useEffect(() => {
    if (!strt){
      document.title = "Loading Data..."
    }else {
      document.title = `${per}% done`
    }
  })

  return (
    <div className="pd">
      <Container>
        <Card>
          <Card.Body>
            {
              (strt === false) ? (
                <Spinner animation="border" role="status" />
              ) : (
                <ProgressBar animated now={per} />
              )
            }
            <hr />

            <Row>
              <Col>
                <Button onClick={() => { 
                  setStrt(true); setPer((per + 10));
                }}> Proceed </Button>
              </Col>
              <Col>
                <Button onClick={() => { 
                  setStrt(false); setPer((-10));
                }}> Reset </Button>
              </Col>
            </Row>




          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
