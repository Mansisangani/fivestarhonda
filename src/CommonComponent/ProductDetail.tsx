import * as React from 'react';
import { Accordion, Button, Card, Col, Row, Tab, Table, Tabs, Image, ListGroup } from 'react-bootstrap';
import Data, { IProducts } from '../Data/Data';
// import { CustomImageGrid } from './CustomImageGrid';

export interface IProdcutDetailProps {
    ProductNumber: number;
    ProductType: "Scooter" | "Motorcycle";
}

export interface IProdcutDetailState {
    data: IProducts | undefined;
    selectedImageIndex: number;
    currImg: number;
    viewerIsOpen: boolean;
}

export default class ProdcutDetail extends React.Component<IProdcutDetailProps, IProdcutDetailState> {

    constructor(props: IProdcutDetailProps) {
        super(props);
        let tempData: IProducts;
        if (this.props.ProductType === "Motorcycle") {
            let tempDataArray = Data.motorCycle.filter(t => t.Id === this.props.ProductNumber);
            if (tempDataArray.length > 0) {
                tempData = tempDataArray[0];
            }
        } else if (this.props.ProductType === "Scooter") {
            let tempDataArray = Data.scooter.filter(t => t.Id === this.props.ProductNumber);
            if (tempDataArray.length > 0) {
                tempData = tempDataArray[0];
            }
        }
        this.state = {
            //@ts-ignore
            data: tempData ? tempData : undefined,
            selectedImageIndex: 0,
            currImg: 0,
            viewerIsOpen: false
        };
    }

    private setSeletedImageIndex = (indexNumber: number) => {
        this.setState({
            selectedImageIndex: indexNumber
        });
    }

    //#region for CustomImageGrid
    // private openImgsViewer = (index: any) => {
    //     this.setState({
    //         currImg: index,
    //         viewerIsOpen: true,
    //     })
    // }

    // private gotoPrevious = () => {
    //     this.setState({
    //         currImg: this.state.currImg - 1
    //     });
    // }

    // private gotoNext = () => {
    //     this.setState({
    //         currImg: this.state.currImg + 1
    //     });
    // }

    // private closeViewer = () => {
    //     this.setState({
    //         currImg: 0,
    //         viewerIsOpen: false
    //     })
    // }
    //#endregion

    public render(): React.ReactElement<IProdcutDetailProps> {
        return (
            <div>
                {this.state.data !== undefined ?
                    <Row>
                        <Col md={10}>
                            <Image src={this.state.data.Photos[this.state.selectedImageIndex]?.src} fluid />
                            {/* <CustomImageGrid galleryImages={this.state.data.Photos} currImg={this.state.currImg}
                                viewerIsOpen={this.state.viewerIsOpen} closeViewer={this.closeViewer}
                                gotoNext={this.gotoNext} gotoPrevious={this.gotoPrevious}
                            ></CustomImageGrid> */}
                        </Col>
                        <Col md={2}>
                            <ListGroup>
                                {this.state.data.Photos.map((pval, index) => {
                                    return <ListGroup.Item onClick={() => this.setSeletedImageIndex(index)} active={index === this.state.selectedImageIndex}>
                                        <Image style={{ width: 120 }} src={pval.src} fluid />
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                        </Col>
                        <Col md={12}>
                            <h2>{this.state.data.Name}</h2>
                        </Col>
                        <Col md={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>About Vehicle</Card.Title>
                                    <Card.Text>
                                        {this.state.data.About}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} style={{ marginTop: 15 }}>
                            <Tabs defaultActiveKey="features" id="uncontrolled-tab-example">
                                <Tab eventKey="features" title="Features">
                                    <Row>
                                        {this.state.data.Features.map((val) => {
                                            return <Col md={4}>
                                                <Card style={{ height: 400, marginTop: 15 }}>
                                                    <Card.Img variant="top" style={{ height: 200 }} src={val.Image} />
                                                    <Card.Body>
                                                        <Card.Title>{val.Title}</Card.Title>
                                                        <Card.Text>
                                                            {val.Detail}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        })}
                                    </Row>
                                </Tab>
                                <Tab eventKey="specifications" title="Specifications">
                                    <Accordion defaultActiveKey="0" style={{ marginTop: 15 }}>
                                        {
                                            Object.keys(this.state.data.Specifications).map((tempval: any, index: number) => {
                                                return <Card>
                                                    <Card.Header>
                                                        <Accordion.Toggle as={Button} variant="link" eventKey={`${index}`}>
                                                            {tempval}
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey={`${index}`}>
                                                        <Card.Body>
                                                            <Table striped bordered hover>
                                                                <tbody>
                                                                    {this.state.data?.Specifications[tempval].map((val: any) => {
                                                                        return <tr>
                                                                            <td style={{ fontWeight: 'bold' }}>{val.Key}</td>
                                                                            <td>{val.value}</td>
                                                                        </tr>
                                                                    })}
                                                                </tbody>
                                                            </Table>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            })
                                        }
                                    </Accordion>
                                </Tab>
                                <Tab eventKey="ebrochure" title="E-Brochure">
                                    <br />
                                    <a style={{ textDecoration: "underline", fontSize: 18, fontWeight: 600, marginTop: 15 }} href={this.state.data.Ebrochure}>Click on this to download the brochure</a>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row> :
                    <div>No information found for the selected product. Please <a style={{ textDecoration: "underline" }} href={`/${this.props.ProductType}`}>Go back</a> and select the product again</div>}
            </div>
        );
    }
}
