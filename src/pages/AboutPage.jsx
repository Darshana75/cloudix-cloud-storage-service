import React from "react";
import './AboutPage.scss'
import manImg from '../assets/man.png'

export default function AboutPage() {
  return (
    <section className="about-container">
      <div className="text-content">
        <h2>About Us</h2>
        <p>
          Cloudix is a cutting-edge cloud storage platform dedicated to providing secure, scalable, and user-friendly
          solutions for individuals and businesses.
        </p>
        <h3>Our Mission</h3>
        <p>Make cloud storage accessible and efficient for everyone.</p>
        <h3>Our Story</h3>
        <p>
          Founded in 2025, Cloudix was born out of a desire to simplify cloud storage. We saw the need for a more
          intuitive and flexible solution and set out to build a platform that meets those needs.
        </p>
        <h3>Our Values</h3>
        <p>
          At Cloudix, we believe in Security, Simplicity, and Reliability. These values guide everything we do, from
          product development to customer support.
        </p>
      </div>
      <div className="image-content">
        <img src={manImg} alt="Working in cloud" />
      </div>
    </section>
  )
} 