import React from "react";
import "./styles.css";
import image from "../../assets/testimonies/kikota.jpg";
import quote from "../../assets/icons/quotes.png";
import quote1 from "../../assets/icons/quotes close.png";
function TestimonialCard({ image, name, text, talk }) {
  return (
    <div className="TestimonialCard">
      <div className="TestimonialCardHeader">
        <div className="TestimonialCardHeaderBar">
          <a href="#" className="TestimonialCardBtnMessage"></a>

          <a href="#" className="TestimonialCardBtnMenu"></a>
        </div>

        <span className="">
          <img className="TestimonialCardImage" src={image} />{" "}
        </span>

        <div className="TestimonialCardHeaderSlantedEdge"></div>
      </div>
      <div className="TestimonialCardBody">
        <span className="TestimonialCardName san" id='' >{name}</span>
        <span className="TestimonialCardJobTitle"></span>
        <div className="TestimonialCardBio " id='' >
          <p className="container ">{text}</p>
          
          <p><img width={"12px"} className=""  src={quote} />{talk} <img width={"12px"} className="" src={quote1} /></p>
        </div>

        <div className="TestimonialCardSocialAccounts"></div>
      </div>

      <div className="TestimonialCardFooter">
        <div className="TestimonialCardStats"></div>
      </div>
    </div>
  );
}

export default TestimonialCard;
