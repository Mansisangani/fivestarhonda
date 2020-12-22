import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// @ts-ignore
import ImgsViewer from 'react-images-viewer';

export interface ICustomImageGridProps {
    galleryImages: { src: string }[];
    currImg: any;
    viewerIsOpen: boolean;
    gotoPrevious: any;
    gotoNext: any;
    closeViewer: any;
}

export interface ICustomImageGridState {

}

export class CustomImageGrid extends React.Component<ICustomImageGridProps, ICustomImageGridState> {

    constructor(props: ICustomImageGridProps) {
        super(props);
        this.state = {

        };
    }

    public render(): React.ReactElement<ICustomImageGridProps> {
        return (
            <div>

                <ImgsViewer
                    imgs={this.props.galleryImages}
                    currImg={this.props.currImg}
                    isOpen={this.props.viewerIsOpen}
                    onClickPrev={this.props.gotoPrevious}
                    onClickNext={this.props.gotoNext}
                    onClose={this.props.closeViewer}
                />
            </div>
        );
    }
}
