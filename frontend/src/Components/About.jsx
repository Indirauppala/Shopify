import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-intro">
        <p>Welcome to Shopify, where we believe in innovation, customer satisfaction, and making eCommerce accessible for everyone. Our goal is to simplify online selling and help our users achieve their business goals.</p>
      </section>
      <section className="about-us-story">
        <h2>Our Story</h2>
        <p>Our journey began in 2024 when Indira and her team developed a platform to help small businesses sell online. Over the years, Shopify has expanded its features and services to support businesses of all sizes, from startups to enterprises.</p>
        <p>We’ve achieved significant milestones, including becoming a publicly traded company and reaching millions of users worldwide. Our vision is to continue innovating and supporting our users in their eCommerce journeys.</p>
      </section>
      <section className="about-us-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <h4><i>Indira</i></h4>
          <p>CEO - With over 2 years of experience in tech, she leads our team with passion and expertise.</p>
        </div>
        <div className="team-member">
          <h4><i>Buddy</i></h4>
          <p>CTO - It is a gpt that helps me in building our technological vision, ensuring we stay ahead of industry trends.</p>
        </div>
      </section>
      <section className="about-us-contact">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! <a href="/contact" onClick={()=>navigate('/contact')}>Contact us today</a></p>
      </section>
    </div>
  );
};

export default About;
