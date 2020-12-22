import * as React from 'react';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface ITestdriveProps { }

export interface ITestdriveState {
    startDate: Date;
}

export default class Testdrive extends React.Component<ITestdriveProps, ITestdriveState> {

    constructor(props: ITestdriveProps) {
        super(props);

        this.state = {
            startDate: new Date()
        };
    }

    private setStartDate = (date: Date) => {
        this.setState({ startDate: date });
    }

    public render(): React.ReactElement<ITestdriveProps> {
        return (
            <Form style={{ marginTop: 15, marginBottom: 50 }}>
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formMobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formVehiclename">
                            <Form.Label>Vehicle Name</Form.Label>
                            <Form.Control as="select">
                                <option>CB UNICORN</option>
                                <option>Shine</option>
                                <option>Dio</option>
                                <option>Hornet 2.0</option>
                                <option>XBlade</option>
                                <option>CD110</option>
                                <option>Activa 125</option>
                                <option>Livo</option>
                                <option>Grazia 125</option>
                                <option>Activa 6G</option>
                                <option>SP 125</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <FormGroup>
                            <Form.Label>Desired date time for test drive</Form.Label>
                            <div>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={date => this.setStartDate(date as Date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Address" as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Button variant="danger" type="submit">Book my test drive</Button></Col>
                </Row>
            </Form>
        );
    }
}
