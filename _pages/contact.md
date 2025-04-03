---
permalink: /contact/
title: "Contact Me"
layout: single
author_profile: true
classes: wide
---

<style>
  .contact-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact-card {
    background: #2d3748;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #4a5568;
    transition: transform 0.2s;
  }

  .contact-card:hover {
    transform: translateY(-5px);
  }

  .contact-card h3 {
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .contact-card i {
    color: #63b3ed;
    font-size: 1.5rem;
  }

  .contact-info {
    color: #cbd5e0;
    line-height: 1.6;
  }

  .contact-info p {
    margin-bottom: 0.5rem;
  }

  .contact-info a {
    color: #63b3ed;
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-info a:hover {
    color: #4299e1;
    text-decoration: underline;
  }

  .availability-status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    background: #4a5568;
    color: #e2e8f0;
  }

  .availability-status.available {
    background: #48bb78;
  }

  .availability-status.busy {
    background: #e53e3e;
  }

  .preferred-contact {
    background: #1a202c;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    border: 1px solid #4a5568;
  }

  .preferred-contact h4 {
    color: #e2e8f0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .preferred-contact p {
    color: #cbd5e0;
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .contact-section {
      padding: 1rem;
    }
  }

h3
{
  margin-top:0;
}
</style>

<div class="contact-section">
  <h2 class="section-title">Get in Touch</h2>
  <p class="profile-description">
    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
  </p>

  <div class="contact-grid">
    <div class="contact-card">
      <h3><i class="fas fa-envelope"></i> Email</h3>
      <div class="contact-info">
        <p>For professional inquiries:</p>
        <a href="mailto:zenodea@outlook.com">zenodea@outlook.com</a>
        <p>I typically respond within 24 hours</p>
      </div>
    </div>

    <div class="contact-card">
      <h3><i class="fab fa-linkedin"></i> LinkedIn</h3>
      <div class="contact-info">
        <p>Connect with me professionally:</p>
        <a href="https://www.linkedin.com/in/zeno-de-angeli/" target="_blank">https://www.linkedin.com/in/zeno-de-angeli/</a>
        <p>View my professional experience and recommendations.</p>
      </div>
    </div>

    <div class="contact-card">
      <h3><i class="fab fa-github"></i> GitHub</h3>
      <div class="contact-info">
        <p>Check out my code:</p>
        <a href="https://github.com/hazumino" target="_blank">github.com/hazumino</a>
        <p>Explore my projects and contributions.</p>
      </div>
    </div>

    <div class="contact-card">
      <h3><i class="fas fa-clock"></i> Availability</h3>
      <div class="contact-info">
        <p>Current Status:</p>
        <span class="availability-status available">Open to Opportunities</span>
      </div>
    </div>

    <div class="contact-card">
      <h3><i class="fas fa-map-marker-alt"></i> Location</h3>
      <div class="contact-info">
        <p>Based in:</p>
        <p>London, United Kingdom</p>
        <p>Time Zone: GMT+1</p>
        <p>Open to remote work.</p>
      </div>
    </div>

    <div class="contact-card">
      <h3><i class="fas fa-calendar-check"></i> Response Time</h3>
      <div class="contact-info">
        <p>Professional Inquiries:</p>
        <p>• Within 24 hours</p>
      </div>
    </div>
  </div>
</div>