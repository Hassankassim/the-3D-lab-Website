import React from "react";
// import vcfiocn from "../../assets/img/vcard icon2.png";
import Count from "./count";
import image1 from "../assets/icons/sitting man.png";
import Button from "./buttons";
const WhyUs = () => {
  return (
    <>
      <div className="container center" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2 bordert"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className=" center">
              <h1  className="text-2xl font-bold headh margint">
              Where Do We Add Value!
              </h1>
            </div>
            <p className="san sideline">
              "Our lab adds value through innovation, expertise, collaboration,
               impactful solutions, and accessibility, driving positive
               change and empowering individuals and organizations to thrive in
                a rapidly evolving technological landscape <br />
              
            </p>
            <div className="center headl2">3D modelling/printing,Robotics& IoT and AI</div>
           <div className="center">
           <Button button="View Team"/>
           </div>
          </div>
       
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <div className="center">
              <img width="400px" src={image1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" container center">
        {/* <Count /> */}
      </div>
    </>
  );
};

export default WhyUs;
