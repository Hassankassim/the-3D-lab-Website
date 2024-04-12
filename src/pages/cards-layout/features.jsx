import React from 'react';
import image1 from '../../assets/img/jobs.png'
import image2 from '../../assets/img/mentor.png'
import image3 from '../../assets/img/vcard icon3.png'
import image4 from '../../assets/img/community.png'
const FeaturesSection = () => {
  return (
    <>
   
    <section id="features" className="features margint">
      
      <div className="container" data-aos="fade-up">
      <h2 id='roboto' className=' margint'>HERE'S YOUR PROBLEMS</h2>
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" ><img width={"40px"} src={image3}></img></i>
              <h3><a href="/Homedubu">DUBU</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"><img width={"40px"} src={image1}></img> </i>
              <h3><a href="/Unijobs">UNI-JOBS</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"><img width={"40px"} src={image2}></img></i>
              <h3><a href="/Mentor">FIND MENTOR&COACH</a></h3>
            </div>
          </div>
         <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-fingerprint-line" ><img width={"40px"} src={image4}></img></i>
              <h3><a href="/Community">FIND TEAMS&CLUB</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
