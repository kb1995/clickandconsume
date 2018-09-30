import React, { Component } from 'react';
import { MyContext } from '../../Context'
import {VideoWrapper} from './Video.styled'
import ReactPlayer from 'react-player'
import HomeIcon from '../HomeIcon/HomeIcon'
import PrevNext from '../PrevNext/PrevNext'
import $ from 'jquery'

class Video extends Component {
  
  render() {
    return (
      <VideoWrapper>
        <ReactPlayer
          url={this.props.context.state.videoURL}
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
          width="100vw"
          height="90vh"
          playing
          controls
        />
        <HomeIcon/>
        <PrevNext/>
      </VideoWrapper>
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
