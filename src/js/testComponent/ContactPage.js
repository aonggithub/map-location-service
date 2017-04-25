import ContactForm from './ContactForm';
import React, {PropTypes, Component } from 'react';


class ContactPage extends Component {

  constructor (props, context) {
    super(props, context);
  }

  submit(values){
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    );
  }
}

export default ContactPage
