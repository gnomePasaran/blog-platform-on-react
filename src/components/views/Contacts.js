import React from 'react';

import { assign, set } from 'lodash/object';

import classNames from 'classnames';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  clearErrors(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form','errors', fieldName],
      false
    ));
  }

  onChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearErrors('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              ['form', 'errors', 'email'],
              true
            ));
          break;
      }

      this.setState(set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
      ));
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <h1>Contacts</h1>
        <form onSubmit={this.onSubmit} className="ui form">
          <Text
            name="fullName"
            value={fullName}
            onChange={this.onChange('fullName')}
            label="Full name"
          />
          <Text
            name="email"
            value={email}
            onChange={this.onChange('email')}
            error={this.state.form.errors.email}
            label="Email"
          />
          <TextArea
            name="message"
            value={message}
            onChange={this.onChange('message')}
            label="Message"
          />
          <input type="submit" value="Submit" className="ui button primary" />
        </form>
      </div>
    );
  }
}

export default Contacts;

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      name={name}
      id={name}
      className="ui field"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextArea = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor={name}>{label}:</label>
    <textarea
      name={name}
      id={name}
      className="ui field"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);
