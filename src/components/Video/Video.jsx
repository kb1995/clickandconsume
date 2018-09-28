import React, { Component } from 'react';
import {} from './Video.styled'
import ReactPlayer from 'react-player'

class Video extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width="100vw" height="100vh" />

      </React.Fragment>
    );
  }
}

export default Video;
