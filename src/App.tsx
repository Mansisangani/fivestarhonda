import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomCarousel from './CommonComponent/CustomCarousel';
import { CustomImageGrid } from './CommonComponent/CustomImageGrid';


export interface IAppProps { }

export interface IAppState {

}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {

    };
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <div>
        <CustomCarousel></CustomCarousel>
        <Row style={{ marginTop: 15 }}>
          <Col md={4}>
            <div>Test</div>
          </Col>
          <Col md={8}>
            <CustomImageGrid></CustomImageGrid>
          </Col>
        </Row>
      </div>
    );
  }
}
