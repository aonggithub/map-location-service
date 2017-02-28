import React, {PropTypes, Component } from 'react';
import Glyphicon from './Glyphicon';
import {mapMenuStyle, mapMenuFontStyle} from '../style/MapMenu_styles'
import MenuButton from './MenuButton';
import {Modal, Col, Row, Grid} from 'react-bootstrap';

class MenuPanel extends Component {
  constructor (props, context) {
    super(props, context);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(){
    this.setState({showModal:true});
  }

  close(){
    this.setState({showModal:false});
  }

  render() {
    const leftCatBtnStyle = {
      cursor: 'pointer',
      float: 'left',
      textAlign: 'left',
      margin: '10px 0px'
    }

    const rightCatBtnStyle = {
      cursor: 'pointer',
      float: 'right',
      textAlign: 'left',
      margin: '10px 0px'
    }

    const menuPanelStyle = {
      width:'95%',
      margin: '10px 10px',
      padding: '20px 0px',
      boxShadow: '1px 1px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#FFFFFF'
    }

    let categoryMenu = this.props.categories.map( (category, i) => {
      return <Col onClick={() => {
                              this.props.changeCategory('cat'+ category.id)
                              this.close();
                            }
                          }
                style={ (i%2==0) ?leftCatBtnStyle:rightCatBtnStyle }
                xs={6} md={6}>
                <Row>
                  <Col xs={5} md={3}>
                    <div style={mapMenuStyle}><Glyphicon name={category.icon} size="20px"/></div>
                  </Col>
                  <Col xs={7} md={8} style={{verticalAlign:'middle',height:'50px', lineHeight: '50px'}}>
                    <span style={mapMenuFontStyle}>{category.name}</span>
                  </Col>
                </Row>
              </Col>
          }, this);

    categoryMenu.push(<div style={{clear:'both'}}></div>);

    const backdropStyle = {
      zIndex: 11
    }

    return (
      <div>
        <MenuButton buttonFunc={this.open} />
        {this.props.show?
          <Modal show={this.state.showModal}
            onHide={this.close}
            backdropStyle={backdropStyle}>
            <div>
              <div style={{padding: '5px 0px', textAlign: 'center', backgroundColor: '#F0F0F0'}}>
                <div style={menuPanelStyle}>
                  <Row style={{padding: '0px 0px 0px 10px'}}>
                    {categoryMenu}
                  </Row>
                </div>
              </div>
            </div>
          </Modal>
          :''
        }
      </div>
    )
  }
}

MenuPanel.propTypes = {
  changeCategory: PropTypes.func,
  getAllLocation: PropTypes.func,
  categories: PropTypes.any,
  show: PropTypes.boolean
}

MenuPanel.defaultProps = {

};

export default MenuPanel
