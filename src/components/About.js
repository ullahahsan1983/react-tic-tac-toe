import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import AnchorButton from './shared/AnchorButton';
import MyProfile from './MyProfile';

const About = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const backdrop = false;

  return (
    <>
      <AnchorButton $right variant="primary" onClick={handleShow}>About</AnchorButton>
      <Offcanvas 
        show={show} 
        onHide={handleClose} 
        placement="end"
        backdrop={backdrop}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>Framework: <span className="text-warning">React</span></div>
          <p> 
            <div><a href="https://github.com/ullahahsan1983/react-tic-tac-toe">Github</a> </div>
          </p>
          <MyProfile />
        </Offcanvas.Body>
      </Offcanvas> 
    </>
  );
}

export default About;

