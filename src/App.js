import React, { Component } from 'react';
import Video from './components/Video/Video'
import ButtonList from './components/ButtonList/ButtonList'

class App extends Component {

  state = {
    selected: false,
  }

  handleDurationSelection = () => {
    this.setState({
      selected: true
    })
  }

  render() {
    let selected = this.state.selected;

    if (selected) {
      return (
        <React.Fragment>
          <Video />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <ButtonList handleDurationSelection = {this.handleDurationSelection} />
        </React.Fragment>
      )
    }
  }
}

export default App;
