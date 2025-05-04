import React from "react";
import './PlansPage.scss'

export default function PlansPage() {
  return (
    <section className="plans-section">
      <h2>Free and Paid Plans</h2>
      <p>Choose the right plan for your cloud storage needs.</p>
      <div className="plans-container">
        <div className="plan-card">
          <h3>Free</h3>
          <p className="price">$0/ month</p>
          <ul>
            <li>2 GB Storage</li>
            <li>Basic Support</li>
            <li>Limited Sharing</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="plan-card">
          <h3>Pro</h3>
          <p className="price">$10/ month</p>
          <ul>
            <li>100 GB Storage</li>
            <li>Priority Support</li>
            <li>Advanced Sharing</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="plan-card">
          <h3>Business</h3>
          <p className="price">$50/ month</p>
          <ul>
            <li>1 TB Storage</li>
            <li>24/7 Support</li>
            <li>Team Management</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  )
}