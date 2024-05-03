import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProject from './Cardproject';
import image1 from '../assets/img/projects photos/robotics exhibition.jpg'
import image2 from '../assets/img/projects photos/chatbot.png'
import image3 from '../assets/img/projects photos/soldwork.png'
function ProjectView() {
  return (
    <Container>
      <h2 className="logonav">PROGRESS PROJECTS:</h2>
      <Row>
        <Col >
          <CardProject
          url={image1}
            category="Robotics Unit"
            title="Humanoid Robot Consultant"
            description="Our robotics unit has made significant strides in developing a
             humanoid robot consultant, leveraging advanced robotics technologies to provide 
             innovative solutions for various industries."
          />
        </Col>
        <Col>
          <CardProject
           url={image2}
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
           url={image3}
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
