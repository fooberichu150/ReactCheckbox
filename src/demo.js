import * as React from "react";

import CheckBox from "./checkbox";
import FunctionalCheckbox from "./functional-checkbox";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      box1: true,
      box2: false,
      box3: false,
      box4: false
    };

    this.onCheckStateChanged = this.onCheckStateChanged.bind(this);
  }

  onCheckStateChanged(event) {
    let state = this.state;
    state[event.name] = event.checkState;

    this.setState(state);
  }

  render() {
    return (
      <div className="demo-container">
        <div className="demo-box">
          <CheckBox
            name="box1"
            label="Click me"
            checked={this.state.box1}
            onChange={this.onCheckStateChanged}
          />
        </div>
        <div className="demo-box">
          <CheckBox
            name="box2"
            label="Click me too"
            size="xs"
            checked={this.state.box2}
            onChange={this.onCheckStateChanged}
          />
        </div>
        <div className="demo-box">
          <CheckBox
            classNames={{ checkBoxClass: "blue", labelClass: "reddish label" }}
            name="box3"
            label="Oh, click me!"
            size="3x"
            checked={this.state.box3}
            onChange={this.onCheckStateChanged}
          />
        </div>
        <div className="demo-box">
          <FunctionalCheckbox
            name="box4"
            label="Functional Checkbox!"
            size="2x"
            checked={this.state.box4}
            onChange={this.onCheckStateChanged}
          />
        </div>
      </div>
    );
  }
}
