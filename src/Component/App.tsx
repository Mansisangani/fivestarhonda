import * as React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import CustomCarousel from '../CommonComponent/CustomCarousel';
import { CustomImageGrid } from '../CommonComponent/CustomImageGrid';
import CommonFunction from "../Data/CommonFunction";

const galleryImages =
  [{ src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
  { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` }
  ];

export interface IAppProps { }

export interface IAppState {
  imageArray: any[];
  currImg: any;
  viewerIsOpen: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      imageArray: [`${process.env.PUBLIC_URL}/carouselImage/01.jpg`
        , `${process.env.PUBLIC_URL}/carouselImage/02.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/03.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/04.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/05.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/06.jpg`,
      `${process.env.PUBLIC_URL}/carouselImage/07.jpg`],
      viewerIsOpen: false,
      currImg: 0
    };
  }

  private submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    CommonFunction.sendEmail("Request for call", "Testing");
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
                <Form.Control as="select">
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
      </div>
    );
  }
}
