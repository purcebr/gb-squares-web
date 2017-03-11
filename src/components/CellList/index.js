import React from 'react';
import Wrapper from './Wrapper'

export default class CellList extends React.Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}
