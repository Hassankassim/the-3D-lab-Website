import React from 'react';
import netnexalogo from '../assets/img/logo.png'
import image1 from '../assets/icons/linkedin.png'
import image2 from '../assets/icons/twitter.png'
import image3 from '../assets/icons/whatsapp.png'


const Footer = () => {
  return (
    <>
    <footer className='margintt san' id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-6 footer-contact">
              <h3> <img width={"30px"} />NetNexa</h3>
              <p>
                Sayansi Kijitonyama <br />
                Dar es Salaam <br />
                Tanzania <br /><br />
                <strong>Phone:</strong> +255623816748 <br />
                <strong>Email:</strong> hassankassim553@gmail.com<br />
              </p>
            </div> */}

            


            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Contact Us</h4>
              <p>Join our happy community</p>
             <a href='tel:+25623816748'> <button className='btn-get-started' >Call Us</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>NetNexa</span></strong
            >. All Rights Reserved
          </div>
          <div className="credits">Designed by <a href="123">Sani</a></div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i><img width={'30px'}  /></i></a>
          <a href="#" className="facebook"><i ><img width={'30px'}  /></i></a>
          <a href="#" className="instagram"><i><img width={'30px'}  /></i></a>
          <a href="#" className="google-plus"><i><img width={'30px'} src={image1} /></i></a>
          <a href="#" className="google-plus"><i><img width={'30px'} src={image2} /></i></a>
          <a href="#" className="google-plus"><i><img width={'30px'} src={image3} /></i></a>
          
        </div>
      </div>
    </footer>
    </> );
};

export default Footer;
