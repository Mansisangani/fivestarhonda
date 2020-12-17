import * as React from 'react';
import { Carousel, Row } from 'react-bootstrap';

export interface ICustomCarouselProps { }

export interface ICustomCarouselState {
    imageArray: any[];
}

export default class CustomCarousel extends React.Component<ICustomCarouselProps, ICustomCarouselState> {

    constructor(props: ICustomCarouselProps) {
        super(props);

        this.state = {
            imageArray: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg']
        };
    }

    public render(): React.ReactElement<ICustomCarouselProps> {
        return (
            <Row>
                <Carousel>
                    {this.state.imageArray.map((val) => {
                        return (
                            <Carousel.Item>
                                <img style={{ width: '100%' }} src={`${process.env.PUBLIC_URL}/carouselImage/${val}`} alt="Carousel"></img>
                            </Carousel.Item>
                        );
                    })
                    }
                </Carousel>
            </Row>
        );
    }
}
