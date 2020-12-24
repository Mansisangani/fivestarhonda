import * as React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import CustomCarousel from '../CommonComponent/CustomCarousel';

export interface ITipsProps { }

export interface ITipsState {
    imageArray: any[];
}

export default class Tips extends React.Component<ITipsProps, ITipsState> {

    constructor(props: ITipsProps) {
        super(props);

        this.state = {
            imageArray: [
                `${process.env.PUBLIC_URL}/tips/Motorcycle.jpg`,
                `${process.env.PUBLIC_URL}/tips/Scooter.jpg`
            ]
        };
    }

    public render(): React.ReactElement<ITipsProps> {
        return (
            <div style={{ marginTop: 15 }}>
                <Tabs defaultActiveKey="safety" id="uncontrolled-tab-example">
                    <Tab eventKey="safety" title="safety">
                        <Row style={{ marginTop: 15, textAlign: 'center' }}>
                            <Col>
                                <iframe width="450" height="300" src="https://www.youtube.com/embed/GcYLhjhWOuc"></iframe>
                            </Col>
                            <Col>
                                <iframe width="450" height="300" src="https://www.youtube.com/embed/r7ht0d6pIfs"></iframe>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="maintainance" title="Maintainance">
                        <div style={{ marginTop: 15 }}>
                            <b>Servicing your Honda 2 Wheeler</b>
                            <p>Always service your Honda 2 Wheeler only at an Honda authorized workshop. This will ensure usage of genuine spare parts and Honda recommended Engine oil which are essential for proper performance of your Honda 2 Wheeler. Always follow the maintenance schedule of your Honda 2 Wheeler as mentioned in the Owner's handbook. Always carry the service book of your vehicle in the glove box or refer to the nearest authorized Honda service center for any issues.</p>
                            <p>For any other questions visit <a href="https://www.honda2wheelersindia.com/FAQ/BrowseByProduct?m=2"> https://www.honda2wheelersindia.com/FAQ/BrowseByProduct?m=2</a></p>

                            <b>Optimizing fuel economy</b>
                            <p>Get upto 25% more fuel efficiency in your Honda 2 Wheeler by following these tips:
                            Accelerate steadily, brake gradually. Plan your trip, pace your speed and avoid roads with heavy traffic. Sudden bursts of acceleration can prove to be harmful, and costly.
                            Rolling in neutral saves 15-20 cc of fuel. Ensure perfect wheel balance and you can cover up to 20% of your distance in neutral.
                                            Insufficient tyre pressure is a drain on fuel. Check the owner's manual for the correct tyre pressure for your vehicle.</p>
                        </div>
                    </Tab>
                    <Tab eventKey="driving" title="Driving">
                        <Row style={{ marginTop: 15 }}>
                            <Col md={6}>
                                <b>Relax</b>
                                <p>Stress very often leads to aggressive driving that can cause accidents. </p>
                                <b>Always follow safety rules</b>
                                <p>Always wear your Helmet even on short trips. Don't drink and drive. Never let minors or people without a valid driving license drive your vehicle.</p>
                                <b>Tips for night driving</b>
                                <p>Aim your headlights properly. Misaimed headlights blind other drivers and reduce your ability to see the road.
                                If an oncoming vehicle doesn't lower beams from high to low, avoid the glare by watching the left edge of the road.
                                Reduce your speed and increase your following distances. It is more difficult to judge other vehicle's speeds and distances at night.
                                                        During long drives, make frequent stops for light snacks and exercise. If you're too tired to drive, stop and get rest.</p>
                            </Col>
                            <Col md={6}>
                                <CustomCarousel imageArray={this.state.imageArray}></CustomCarousel>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="accident" title="Accident">
                        <div style={{ marginTop: 15 }}>
                            <b>What to do in an accident</b>
                            <p>Assess the level of injury and call ambulance if needed. Request assisstance from passers by. Give first aid to the injured.
                            Stay at the scene of the accident until police arrives, co-operate, exchange contact details with others involved in the accident.
                            If the ambulance is unavailable in the area and if someone is heavily injured drive him/her to the nearest hospital at the earliest.
Before driving your vehicle assess the level of damage done to the vehicle, call the tow service if the vehicle is not in good condition.</p>
                            <b>
                            </b></div>
                    </Tab>
                    <Tab eventKey="insurance" title="Insurance">
                        <div style={{ marginTop: 15 }}>
                            <b>All about Insurance</b>
                            <p>vehical insurance is one of the most important aspects of owning a vehical.
                                For procuring an insurance for your new vehicle or renewing your insurance please contact Insurance department at <b> 7043674004 </b> or you can write to us at <a href="mailto:fivestarhonda@yahoo.com">fivestarhonda@yahoo.com</a></p>
                            <b>
                            </b>
                        </div>
                    </Tab>
                </Tabs>
            </div >
        );
    }
}
