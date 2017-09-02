import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps

  update = (e) => {
    this.props.update(e.target.value)
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={this.update}  disabled={this.props.allowEdit === 'false'}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}
