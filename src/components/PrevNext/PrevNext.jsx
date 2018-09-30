import React, { Component } from 'react';
import { MyContext } from '../../Context'
import {Wrapper} from './PrevNext.styled'

class PrevNext extends Component {
  render() {
    return (
      <Wrapper>
        <button onClick={() => this.props.context.handlePrevVideo()}>Prev</button>
        <button onClick={() => this.props.context.handleNextVideo()}>Next</button>
      </Wrapper>
    );
  }
}

const Parent = (props) => {
  return (
    <MyContext.Consumer>
      {context => <PrevNext context={context} />}
    </MyContext.Consumer>
  )
}

export default Parent;
