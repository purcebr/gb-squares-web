import React from 'react';
import Wrapper from './Wrapper'
import CellInner from './CellInner'

export default class Cell extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    cellIndex: React.PropTypes.number,
    onCellClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onCellClick = props.onCellClick.bind(this, this.props.cellIndex);
  }

  render() {
    return (
      <Wrapper  >
        <CellInner onClick={this.onCellClick} active={this.props.active}></CellInner>
      </Wrapper>
    );
  }
}
