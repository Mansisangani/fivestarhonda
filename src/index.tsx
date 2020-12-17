import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter } from "react-router-dom";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const routs = (
   <React.StrictMode>
      < BrowserRouter >
         <Container>
            <div>
               <img src={`${process.env.PUBLIC_URL}/fivestart-logo.png`} style={{ height: 120 }} alt="FiveStar Logo"></img>
               <img src={`${process.env.PUBLIC_URL}/honda-logo.png`} style={{ height: 90, marginTop: '1%' }} className="float-right" alt="Honda Logo"></img>
            </div>
            <Row>
               <Navbar variant="dark" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href="/aboutus"><Link to="/aboutus">About Us</Link></Nav.Link>
                        <Nav.Link href="/contactus"><Link to="/contactus">Contact Us</Link></Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </Row>
            <Route exact path="/" component={App} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            {/* <h3 style={{ marginLeft: '-15px', marginTop: '15px' }}>Quicklinks</h3> */}
            <Row className="footer" style={{ marginTop: '15px', backgroundImage: `url(${process.env.PUBLIC_URL}/footer.jpg)` }}>
               <Col className="text-center">
                  <Button href="#" variant="danger">Tips for you</Button>
               </Col>
               <Col className="text-center">
                  <Button href="#" variant="danger">Book a test-drive</Button>
               </Col>
               <Col className="text-center">
                  <Button href="#" variant="danger">Book a service</Button>
               </Col>
            </Row>
         </Container>
      </ BrowserRouter >
   </React.StrictMode>
);

ReactDOM.render(
   routs,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
