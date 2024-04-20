import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardWork from "./cardwork";
import image1 from '../../assets/img/3dmodelling.jpg'
import image2 from '../../assets/img/robotics.jpg'
import image3 from '../../assets/img/simulation.jpg'

function Cardlayout() {
  return (
    <Container>
      <h2 className="logonav">OUR UNITS:</h2>
      <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            Unlocking the potential of intelligent systems, we offer end-to-end services in robotics development, AI algorithms, and machine learning solutions to revolutionize industries."
            buttonText="Read more"
            link="/About"
            imgSrc={image2}
            details="Data driven office assistance"x
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
    </Container>
  );
}

export default Cardlayout;
