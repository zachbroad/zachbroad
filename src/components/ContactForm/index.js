import React, { Component } from "react";
import "./style.sass";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

class ContactForm extends Component {
  render() {
    return (
      <form
        className="contact-form"
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact"/>
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange}/>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor={"name"}>Your name</label>
          <div className="control has-icons-left">
            <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"}
                   required={true}/>
            <span className="icon is-left">
              <FaUser/>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"email"}>Email</label>
          <div className="control has-icons-left">
            <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"}
                   required={true}/>
            <span className="icon is-left">
              <FaEnvelope/>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"phone"}>Phone Number (optional)</label>
          <div className="control has-icons-left">
            <input className="input" type={"phone"} name={"phone"} onChange={this.handleChange} id={"phone"}
                   required={false}/>
            <span className="icon is-left">
              <FaPhone/>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={"message"}>Message</label>
          <div className="control">
                    <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"}
                              required={true}/>
          </div>
        </div>
        <div className="field">
          <button className="button is-fullwidth is-brand" type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;