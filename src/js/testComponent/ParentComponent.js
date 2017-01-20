import React, { Component } from 'react';
import { render } from 'react-dom';
class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("this.props.children");
    console.log(this.props.children);
    this.props.children.forEach(function(element){
      console.log(element.props.let);
    });
    console.log("this.props.children");
  }

  render() {
    const style = {
      border: '5px solid #f44336',
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default ParentComponent
