import * as React from 'react';
import { Button, Card, Col, Form, Row, Toast } from 'react-bootstrap';
import CustomCarousel from '../CommonComponent/CustomCarousel';
import { CustomImageGrid } from '../CommonComponent/CustomImageGrid';
import CommonFunction from "../Data/CommonFunction";

const galleryImages =
  [{ src: `${process.env.PUBLIC_URL}/gridImage/h16.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h2.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h3.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h4.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h5.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h6.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h7.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h8.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h9.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h10.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h11.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h12.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h13.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h14.jpeg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpeg` }
  ];

export interface IAppProps { }

export interface IAppState {
  imageArray: any[];
  currImg: any;
  viewerIsOpen: boolean;
  toastVisible: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      imageArray: [`${process.env.PUBLIC_URL}/carouselImage/01.jpg`
        , `${process.env.PUBLIC_URL}/carouselImage/11.jpeg`,
      `${process.env.PUBLIC_URL}/carouselImage/10.jpeg`,
      `${process.env.PUBLIC_URL}/carouselImage/09.jpeg`,
      `${process.env.PUBLIC_URL}/carouselImage/05.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/06.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/07.jpg`],
      viewerIsOpen: false,
      currImg: 0,
      toastVisible: false
    };
  }

  private submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    let finalStructure = `<table><tbody>`;
    for (let index = 0; index < ev.currentTarget.length - 1; index++) {
      let element = ev.currentTarget[index] as HTMLFormElement
      let placeholder = element['placeholder'];
      if (index === 4) {
        placeholder = "Enquiry for";
      }
      let elementvalue = element['value'];
      finalStructure += `<tr><td>${placeholder}</td><td>${elementvalue}</td></tr>`
    }
    finalStructure += `</tbody></table>`;
    CommonFunction.sendEmail("Request for call", finalStructure);
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      toastVisible: true
    });
    setTimeout(() => {
      this.setState({
        toastVisible: false
      });
    }, 60000);
  }

  private toggletoast = () => {
    this.setState({
      toastVisible: false
    });
  }

  private openImgsViewer = (index: any) => {
    this.setState({
      currImg: index,
      viewerIsOpen: true,
    })
  }

  private gotoPrevious = () => {
    this.setState({
      currImg: this.state.currImg - 1
    });
  }

  private gotoNext = () => {
    this.setState({
      currImg: this.state.currImg + 1
    });
  }

  private closeViewer = () => {
    this.setState({
      currImg: 0,
      viewerIsOpen: false
    })
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <div>
        <CustomCarousel imageArray={this.state.imageArray}></CustomCarousel>
        <Row style={{ marginTop: 15 }}>
          <Col md={4}>
            <h4 style={{ display: 'inline-block' }}>Provide your details</h4><h4 style={{ visibility: 'hidden', display: 'inline-block' }}>!</h4><h4 style={{ color: 'red', display: 'inline-block' }}> we'll call you</h4>
            <Form onSubmit={this.submit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
              <Form.Group controlId="formMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Mobile Number" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formEnquiryFor">
                <Form.Label>Enquiry for</Form.Label>
                <Form.Control as="select" placeholder="Enquiry for">
                  <option>Sales</option>
                  <option>Service</option>
                  <option>Finance</option>
                  <option>Insurance</option>
                </Form.Control>
              </Form.Group>
              <Button variant="danger" style={{ width: '100%' }} type="submit">Submit</Button>
            </Form>
          </Col>
          <Col md={8}>
            <Row>
              {galleryImages.map((val, i) => {
                return (
                  <Col md={4}>
                    <Card>
                      <Card.Img src={val.src} onClick={() => this.openImgsViewer(i)}></Card.Img>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <CustomImageGrid galleryImages={galleryImages} currImg={this.state.currImg}
              viewerIsOpen={this.state.viewerIsOpen} closeViewer={this.closeViewer}
              gotoNext={this.gotoNext} gotoPrevious={this.gotoPrevious}
            ></CustomImageGrid>
          </Col>
        </Row>
        <Toast show={this.state.toastVisible} onClose={this.toggletoast}>
          <Toast.Header>
            <strong className="mr-auto">Thank you for Enquiry</strong>
          </Toast.Header>
          <Toast.Body>We have received your enquiry and we will call you as soon as possible. Thank you !!!</Toast.Body>
        </Toast>
      </div>
    );
  }
}
