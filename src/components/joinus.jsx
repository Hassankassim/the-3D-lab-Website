import React from "react";
// import image1 from '../../assets/icons/handshaking.png'
const JoinUs = () => {
  return (
    <section id="why-us" className="why-us margint buttont" >
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="content">
              <h3 id="roboto" className="center "> Work with Us  </h3>
              <p id='roboto' className="center san" >
              Unleash your creativity and technical mastery.
               Innovate with passionate digital artisans.
                Together, we craft awe-inspiring software and designs that captivate. 
                Join our team of brilliant minds shaping the future of digital experiences.
              </p>
              <div className="text-center center san">
                <a href="/login" className="unique-btn" id='roboto' >
                  Join Now <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-boxes d-flex flex-column justify-content-center"></div>
            {/* End .content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
