import React, { Component } from 'react';
import {} from 'styled-components';

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick = {() => {this.props.handleDurationSelection()}}>{this.props.text}</button>
      </React.Fragment>
    );
  }
}

export default Button;
