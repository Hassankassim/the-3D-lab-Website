import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";
import './styles.css';

// Import images
import passportImage from "./profiles/passport.png";
import judyImage from "./profiles/judy.jpg";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <>
      <div className="center">
        <ul>
          {props.data.map((item, index) => (
            <Fragment key={item.name}>
              <li>
                <div className="card-chrt">
                  <div className="image-chrt">
                    <img
                      src={item.photoLink} // Use local path for photo
                      alt="Profile"
                      style={{ borderColor: levelColor }}
                    />
                  </div>
                  <div className="card-body-chrt">
                    <h4 className="headh">{item.name}</h4> {/* Use actual name from JSON */}
                    <p>{item.description}</p> {/* Use actual description from JSON */}
                  </div>
                  <div className="card-footer-chrt" style={{ background: levelColor }}>
                    <img
                      src={chat}
                      alt="Chat"
                    />
                    <img
                      src={call}
                      alt="Call"
                    />
                    <img
                      src={video}
                      alt="Video"
                    />
                  </div>
                  <div></div>
                </div>
                {item.children?.length && <Card data={item.children} />}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

const Chart = () => {
  return (
    <>
      <h2 className="headl center margint">Organization</h2>
      <div className="org-tree-chrt ">
        <Card data={data} />
      </div>
    </>
  );
};

export default Chart;
