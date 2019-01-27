import React, { ReactChild, ReactNode, Component } from 'react';
import '../stylesheets/Section.css';

interface Props {
  className?: string,
  children: ReactNode
};

export class Section extends Component<Props, any> {
  render() {
    const { children, className } = this.props;
    return(
      <section
        className={`section ${className}`}
      >
        {children}
      </section>
    )
  }
}