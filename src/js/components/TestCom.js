
import React from 'react'
import ChildComponent from '../testComponent/ChildComponent';
import ParentComponent from '../testComponent/ParentComponent';
class TestCom extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    return (
      <div>
        <ParentComponent>
          <ChildComponent let="a"/>
          <ChildComponent let="b"/>
        </ParentComponent>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}

export default TestCom
