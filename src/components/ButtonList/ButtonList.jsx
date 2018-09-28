import React, { Component } from 'react';
import Button from '../Button/Button'
import {FlexWrapper} from './ButtonList.styled'

class ButtonList extends Component {

  render() {
    const buttonArr = [
      {
        text: "<5 mins",
        color: "#4286f4",
        LengthCategory: 0,
      },
      {
        text: "5-10 mins",
        color: "#e08626",
        LengthCategory: 1,
      },
      {
        text: "10-15 mins",
        color: "#c12d1d",
        LengthCategory: 2,
      },
      {
        text: "15-20 mins",
        color: "#7817a5",
        LengthCategory: 3,
      },
      {
        text: ">20 mins",
        color: "#17a541",
        LengthCategory: 4,
      },
    ]

    const buttonItem = buttonArr.map((val, idx) => {
      return(
        <Button key = {idx} text = {val.text} color = {val.color} LengthCategory = {val.LengthCategory} />
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
