import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-1">Contact</h1>
              <h5 className="subtitle is-5">
                Do you have a project in mind? Let's talk!
              </h5>
              <p>
                I offer free in-person consultations to those
                in the local Orlando area.
              </p>
              <p>
                I try my best to reply to all inquiries within 24-48 hours of receiving them.
              </p>
              <p>
                You can also shoot me an e-mail at <a href="mailto:mail@zachbroad.com">mail@zachbroad.com.</a>
              </p>
              <ContactForm/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}