import * as React from 'react';

export interface IAboutUsProps { }

export interface IAboutUsState {
  title: string;
}

export default class AboutUs extends React.Component<IAboutUsProps, IAboutUsState> {

  constructor(props: IAboutUsProps) {
    super(props);
    this.state = {
      title: 'About Us'
    };
  }

  public render(): React.ReactElement<IAboutUsProps> {
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}
