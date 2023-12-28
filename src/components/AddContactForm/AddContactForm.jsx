import React, { Component } from 'react'
import css from './AddProfileForm.module.css'

export class AddContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };
    this.props.handleAddContact(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleFormSubmit}>
        <label  className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input className={css.formInput} type="tel" name="number" required />
        </label>
        <button className={css.formButton} type="submit">Add contact</button>
      </form>
    );
  }
}