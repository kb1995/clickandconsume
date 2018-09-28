import React, { Component } from 'react';
import App from './App'

export const MyContext = React.createContext();

const VideoLibrary = [
  {
    url: "https://www.youtube.com/watch?v=nl2mQ2HiJZc",
    LengthCategory: 0,
  },
  {
    url: "https://www.youtube.com/watch?v=mk5Dwg5zm2U",
    LengthCategory: 0,
  },
  {
    url: "https://www.youtube.com/watch?v=Q3GGdtn9poo",
    LengthCategory: 1,
  },
]

class Context extends Component {
  state = {
    videoURL: "https://www.youtube.com/watch?v=nl2mQ2HiJZc",
    currentCategory: null,
  }

  handleButtonCategory = (category) => {
    this.setState({
      currentCategory: category
    }, this.handleFiltering)
  }

  // helpers
  // ---
  handleFiltering = () => {
    let filteredArray = VideoLibrary.filter(video => video.LengthCategory === this.state.currentCategory)
    this.handleRandomVideo(filteredArray)
  }

  handleRandomVideo = (arr) => {
    var randomVideo = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomVideo)
    this.setState({
      videoURL: randomVideo.url
    })
  }
  // ---

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleButtonCategory: this.handleButtonCategory,
      }}>
        <App />
      </MyContext.Provider>
    );
  }
}

export default Context;
