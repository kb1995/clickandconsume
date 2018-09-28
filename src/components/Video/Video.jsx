import React, { Component } from 'react';
import { MyContext } from '../../Context'
import { } from './Video.styled'
import ReactPlayer from 'react-player'
import HomeIcon from '../HomeIcon/HomeIcon'

class Video extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={this.props.context.state.videoURL}
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
          width="100vw"
          height="100vh"
          playing
          controls
        />
        <HomeIcon/>
      </div>
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
