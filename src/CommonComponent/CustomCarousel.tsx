import * as React from 'react';
import { Carousel, Row } from 'react-bootstrap';

export interface ICustomCarouselProps {
    imageArray: any[];
}

export interface ICustomCarouselState {

}

export default class CustomCarousel extends React.Component<ICustomCarouselProps, ICustomCarouselState> {

    public render(): React.ReactElement<ICustomCarouselProps> {
        return (
            <Row>
                <Carousel>
                    {this.props.imageArray.map((val) => {
                        return (
                            <Carousel.Item>
                                <img style={{ width: '100%' }} src={val} alt="Carousel"></img>
                            </Carousel.Item>
                        );
                    })
                    }
                </Carousel>
            </Row>
        );
    }
}
