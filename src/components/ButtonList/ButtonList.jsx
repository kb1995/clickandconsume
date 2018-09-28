import React, { Component } from 'react';
import Button from '../Button/Button'
import {FlexWrapper} from './ButtonList.styled'

class ButtonList extends Component {

  render() {
    const buttonArr = [
      {
        text: "<5 mins",
        color: "#333",
        LengthCategory: 0,
      },
      {
        text: "5-10 mins",
        color: "#555",
        LengthCategory: 1,
      },
      {
        text: "10-15 mins",
        color: "#EEE",
        LengthCategory: 2,
      },
      {
        text: "15-20 mins",
        color: "#BBB",
        LengthCategory: 3,
      },
    ]

    const buttonItem = buttonArr.map((val, idx) => {
      return(
        <Button key = {idx} handleDurationSelection = {this.props.handleDurationSelection} text = {val.text} color = {val.color} LengthCategory = {val.LengthCategory} />
      )
    })
    return (
      <FlexWrapper>
        {buttonItem}
      </FlexWrapper>
    );
  }
}

export default ButtonList;
