import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export interface IHelplineProps { }

export interface IHelplineState {
  allHelLine: any;
}

export default class Helpline extends React.Component<IHelplineProps, IHelplineState> {

  constructor(props: IHelplineProps) {
    super(props);

    this.state = {
      allHelLine: [{
        name: 'Sales',
        img: `${process.env.PUBLIC_URL}/helpline/Sales.jpeg`,
        text: '7043419500'
      }, {
        name: 'Services',
        img: `${process.env.PUBLIC_URL}/helpline/services.png`,
        text: '	9825247891 , 0285- 2658888 , 0285-2627623'
      }, {
        name: 'Insurance Renewal',
        img: `${process.env.PUBLIC_URL}/helpline/insurance.jpeg`,
        text: '	7043674004'
      }, {
        name: 'Accident helpline number',
        img: `${process.env.PUBLIC_URL}/helpline/accident.jpeg`,
        text: '9825247891'
      }, {
        name: 'RTO Agent',
        img: `${process.env.PUBLIC_URL}/helpline/rto.png`,
        text: '9825248441'
      }, {
        name: 'For General Inquiry',
        img: `${process.env.PUBLIC_URL}/fivestart-logo.png`,
        text: '	0285 - 2627623'
      }]
    };
  }

  public render(): React.ReactElement<IHelplineProps> {
    return (
      <div>
        <Row>
          {this.state.allHelLine.map((val: any) => {
            return <Col md={4} style={{ marginTop: 15 }}>
              <Card style={{ height: '25rem' }}>
                <Card.Img variant="top" src={val.img} style={{ height: 250, borderBottom: '1px solid rgba(0,0,0,.125)' }} />
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>{val.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          })}
        </Row>
      </div>
    );
  }
}
