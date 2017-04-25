import React, {PropTypes, Component } from 'react';
import Glyphicon from './Glyphicon';
import {mapMenuStyle, mapMenuFontStyle} from '../style/MapMenu_styles'
import MenuButton from './MenuButton';
import {Modal, Col, Row, Grid} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddLocationValidationForm from './AddLocationValidationForm';

class AddLocationOverlay extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false
        };
        this.closeLoginPopup = this.closeLoginPopup.bind(this);
    }

    closeLoginPopup() {
        this.props.closeOverlayCallback();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({showModal: nextProps.show});
    }

    render() {
        const containerComponentStyle = {
            paddingTop: '20px'
        };

        return (
            <div>
                <MuiThemeProvider>
                    <Modal show={this.props.show}
                      onHide={this.closeLoginPopup}
                      backdropStyle={{
                        zIndex: 12
                    }} style={{
                        marginTop: '70px'
                    }} bsSize="sm" aria-labelledby="contained-modal-title-lg">
                        <Modal.Header closeButton style={{textAlign: 'center'}}>
                            <Modal.Title>Add Location</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{paddingTop: '0px'}}>
                            <AddLocationValidationForm
                              categories={this.props.categories}
                              lat={this.props.lat}
                              lng={this.props.lng}
                              closeLoginPopup={this.closeLoginPopup}
                              />
                        </Modal.Body>
                    </Modal>
                </MuiThemeProvider>
            </div>
        )
    }
}

AddLocationOverlay.propTypes = {
    categories: PropTypes.any,
    show: PropTypes.boolean,
    closeOverlayCallback: PropTypes.func,
    lat: PropTypes.number,
    lng: PropTypes.number
}

AddLocationOverlay.defaultProps = {
    show: false
};


export default AddLocationOverlay
