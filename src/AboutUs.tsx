import * as React from 'react';

export interface IAboutUsProps { }

export interface IAboutUsState { }

export default class AboutUs extends React.Component<IAboutUsProps, IAboutUsState> {

  constructor(props: IAboutUsProps) {
    super(props);
  }

  public render(): React.ReactElement<IAboutUsProps> {
    return (
      <div>
      </div>
    );
  }
}
