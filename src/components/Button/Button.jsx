import React, { Component } from 'react';
import { MyContext } from '../../Context'
import {ButtonItem} from './Button.styled';

class Button extends Component {

  handleClick = () => {
    this.props.handleDurationSelection()
    this.props.context.handleButtonCategory(this.props.LengthCategory);
  }
  render() {
    return (
      <div>
        <ButtonItem onClick = {this.handleClick}>{this.props.text}</ButtonItem>
      </div>
    );
  }
}

const Parent = (props) => {
  return (
      <MyContext.Consumer>
          {context => <Button {...props} context={context} />}
      </MyContext.Consumer>
  )
}

export default Parent;

