import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardWork from "./cardwork";

function Cardlayout() {
  return (
    <Container>
      <h2 className="logonav">OUR UNITS:</h2>
      <Row>
        <Col>
          <CardWork
            heading="ROBOTICS"
            description="
            NetNexa provides Uni-Jobs, a specialized platform 
            in Dar es Salaam, connecting students to part-time, internships,
             or full-time job opportunities"
            buttonText="Read more"
            link="/About"
          />
        </Col>
        <Col>
          <CardWork
            heading="3D SOLUTION"
            description="  Our contact management and sharing resource,
             Dubu, facilitates effective connections. This tool streamlines
              contact management and sharing, 
            providing an effective way to build and maintain 
            professional networks."
            buttonText="Read more"
            link="/About"
          />
        </Col>
        <Col>
          <CardWork
            heading="SIMULATION"
            // imgSrc={image1}
            description="NetNexa ensures an easy-to-use interface,
             making navigation and utilization of the 
             platform seamless for all users.
            ."
            buttonText="Read more"
            link="/About"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cardlayout;
