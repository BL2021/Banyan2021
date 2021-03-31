import React, { Component } from 'react';
import Service from "../../components/Services";
import "./serve.css";
import Diagram2 from "../../styles/images/new_junt.jpg";
import HeaderNav from "../../components/HeaderNav";
import ContactForm from "../../components/Form"
export class quality_assurance extends Component {
  render() {
    return (
      <div style={{ marginTop: 70 }}>
      <HeaderNav />
            <Service
         
         img="https://i0.wp.com/opensourceforu.com/wp-content/uploads/2019/04/Testing-mobile-and-apps.jpg?fit=900%2C535&ssl=1"
              title="Quality Assurance"
              h1="Say what you do. Do what you say. Prove it. Improve it."
              h2="Minimizing your risks is part of our process whether it’s manual performance testing or automated functional testing."
            />

            <br />
            <ContactForm />
          </div>

    );
  }
}

export default quality_assurance;
