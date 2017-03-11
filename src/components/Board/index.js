import React from 'react';
import Wrapper from './Wrapper'
import Cell from '../Cell'
import CellList from '../CellList'
import Rebase from 're-base'

var base = Rebase.createClass({
      apiKey: "AIzaSyBknyx-Vbt6EnDyc4KmeL3nG1VmCkao1A4",
      authDomain: "gbsquares.firebaseapp.com",
      databaseURL: "https://gbsquares.firebaseio.com",
}, 'gbsquares');

export default class Board extends React.Component {
  static propTypes = {
    cells: React.PropTypes.array,
    changeCell: React.PropTypes.func
  };

  constructor() {
    super();

    let cells = [];
    for(let i = 0; i < 12; i++) {
      cells.push({
        active: false
      });
    }

    this.state = { cells }

    this.setCellState = this.setCellState.bind(this);

  }

  componentDidMount() {
    base.syncState(`cells`, {
      context: this,
      state: 'cells',
      asArray: true
    });
  }

  renderCells() {
    return (
      <CellList>
        {this.state.cells.map( (cell, index) => {
          return (<Cell key={"cell-" + index} onCellClick={this.setCellState} cellIndex={index} active={cell.active} />);
        })}
      </CellList>
    );
  }

  setCellState(activeIndex) {

    let cells = this.state.cells;

    // Reset cells, only one can be active at a time.

    cells.map( (cell, index) => {
      if(index === activeIndex) {
        cell.active = true;
        return cell;
      } else {
        cell.active = false;
        return cell;
      }
    });

    this.setState({
      cells
    });
  }

  render() {

    let content = (<div></div>);

    if(this.state.cells) {
      content = (this.renderCells(this.state.cells));
    }

    return (
      <Wrapper>
        { content }
      </Wrapper>
    );
  }
}

// const mapFirebaseToProps = (props, ref) => ({
//   cells: 'cells',
//   toggleCellActive: function(index) {
//     console.log(index)
//   }
// });
