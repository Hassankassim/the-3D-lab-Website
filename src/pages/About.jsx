import React from "react";
import image1 from '../assets/img/about us.jpg'
import image2 from '../assets/img/mission.png'
import image3 from '../assets/img/digitalmarketing 2.png'
import Reactnavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Projects } from "../components/Projects";
// import Navbar from "../../components/navbar/navbar";
// import heroimg from "../../assets/img/studentnetworking2.jpg";
// import image1 from "../../assets/img/studentnetworking.jpg";
// import heroimg2 from "../../assets/img/studentnetworking3.jpg";
// import Footer from "../../components/footer/footer";
const About = () => {
  return (
    <>



      <div className="aboutcard">
        <div className="about margint">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                id="bordert1"
                className="col-lg-6 order-1 order-lg-2 center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img
                  width={"400px"}
                  className="bordert img-fluid"
                  src={image1}

                  alt=""
                />
              </div>
              <h3 id='roboto' className="center logonav">About Us</h3>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content margint">
                <p id='roboto' className="fst-italic center containerwhyus sideline">
                  Welcome to the 3D Solution and Robotics Lab at
                  the University of Dar es Salaam Department of Electronics and Telecommunication.
                  Our lab is a dynamic hub of innovation and collaboration,
                  dedicated to pushing the boundaries of technology and driving positive
                  change in our community and beyond.
                </p>
                <ul></ul>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2 center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img

                  src={image2}
                  width={"300px"}
                  className="img-fluid bordert2"
                  alt=""
                />
              </div>
              <br />

              <br />
              <h1 id='roboto' className="center margint logonav">Our Mission</h1>

              <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content">
                <p id='roboto' className="fst-italic margint center containerwhyus sideline">
                  Our mission is to harness the power of 3D design, robotics, simulations,
                  and AI to solve real-world problems, empower individuals,
                  and inspire the next generation of innovators.
                  <br />
                  Vision: We envision a future where technology is used to
                  create sustainable solutions, enhance human potential, and
                  improve quality of life for all
                </p>
                <ul></ul>
              </div>
            </div>

            <div className="row">
              <div
                id="bordert1"
                className="col-lg-6 order-1 order-lg-2 center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img
                  width={"400px"}
                  className="bordert img-fluid"
                  src={image3}

                  alt=""
                />
              </div>
              <h3 id='roboto' className="center logonav margint">What We Offer</h3>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content margint">
                <p id='roboto' className="fst-italic center containerwhyus sideline">
                  "At the 3D Solution and Robotics Lab, we offer a wide range of 
                  cutting-edge services and expertise to meet the diverse needs 
                  of our clients and collaborators. From 3D design and printing 
                  to simulations, robotics, and artificial intelligence, we provide
                   end-to-end solutions that drive innovation and create tangible impact.
                    Our dedicated team of experts collaborates closely with clients to develop
                     customized solutions tailored to their specific needs and objectives
                     . Whether you're looking to prototype a new product, optimize processes through 
                     simulations, or integrate robotics and AI into your operations, we have the knowledge,
                      experience, and resources to help you achieve your goals. At our lab, we are committed
                       to excellence, innovation, collaboration, and making a positive impact on society and 
                       the world at large
                </p>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default About;
