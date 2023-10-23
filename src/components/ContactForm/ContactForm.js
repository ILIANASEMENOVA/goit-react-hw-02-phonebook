import { Component } from 'react';
import FormStyle from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const isExist = this.props.addContact(this.state);
    if (!isExist) this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </FormStyle>
    );
  }
}
