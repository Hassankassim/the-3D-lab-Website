import React from "react";
import backendAPI from '../../api/backendAPI'
import '../../index.css';
import Reactnavbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function Bucket() {

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const postDetails = async () => {
      try {
        setLoading(true);
        const { data } = await backendAPI.post("", { name, phone });
        if (data.success) {
          console.log(`${data.name} is Saved. Done!`);
          setData(<span className="blue-text">{`${data.name} is Saved. Done!`}</span>);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    postDetails();
  };
  const handleDownloadVcard = () => {
    window.location.href = "https://bucket-egxu.onrender.com/api/v1/download";
  };

  return (
    <>

      <div className="navcomp center san" >
        {/* Main content */}
        <div className="container mt-5">
          <div className="title">
            <div className="image-container1">
              <h2 className="headl center ">Save Your Phone Details</h2>
            </div>
          </div>
          <div className="feedback1">
          <div className="m-3 text-success">{data && <h5>{data}</h5>}</div>
          <div className="m-3 text-warning">
            {loading && (
              <div id="page">
                <div id="container">
                  <div id="ring"></div>
                  <div id="ring"></div>

                  <div id="ring"></div>
                  <div id="ring"></div>
                  <div id="h3" className="headl2 san">Saving..!</div>
                </div>
              </div>
            )}
          </div>
          </div>
          
          <div id="card45" className="center">
          <form className="form-bucket margint san" action="" onSubmit={handleSubmit}>
      <div className="Group">
        <label htmlFor="Name san">Name</label>
        <input placeholder="Judith.." name="name" id="Name" type="text" />
      </div>
      <div className="Group">
        <label htmlFor="Password san">Phone Number</label>
        <input id="Phone" name="phone" type="phone" placeholder="0723...." />
      </div>
      <div className="Group">
        <button type="submit" className="btn san">Save the Contact</button>
      </div>
    </form>
          </div>
        </div>
        {/* <div className="container">
        <button className="btn btn-primary" onClick={handleDownloadVcard}>
          Download Vcard
        </button>
      </div> */}

        
      
      </div>
    <Footer />
    </>
  );
}

export default Bucket;
