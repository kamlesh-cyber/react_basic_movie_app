

import "../App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const justFunction =()=>{
	alert("Sai")
}
const Sidebar = ({val}) => {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var flag = 0;
  const handleSubmit = () => {
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    if(email.value != "" && pass.value !=""){
      setShow(false);
      flag=1;
    }
    else{
      flag=0;
    }
  }
  const generes = document.getElementById('generes');
  const addMovies = document.getElementById('addMovies');
  if(flag===1){
    document.getElementById('generes').style({"display": "block"});
    document.getElementById('addMovies').style({"display": "block"});
  }else{
    document.getElementById('generes').style({"display": "none"});
    document.getElementById('addMovies').style({"display": "none"});
  }

	const imageUrl =
    "https://static.toiimg.com/thumb/msid-90065339,imgsize-28018,width-400,resizemode-4/90065339.jpg";
	return (
    <div className="topDiv">
      <div className="sideBar">
        <div className="tab" id="home">Home</div>
        <div className="tab" id="movies">Movies</div>
        <div className="tab" id="generes">Generes</div>
        <div className="tab" id="addMovies">Add Movies</div>
      </div>
      <div className="middleDiv">
        <h2>Find a Movie to watch tonight!</h2>

        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            // border: "2px solid black",
            width: "300px",
            height: "250%",
            // marginBottom: "100px"
          }}
          className="ticketImgDiv"
        ></div>
      </div>

      <Button variant="primary" style={{height: "fit-content", margin: "20px 30px"}} onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            className="{}"
          >
            <h3>Login Here!</h3>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Id"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "30px",
              }}
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Passsword"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "30px",
              }}
            />
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                width: "300px",
                height: "30px",
				        marginBottom: "30px",
                background:
                  "linear-gradient(91deg, #FFA300 5.73%, #FF6E00 100%)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              {" "}
              Log In{" "}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );

}

export default Sidebar;