import React, { Component } from 'react';
import { MyContext } from '../../Context'
import {} from './Video.styled'
import ReactPlayer from 'react-player'

class Video extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactPlayer url={this.props.context.state.videoURL} playing width="100vw" height="100vh" />
      </React.Fragment>
    );
  }
}

const Parent = (props) => {
  return (
      <MyContext.Consumer>
          {context => <Video context={context} />}
      </MyContext.Consumer>
  )
}

export default Parent;
