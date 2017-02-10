import React, {PropTypes, Component } from 'react';

class MenuPanel extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const catBtnStyle = {
      cursor: 'pointer'
    }

    return (
      <div>
        {this.props.show?
          <div>
            Menu Panel
            <div onClick={() => {this.props.getAllLocation()}}
              style={catBtnStyle}>
              ALL
            </div>
            <div onClick={() => {this.props.changeCategory('cat1')}}
              style={catBtnStyle}>
              Home
            </div>
            <div onClick={() => {this.props.changeCategory('cat2')}}
              style={catBtnStyle}>
              Diner
            </div>
            <div onClick={() => {this.props.changeCategory('cat3')}}
              style={catBtnStyle}>
              Pub
            </div>
          </div>
          :''
        }
      </div>
    )
  }
}

MenuPanel.propTypes = {
  changeCategory: PropTypes.func,
  getAllLocation: PropTypes.func,
  category: PropTypes.any,
  show: PropTypes.boolean
}

MenuPanel.defaultProps = {

};

export default MenuPanel
