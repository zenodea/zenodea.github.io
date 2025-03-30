---
title: "Academics"
permalink: /academics/
layout: single
author_profile: true
classes: wide
---
<style>
  .academics {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .academic-institution {
    background: #2d3748;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #4a5568;
    margin-bottom: 2rem;
  }
  
  .academic-institution__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .academic-institution__logo {
    width: 200px;
    height: 200px;
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #1a202c;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #4a5568;
  }
  
  .academic-institution__logo img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
  
  .academic-institution__title {
    margin: 0 0 0.5rem 0;
    color: #e2e8f0;
    font-size: 1.8rem;
  }
  
  .academic-institution__degree {
    color: #cbd5e0;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }
  
  .academic-institution__date {
    color: #a0aec0;
    margin-top: 0;
    font-style: italic;
  }
  
  .academic-institution__description {
    margin-bottom: 1.5rem;
    color: #cbd5e0;
    line-height: 1.6;
  }
  
  .skill-tag {
    display: inline-block;
    background-color: #1a202c;
    color: #cbd5e0;
    padding: 0.4rem 0.8rem;
    margin: 0.3rem;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid #4a5568;
    transition: transform 0.2s;
  }
  
  .skill-tag:hover {
    transform: translateX(5px);
    background: #2d3748;
  }
  
  .skills-title {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
    color: #e2e8f0;
    border-bottom: 2px solid #4a5568;
    padding-bottom: 0.5rem;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .section-divider {
    margin: 3rem 0;
    border: none;
    border-top: 2px solid #4a5568;
  }

  @media (max-width: 768px) {
    .academics {
      padding: 1rem;
    }
    
    .academic-institution__header {
      flex-direction: column;
      text-align: center;
    }
    
    .academic-institution__logo {
      margin: 0 0 1rem 0;
    }
  }
</style>

<div class="academics">
  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
        <img src="/assets/images/ucllogo.png" alt="UCL Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">University College London</h2>
        <p class="academic-institution__degree"><strong>MSc Information Security</strong></p>
        <p class="academic-institution__date">2024 - Present</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>Specializing in Cryptography and Cryptocurrency with focus on blockchain security and privacy-preserving technologies.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Key Areas of Study</h3>
        <div class="skills-grid">
          <div class="skill-tag">Applied Cryptography</div>
          <div class="skill-tag">Consensus Protocols Development</div>
          <div class="skill-tag">Zero-Knowledge Proofs</div>
          <div class="skill-tag">Network Security</div>
          <div class="skill-tag">Computer Security</div>
          <div class="skill-tag">Privacy Enhancing Technologies</div>
        </div>
      </div>
    </div>
  </div>


  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
        <img src="/assets/images/sussexlogo.png" alt="University of Sussex Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">University of Sussex</h2>
        <p class="academic-institution__degree"><strong>BSc Computer Science</strong></p>
        <p class="academic-institution__date">2019 - 2023</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>Graduated with First Class Honours. Focused on algorithms, data structures, and software engineering principles.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Skills Acquired</h3>
        <div class="skills-grid">
          <div class="skill-tag">Algorithm and Data Structures</div>
          <div class="skill-tag">Software Engineering</div>
          <div class="skill-tag">Web Development</div>
          <div class="skill-tag">Database Development</div>
          <div class="skill-tag">Machine Learning</div>
        </div>
      </div>
    </div>
  </div>

  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
        <img src="/assets/images/tasislogo.png" alt="TASIS Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">The American School in Switzerland (TASIS)</h2>
        <p class="academic-institution__degree"><strong>International Baccalaureate</strong></p>
        <p class="academic-institution__date">2017 - 2019</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>Completed the International Baccalaureate Diploma Programme with a focus on Mathematics, Physics, and Computer Science.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Foundation Skills</h3>
        <div class="skills-grid">
          <div class="skill-tag">Critical Thinking</div>
          <div class="skill-tag">Research Methods</div>
          <div class="skill-tag">Mathematics</div>
          <div class="skill-tag">Physics</div>
        </div>
      </div>
    </div>
  </div>
</div>
