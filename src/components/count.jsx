import React, { useEffect } from 'react';
import image1 from '../assets/img/udsm-LOGO.png'
import image2 from '../assets/img/logo-white.png'


const Count = () => {
 
  return (
    <section id="counts" className="counts ">
      <div className="container">
      <h2 id='roboto' className=' headh margint'>OUR CLIENTS</h2>
        <div className="row counters section-bg margint">
          <div className="col-lg-3 col-3 text-center">
          <span><img width={"70px"} src={image1} alt="" /></span>
           
          </div>

          <div className="col-lg-3 col-3 text-center ">
            <span><img width={"90px"} src={image2} alt="" /></span>
            
          </div>

          <div className="col-lg-3 col-3 text-center">
          <span><img width={"90px"} src={image1} alt="" /></span>
            
          </div>

          <div className="col-lg-3 col-3 text-center">
          <span><img width={"90px"} src={image1} alt="" /></span>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
