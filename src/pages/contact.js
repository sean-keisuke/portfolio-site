/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from "react";
import styled from "styled-components";
import { Header, Footer } from "../components";

const ContactPageStyles = styled.div`
  padding: 20px 80px;
  h1 {
    text-align: center;
    padding-bottom: 20px;
    font-size: 48px;
    letter-spacing: 4px;
  }
  .contact-us-container {
    width: 50%;
    margin: auto;
  }
  .address-container {
    text-align: center;
    padding-bottom: 70px;
  }

  .submit-button-container {
    display: flex;
    justify-content: center;
  }

  p,
  legend,
  label {
    color: ${(props) => props.theme.text.paragraph};
  }
  label {
  }
  .field-container {
    margin: 0 0 24px;
    padding: 0;
    border: 0;
    display: flex;
  }
  .field-title {
    margin-left: 2%;
  }
  .field {
    margin-left: 2%;
    width: 100%;
  }
  .field.name-container {
    margin-left: 2%;
  }
  .field.name-container input {
    width: 98%;
  }
  .field input,
  .field textarea,
  .field select {
    width: 100%;
    font-size: 12px;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    color: #000;
    font-family: sans-serif;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .field-label {
    font-size: 12px;
  }
  .form-submit {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    border-width: 2px;
    border-style: solid;
    background-color: transparent;
    color: ${(props) => props.theme.text.darkest};
    padding: 21px 34px;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  .form-submit:hover {
    color: ${(props) => props.theme.text.lightest};
    background: ${(props) => props.theme.button};
  }

  .field-container.message textarea {
    min-height: 100px;
  }

  @media screen and (max-width: 640px) {
    padding: 0 17px;
    .contact-us-container {
      width: 100%;
    }
    .address-container {
      padding: 70px;
    }
  }
`;

const ContactPage = () => (
  <main>
    <Header />
    <ContactPageStyles>
      <h1>Talk With Me!</h1>
      <div className="contact-us-container">
        <form
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          netlify
          action="/message-received"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <fieldset className="field-container">
            <legend className="field-title">Name</legend>
            <div className="field name-container">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="field name-container">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>
          </fieldset>
          <fieldset className="field-container">
            <legend className="field-title">
              Email Address
            </legend>
            <div className="field">
              <label>
                <input type="email" name="email" id="email" required />
              </label>
            </div>
          </fieldset>
          <fieldset className="field-container">
            <legend className="field-title">Subject</legend>
            <div className="field">
              <label>
                <select id="subject" name="subject">
                  <option value="software-inquiry">Software Inquiry</option>
                  <option value="marching-inquiry">Musical Inquiry</option>
                </select>
              </label>
            </div>
          </fieldset>
          <fieldset className="field-container message">
            <legend className="field-title">Message</legend>
            <div className="field">
              <label>
                <textarea type="text" name="message" id="message" required />
              </label>
            </div>
          </fieldset>
          <div className="submit-button-container">
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </ContactPageStyles>
    <Footer />
  </main>
);

export default ContactPage;
