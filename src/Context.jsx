import React, { Component } from 'react';
import App from './App'
import {VideoLibrary} from './assets/VideoLibrary'

export const MyContext = React.createContext();

class Context extends Component {
  state = {
    videoURL: null,
    videoIndex: null,
    currentCategory: null,
    moreVideos: [],
    videoPlaying: false,
  }

  handlePlayVideo = (LengthCategory) => {
    this.setState({
      videoPlaying: true,
    }, this.handleButtonCategory(LengthCategory))
  }

  handleGoToHome = () => {
    this.setState({
      videoPlaying: false,
      currentCategory: null,
      videoURL: null,
    })
  }

  handleButtonCategory = (category) => {
    this.setState({
      currentCategory: category
    }, this.handleFiltering)
  }

  handlePrevVideo = () => {
    if (this.state.videoIndex !== 0) {
      this.setState({
        videoURL: this.state.moreVideos[this.state.videoIndex - 1].url,
        videoIndex: this.state.videoIndex - 1,
      })
    } else {
      this.setState({
        videoURL: this.state.moreVideos[this.state.moreVideos.length - 1].url,
        videoIndex: this.state.moreVideos.length - 1,
      })
    }
  }

  handleNextVideo = () => {
    if (this.state.videoIndex !== this.state.moreVideos.length - 1) {
      this.setState({
        videoURL: this.state.moreVideos[this.state.videoIndex + 1].url,
        videoIndex: this.state.videoIndex + 1,
      })
    } else {
      this.setState({
        videoURL: this.state.moreVideos[0].url,
        videoIndex: 0,
      })
    }
  }

  // helpers
  // ---
  handleFiltering = () => {
    let filteredArray = VideoLibrary.filter(video => video.LengthCategory === this.state.currentCategory)
    this.setState({
      moreVideos: filteredArray
    }, this.handleRandomVideo(filteredArray))
  }

  handleRandomVideo = (filteredArray) => {
    var idx = Math.floor(Math.random() * filteredArray.length)
    var randomVideo = filteredArray[idx];
    this.setState({
      videoURL: randomVideo.url,
      videoIndex: idx
    })
  }
  // ---

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleButtonCategory: this.handleButtonCategory,
        handleGoToHome: this.handleGoToHome,
        handlePlayVideo: this.handlePlayVideo,
        handlePrevVideo: this.handlePrevVideo,
        handleNextVideo: this.handleNextVideo,
      }}>
        <App />
      </MyContext.Provider>
    );
  }
}

export default Context;
