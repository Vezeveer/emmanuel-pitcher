import React, { Component } from 'react';
import './contact.css'

let emailValid = false;

export default class ContactForm extends Component {
  componentDidMount() {
    const email = document.querySelector('#email')
    const button = document.querySelector('.submit-button')
    const form = document.querySelector('#contact')
    const subject = document.querySelector('#subject')
    const message = document.querySelector('#message')

    form.addEventListener('keyup', () => {
      emailValid = email.checkValidity();
      if (emailValid && subject.value.length > 1 && message.value.length > 10) {
        button.disabled = false
        //submit
      } else {
        button.disabled = true
        //notify user
      }
    })

    button.addEventListener('click', () => {
      form.submit()
    })
  }
  render() {
    return (
      <div className='contact-form-container'>
        <form id="contact" className="contact-form" action="https://formspree.io/mortalmanny@live.com" method="POST" > {//action="https://formspree.io/mortalmanny@live.com" method="POST"
        }
          <h4>Contact Me</h4>
          <label className="email">
            <div>
              Email:
            </div>
            <input id="email" type="email" name="email" required />
          </label>
          <label>
            <div>
              Subject:
            </div>
            <input id="subject" type="text" name="subject" required />
          </label>
          <label>
            <div className="message-label">
              Message:
          </div>
            <textarea id="message" type="text" name="message" rows="5" cols="50" required></textarea>
          </label>
          <button className="submit-button" disabled>Send</button>
        </form>
      </div>

    )
  }
};
