import React, { Component } from 'react';
import Button from '../Button/Button'

class ButtonList extends Component {

  render() {
    const buttonArr = [
      {
        text: "<5 mins",
        color: "#333",
      },
      {
        text: "5-10 mins",
        color: "#555",
      },
    ]

    const buttonItem = buttonArr.map((val, idx) => {
      return(
        <Button key = {idx} handleDurationSelection = {this.props.handleDurationSelection} text = {val.text} color = {val.color}/>
      )
    })
    return (
      <React.Fragment>
        {buttonItem}
      </React.Fragment>
    );
  }
}

export default ButtonList;
