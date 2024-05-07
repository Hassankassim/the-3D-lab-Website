import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from '../assets/projects/18.jpg'
import image2 from '../assets/projects/17.jpg'
import image3 from '../assets/projects/6.jpg'
import image4 from '../assets/projects/10.jpg'
import image5 from '../assets/projects/9.jpg'
import image6 from '../assets/projects/4.png'
import image7 from '../assets/trainings/1.jpg'
import image8 from '../assets/trainings/2.jpg'
import image9 from '../assets/trainings/3.jpg'
import image10 from '../assets/trainings/4.jpg'
import image11 from '../assets/trainings/5.jpg'
import image12 from '../assets/trainings/6.jpg'





import CardWork from "../pages/cards-layout/cardwork";
const JoinUs = () => {
  return (
    <>
    <section id="" className="container margint" >
      <h1 className="logonav">Events:</h1>
    <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            Unlocking the potential of intelligent systems, we offer end-to-end services in robotics development, AI algorithms, and machine learning solutions to revolutionize industries."
            buttonText="Read more"
            link="/About"
            imgSrc={image2}
          />
        </Col>
        <Col>
          <CardWork
            heading="3D SOLUTION"
            description="We offer comprehensive services to turn concepts into reality through expert 3D design and printing solutions."
            buttonText="Read more"
            link="/About"
          
            imgSrc={image1}
          />
        </Col>
        <Col>
          <CardWork
            heading="SIMULATION"
            // imgSrc={image1}
            description=" Our unit specializes in modeling real-world scenarios to optimize processes and solutions, providing valuable insights through custom simulation development and analysis..
            ."
            buttonText="Read more"
            link="/About"
            imgSrc={image3}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            Unlocking the potential of intelligent systems, we offer end-to-end services in robotics development, AI algorithms, and machine learning solutions to revolutionize industries."
            buttonText="Read more"
            link="/About"
            imgSrc={image4}
          />
        </Col>
        <Col>
          <CardWork
            heading="3D SOLUTION"
            description="We offer comprehensive services to turn concepts into reality through expert 3D design and printing solutions."
            buttonText="Read more"
            link="/About"
            details1="Data driven office assistance"
            details2="May 2024"
            imgSrc={image5}
          />
        </Col>
        <Col>
          <CardWork
            heading="SIMULATION"
            // imgSrc={image1}
            description=" Our unit specializes in modeling real-world scenarios to optimize processes and solutions, providing valuable insights through custom simulation development and analysis..
            ."
            buttonText="Read more"
            link="/About"
            imgSrc={image6}
          />
        </Col>
      </Row>


      <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            Unlocking the potential of intelligent systems, we offer end-to-end services in robotics development, AI algorithms, and machine learning solutions to revolutionize industries."
            buttonText="Read more"
            link="/About"
            imgSrc={image7}
          />
        </Col>
        <Col>
          <CardWork
            heading="3D SOLUTION"
            description="We offer comprehensive services to turn concepts into reality through expert 3D design and printing solutions."
            buttonText="Read more"
            link="/About"
          
            imgSrc={image8}
          />
        </Col>
        <Col>
          <CardWork
            heading="SIMULATION"
            // imgSrc={image1}
            description=" Our unit specializes in modeling real-world scenarios to optimize processes and solutions, providing valuable insights through custom simulation development and analysis..
            ."
            buttonText="Read more"
            link="/About"
            imgSrc={image9}
          />
        </Col>
      </Row>


      <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            Unlocking the potential of intelligent systems, we offer end-to-end services in robotics development, AI algorithms, and machine learning solutions to revolutionize industries."
            buttonText="Read more"
            link="/About"
            imgSrc={image10}
          />
        </Col>
        <Col>
          <CardWork
            heading="3D SOLUTION"
            description="We offer comprehensive services to turn concepts into reality through expert 3D design and printing solutions."
            buttonText="Read more"
            link="/About"
          
            imgSrc={image11}
          />
        </Col>
        <Col>
          <CardWork
            heading="SIMULATION"
            // imgSrc={image1}
            description=" Our unit specializes in modeling real-world scenarios to optimize processes and solutions, providing valuable insights through custom simulation development and analysis..
            ."
            buttonText="Read more"
            link="/About"
            imgSrc={image12}
          />
        </Col>
      </Row>

    </section>
    </>
  );
};

export default JoinUs;
