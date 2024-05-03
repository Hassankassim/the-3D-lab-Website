import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProject from './Cardproject';

function ProjectView() {
  return (
    <Container>
      <h2 className="logonav">CURRENT PROJECTS:</h2>
      <Row>
        <Col >
          <CardProject
            category="Robotics Unit"
            title="Humanoid Robot Consultant"
            description="Our robotics unit has made significant strides in developing a
             humanoid robot consultant, leveraging advanced robotics technologies to provide 
             innovative solutions for various industries."
          />
        </Col>
        <Col>
          <CardProject
            category="Artificial Intelligence"
            title="Data Driven ChatBot"
            description="In the AI unit, we've been making remarkable
             progress in creating a data-driven chatbot that utilizes
              artificial intelligence algorithms to deliver 
            personalized and responsive interactions for users.."
          />
        </Col>
        <Col>
          <CardProject
            category="3D Modelling and Printing"
            title="Modelling using Solidwork"
            description="Our SolidWorks modeling project continues to advance, with our team employing state-of-the-art techniques to create precise and detailed models that meet the exact specifications and requirements of our clients."
          />
        </Col>
        {/* Add more instances of Col and CardProject as needed */}
      </Row>
    </Container>
  );
}

export default ProjectView;
