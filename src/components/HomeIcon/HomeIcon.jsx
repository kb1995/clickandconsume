import React, { Component } from 'react';
import { MyContext } from '../../Context'
import { Icon } from './HomeIcon.styled'
import home from '../../assets/images/home.svg'

class HomeIcon extends Component {
  state = {
    idleTimer: null,
    idleState: false,
  }

  render() {
    return (
      <Icon 
        className={this.state.idleState? 'inactive': null} 
        onClick={() => { this.props.context.handleGoToHome() }}>
        <img src={home} />
      </Icon>
    );
  }
}

const Parent = (props) => {
  return (
    <MyContext.Consumer>
      {context => <HomeIcon context={context} />}
    </MyContext.Consumer>
  )
}

export default Parent;
