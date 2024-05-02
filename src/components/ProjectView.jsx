import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProject from './Cardproject';

function ProjectView() {
  return (
    <Container>
      <Row>
        <Col >
          <CardProject
            category="Category 1"
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Col>
        <Col>
          <CardProject
            category="Category 2"
            title="Project 2"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Col>
        <Col>
          <CardProject
            category="Category 2"
            title="Project 2"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Col>
        {/* Add more instances of Col and CardProject as needed */}
      </Row>
    </Container>
  );
}

export default ProjectView;
