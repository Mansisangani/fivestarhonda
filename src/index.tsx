import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter } from "react-router-dom";
import { Motorcycle } from './Component/Motorcycle';
import { Scooter } from './Component/Scooter';
import Tips from './Component/Tips';
import Helpline from './Component/Helpline';
import ContactUs from './Component/ContactUs';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testdrive from './Component/Testdrive';
import Service from './Component/Service';


const logoClick = (from: string) => {
   if (from === "local") {
      window.location.href = "/";
   } else if (from === "global") {
      window.location.href = "http://www.honda2wheelersindia.com/";
   }
}

const routs = (
   <React.StrictMode>
      < BrowserRouter >
         <Container>
            <div>
               <img onClick={() => logoClick('local')} src={`${process.env.PUBLIC_URL}/fivestart-logo.png`} style={{ height: 120, cursor: 'pointer' }} alt="FiveStar Logo"></img>
               <img onClick={() => logoClick('global')} src={`${process.env.PUBLIC_URL}/honda-logo.png`} style={{ height: 90, marginTop: '1%', cursor: 'pointer' }} className="float-right" alt="Honda Logo"></img>
            </div>
            <Row>
               <Navbar variant="dark" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href={process.env.PUBLIC_URL + '/'}><Link to="/">About Us</Link></Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + '/motorcycle'}><Link to="/motorcycle">Motorcycle</Link></Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + '/scooter'}><Link to="/scooter">Scooter</Link></Nav.Link>
                        <NavDropdown title="Book" id="basic-nav-dropdown">
                           <NavDropdown.Item href={process.env.PUBLIC_URL + '/testdrive'}><Link to="/testdrive">Testdrive</Link></NavDropdown.Item>
                           <NavDropdown.Item href={process.env.PUBLIC_URL + '/service'}><Link to="/service">Service</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={process.env.PUBLIC_URL + '/tips'}><Link to="/tips">Tips</Link></Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + '/helpline'}><Link to="/helpline">Helpline</Link></Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + '/contactus'}><Link to="/contactus">Contact Us</Link></Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
            </Row>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={App} />
            <Route path={process.env.PUBLIC_URL + '/motorcycle'} component={Motorcycle} />
            <Route path={process.env.PUBLIC_URL + '/scooter'} component={Scooter} />
            <Route path={process.env.PUBLIC_URL + '/testdrive'} component={Testdrive} />
            <Route path={process.env.PUBLIC_URL + '/service'} component={Service} />
            <Route path={process.env.PUBLIC_URL + '/tips'} component={Tips} />
            <Route path={process.env.PUBLIC_URL + '/helpline'} component={Helpline} />
            <Route path={process.env.PUBLIC_URL + '/contactus'} component={ContactUs} />
            {/* <h3 style={{ marginLeft: '-15px', marginTop: '15px' }}>Quicklinks</h3> */}
            <Row>
               <Col>
                  <Image src={`${process.env.PUBLIC_URL} /footer.jpg`} alt="footerImage" fluid></Image>
               </Col>
            </Row>
            <Row style={{ marginTop: '15px', marginBottom: 15 }}>
               <Col className="text-center">
                  <a className="footerLink" href={process.env.PUBLIC_URL + '/tips'} >Tips for you</a>
               </Col>
               <Col className="text-center">
                  <a className="footerLink" href={process.env.PUBLIC_URL + '/testdrive'} >Book a test-drive</a>
               </Col>
               <Col className="text-center">
                  <a className="footerLink" href={process.env.PUBLIC_URL + '/service'} >Book a service</a>
               </Col>
            </Row>
         </Container>
      </ BrowserRouter >
   </React.StrictMode >
);

ReactDOM.render(
   routs,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
