import React, { Component } from "react";
import phone from "../../img/phone.jpg";

class MobileWorld extends Component {
  render() {
    return (
      <section>
        <div className="container" style={{ backgroundImage: phone.url }}>
          {/*<img src={phone} alt="Guy on phone"/>*/}
          <div className="container is-overlay">
            <h1>We live in a mobile world</h1>
            <p>Your business should too.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileWorld;