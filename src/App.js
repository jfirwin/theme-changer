import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }

  updateColor = (color) => {
    this.setState({fontColor: color})
  }

  updateSize = (size) => {
    this.setState({fontSize: Number(size)})
  }

  updateFamily = (family) => {
    this.setState({fontFamily: family})
  }

  updateEditStatus = (status) => {
    this.setState({allowEdit: status})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle
            update={this.updateEditStatus}
          />
          <ColorChanger
             allowEdit={this.state.allowEdit} update={this.updateColor}
          />
          <SizeChanger
             allowEdit={this.state.allowEdit} update={this.updateSize}
          />
          <FamilyChanger
             allowEdit={this.state.allowEdit} update={this.updateFamily}
          />
        </div>
        <div className="textArea">
          <TextContainer
            fontFamily={this.state.fontFamily}
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
          />
        </div>
      </div>
    )
  }
}

export default App;
