import React from 'react';


function CardProject({ category, title, description }) {
  return (
    <div className='center margint'>
    <article className="card-project">
      <div className="card-project-int">
        <span className="card-project__span">{category}</span>
        <div className="img-project"></div>
        <div className="card-project-data">
          <p className=" headh">{title}</p>
          <p>{description}</p>
          <button className="button-project">More info</button>
        </div>
      </div>
    </article>
    </div>
  );
}

export default CardProject;
