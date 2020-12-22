import * as React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface IServiceProps { }

export interface IServiceState {
    startDate: Date;
}

export default class Service extends React.Component<IServiceProps, IServiceState> {

    constructor(props: IServiceProps) {
        super(props);

        this.state = {
            startDate: new Date()
        };
    }
    private setStartDate = (date: Date) => {
        this.setState({ startDate: date });
    }

    public render(): React.ReactElement<IServiceProps> {
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
                    <Col md={6} sm={12}><Form.Group controlId="formVehicleRegistrationNumber">
                        <Form.Label>Vehicle registration number</Form.Label>
                        <Form.Control type="text" placeholder="Vehicle Registration Number" />
                    </Form.Group></Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Form.Group>
                            <Form.Label>Desired date time for service</Form.Label>
                            <div>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={date => this.setStartDate(date as Date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}></Col>
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
                        <Button variant="danger" type="submit">Book my service</Button></Col>
                </Row>
            </Form>
        );
    }
}
