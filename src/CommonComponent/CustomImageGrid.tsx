import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// @ts-ignore
import ImgsViewer from 'react-images-viewer';

const galleryImages =
    [{ src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` },
    { src: `${process.env.PUBLIC_URL}/gridImage/h1.jpg` }
    ];

export interface ICustomImageGridProps { }

export interface ICustomImageGridState {
    currImg: any;
    viewerIsOpen: boolean;
}

export class CustomImageGrid extends React.Component<ICustomImageGridProps, ICustomImageGridState> {

    constructor(props: ICustomImageGridProps) {
        super(props);

        this.state = {
            viewerIsOpen: false,
            currImg: 0,
        };
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

    private openImgsViewer = (index: any) => {
        this.setState({
            currImg: index,
            viewerIsOpen: true,
        })
    }

    public render(): React.ReactElement<ICustomImageGridProps> {
        return (
            <div>
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
                <ImgsViewer
                    imgs={galleryImages}
                    currImg={this.state.currImg}
                    isOpen={this.state.viewerIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeViewer}
                />
            </div>
        );
    }
}
