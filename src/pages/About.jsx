import React from "react";
import image1 from '../assets/img/about us.png'
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
                  width={"300px"}
                  className="bordert img-fluid"
                  src={image1}
  
                  alt=""
                />
              </div>
              <h3 id='roboto' className="center logonav">About NetNexa</h3>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content margint">
                <p id='roboto' className="fst-italic center containerwhyus sideline">
                  Welcome to NetNexa, a dynamic platform dedicated to
                  revolutionizing how connections shape opportunities. At
                  NetNexa, we believe in the power of networks and their
                  potential to transform lives. Our mission is to provide an
                  innovative space where individuals can harness the strength of
                  their connections to propel their careers and create
                  meaningful professional relationships..
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
                  NetNexa is on a mission to bridge the gap between talent and
                  opportunities. Our unique platform, Uni-Jobs, is tailored to
                  the vibrant city of Dar es Salaam, offering a specialized
                  avenue for students and job seekers to access live job
                  postings. We are committed to empowering individuals by
                  providing an easy-to-use interface where users can
                  effortlessly connect, share, and explore valuable job
                  opportunities..
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
                  Our platform introduces "Dubu," an efficient contact
                  management and sharing tool that simplifies network building
                  and resource sharing. We understand the significance of a
                  robust network, and Dubu ensures that users have a seamless
                  experience managing their contacts and connections
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
