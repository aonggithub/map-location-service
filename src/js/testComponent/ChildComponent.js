import React, { Component } from 'react';
import { render } from 'react-dom';

class ChildComponent extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Child Component
      </div>
    )
  }
}

export default (ChildComponent)
