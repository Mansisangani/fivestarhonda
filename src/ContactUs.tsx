import * as React from 'react';

export interface IContactUsProps { }

export interface IContactUsState {
  title: string;
}

export default class ContactUs extends React.Component<IContactUsProps, IContactUsState> {

  constructor(props: IContactUsProps) {
    super(props);
    this.state = {
      title: 'Contact Us'
    };
  }

  public render(): React.ReactElement<IContactUsProps> {
    return (
      <div>{this.state.title}
      </div>
    );
  }
}
