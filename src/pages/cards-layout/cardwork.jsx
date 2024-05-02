import React from 'react';

const CardWork = (props) => {
  return (
    <div className="col-sm center margint">
      
      <div className="card-st">
   
      <span className="">
      {/* <p className='headl2' >{props.details}</p> */}
      <p className='headl2' >{props.details}</p>
              <img width="" className="center" id='roboto' src={props.imgSrc} alt="" />
              <p className='headl2' >{props.details}</p>
            </span>
           
        <div className="card-st__content">
          <p className="card-st__title" id='roboto'>{props.heading}</p>
          <p className="card-st__description" id='roboto'>
    
            {props.description}
          </p>
         
         
        </div>
      </div>
    </div>
  );
};

export default CardWork;
