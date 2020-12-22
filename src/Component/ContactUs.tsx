import * as React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export interface IContactUsProps { }

export interface IContactUsState {
  title: string;
}

export default class ContactUs extends React.Component<IContactUsProps, IContactUsState> {

  constructor(props: IContactUsProps) {
    super(props);
    this.state = {
      title: 'Contact Us'
    };
  }

  private submit = (ev: any) => {
    const form = ev.currentTarget;
    let formData: any[] = [];

    for (let index = 0; index < form.length; index++) {
      const element = form[index];
      formData.push({ key: element['placeholder'], value: element['value'] });
    }
    console.log(formData);
  }

  public render(): React.ReactElement<IContactUsProps> {
    return (
      <Row style={{ marginTop: 15, marginBottom: 50 }}>
        <Col md={8}>
          <Form onSubmit={this.submit}>
            <Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Message" as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="danger" style={{ width: '100%' }} type="submit">Submit</Button></Col>
            </Row>
          </Form>
        </Col>
        <Col md={4}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.0606502060855!2d70.46200221458733!3d21.544483675348584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395803c3f7517a33%3A0x4ffb043daa9185e8!2sFive%20Star%20Honda!5e0!3m2!1sen!2sin!4v1608369863047!5m2!1sen!2sin" width="360" height="360" ></iframe>
          <div style={{ lineHeight: 1 }}>
            <div>Five Star Honda</div>
            <div>Opp. Majewadi Gate,</div>
            <div>Rajkot Road</div>
            <div>Junagadh - 362001</div>
            <div>Phone. 0285-2627623</div>
            <div>Mobile. 7043419500</div>
          </div>
        </Col>
      </Row>
    );
  }
}
