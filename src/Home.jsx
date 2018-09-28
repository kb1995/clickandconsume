import React, { Component } from 'react';
import Video from './components/Video/Video'
import { MyContext } from './Context'
import ButtonList from './components/ButtonList/ButtonList'

class Home extends Component {
  render() {
    const context = this.props.context;
    if (context.state.videoPlaying) {
      return (
        <React.Fragment>
          <Video />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <ButtonList />
        </React.Fragment>
      )
    }
  }
}

const Parent = (props) => {
  return (
    <MyContext.Consumer>
      {context => <Home context={context} />}
    </MyContext.Consumer>
  )
}

export default Parent;
