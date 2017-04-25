import React, {PropTypes, Component } from 'react';
import { addServiceLoc } from '../action';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

class AddLocationValidationForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            category: '1',
            formPassValidate: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("Run handleChange");
        const target = event.target
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
        console.log(this.state);
        this.showInputError(name);
    }

    showFormError(){
      const inputs = document.querySelectorAll('input');
      let isFormValid = true;

      inputs.forEach(input => {
        const isInputValid = this.showInputError(input.name);

        if (!isInputValid) {
          isFormValid = false;
        }
      });

    return isFormValid;
    }

    showInputError(refName){
      const validity = this.refs[refName].validity;
      const label = refName;
      const error = document.getElementById(`${refName}Error`);
      console.log("validity.valid");
      console.log(this.refs[refName]);
      console.log(this.refs[refName].value);
      console.log(validity);

      if (!validity.valid) {
        if (validity.valueMissing) {
          error.textContent = `${label} is a required field`;
        } else if (validity.typeMismatch) {
          error.textContent = `${label} should be a valid email address`;
        } else if (isPassword && validity.patternMismatch) {
          error.textContent = `${label} should be longer than 4 chars`;
        } else if (isPasswordConfirm && validity.customError) {
          error.textContent = 'Passwords do not match';
        }
        return false;
      }
      error.textContent = '';
      return true;
    }



    handleSubmit(event) {
      event.preventDefault();

      const target = event.target
      const value = target.value;
      const name = target.name;

      console.log("handleSubmit");
      console.log('component state', JSON.stringify(this.state));

      if(!this.showFormError()){
        console.log('form is invalid: do not submit');
      } else {
        console.log('form is valid: submit');
      }

      //placeName, category, lat, lng
      //this.props.addServiceLocation(this.state.placeName, this.state.category, this.props.lat, this.props.lng);

      this.props.closeLoginPopup;
    }

    render() {

        let categoryMenuTemp = this.props.categories.map((category, i) => {
            return <option value={category.id}>{category.name}</option>
        });

        let categoryMenu =
          <select className='form-control'
            name="category"
            ref="category"
            onChange={this.handleChange}>
              {categoryMenuTemp}
          </select>

        const required = value => value ? undefined : 'Required';

        const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
          <div>
            <label>{label}</label>
            <div>
              <input {...input} placeholder={label} type={type} className={className}/>
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
          </div>
        )

        const containerComponentStyle = {
            paddingTop: '20px'
        };

        const errorStyle = { color: 'red',
          fontSize: '12px',
          marginTop: '5p'
        }

        return (
            <form novalidate>
                <div style={containerComponentStyle}>
                  <label id="categoryLabel">Select category</label>
                </div>
                <div>{categoryMenu}</div>
                <div style={errorStyle} id="categoryError" />
                <div style={containerComponentStyle}>
                  <label id="placeNameLabel">Enter name</label>
                </div>
                <div>
                  <input name="placeName"
                    ref="placeName"
                    type="text"
                    className='form-control'
                    onChange={this.handleChange}
                    required />
                </div>
                <div style={errorStyle} id="placeNameError" />
                <div style={containerComponentStyle}>
                    <button className='btn btn-primary btn-block' style={{
                        backgroundColor: 'rgb(30, 136, 229)'
                    }} onClick= {this.handleSubmit} >Continue</button>
                </div>
            </form>
        )
    }
}

AddLocationValidationForm.propTypes = {
    categories: PropTypes.any,
    lat: PropTypes.number,
    lng: PropTypes.number,
    closeLoginPopup:  PropTypes.func
}

AddLocationValidationForm.defaultProps = {
}

const mapDispatchToProps = (dispatch) => {
    return {
        addServiceLocation: (placeName, category, lat, lng) => {
            dispatch(addServiceLoc(placeName, category, lat, lng));
        }
    }
}

AddLocationValidationForm = reduxForm({
  form: 'addLocationValidation' // a unique identifier for this form
})(AddLocationValidationForm)

//AddLocationValidationForm = connect(null, mapDispatchToProps)(AddLocationValidationForm)

export default AddLocationValidationForm
