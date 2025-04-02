---
title: "Experience"
permalink: /experience/
layout: single
author_profile: true
classes: wide
---
<style>
  .experience {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .experience__item {
    background: #2d3748;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #4a5568;
    margin-bottom: 2rem;
  }
  
  .experience__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .experience__logo {
    width: 200px;
    height: auto;
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
  
  .experience__logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .experience__title {
    margin: 0 0 0.5rem 0;
    color: #e2e8f0;
    font-size: 1.8rem;
  }
  
  .experience__position {
    color: #cbd5e0;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }
  
  .experience__date {
    color: #a0aec0;
    margin-top: 0;
    font-style: italic;
  }
  
  .experience__description {
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
  
  .experience__section-divider {
    margin: 3rem 0;
    border: none;
    border-top: 2px solid #4a5568;
  }
  
  .experience__divider {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid #4a5568;
  }

  @media (max-width: 768px) {
    .experience {
      padding: 1rem;
    }
    
    .experience__header {
      flex-direction: column;
      text-align: center;
    }
    
    .experience__logo {
      margin: 0 0 1rem 0;
    }
  }
</style>

<div class="experience">
  <div class="experience__item">
    <div class="experience__header">
      <div class="experience__logo">
        <img src="/assets/images/sussexlogo.png" alt="University of Sussex Logo">
      </div>
      <div class="experience__title-container">
        <h2 class="experience__title">University of Sussex</h2>
      </div>
    </div>
    <div class="experience__subsection">
      <p class="experience__position"><strong>Research Assistant</strong></p>
      <p class="experience__date">May 2022 - September 2022</p>
      <div class="experience__description">
        <p>I researched novel concepts in Computer Vision to create an Exam Script Analyser that could correctly identify and extract key information from student exams.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Skills Applied</h3>
        <div class="skills-grid">
          <div class="skill-tag">Python</div>
          <div class="skill-tag">OpenCV</div>
          <div class="skill-tag">Machine Learning</div>
          <div class="skill-tag">OCR</div>
        </div>
      </div>
    </div>
    <hr class="experience__divider">
    <div class="experience__subsection">
      <p class="experience__position"><strong>Teacher Assistant</strong></p>
      <p class="experience__date">September 2022 - December 2022</p>
      <div class="experience__description">
        <p>I helped students during seminar sessions for a Compiler Architecture module, explaining RISC-V architecture, and conducting help sessions.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Skills Applied</h3>
        <div class="skills-grid">
          <div class="skill-tag">RISC-V</div>
          <div class="skill-tag">Compiler Design</div>
          <div class="skill-tag">Teaching</div>
          <div class="skill-tag">Technical Communication</div>
        </div>
      </div>
    </div>
  </div>
  <hr class="experience__section-divider">
  <div class="experience__item">
    <div class="experience__header">
      <div class="experience__logo">
        <img src="/assets/images/northsouthUX.png" alt="NorthsouthUX Logo">
      </div>
      <div class="experience__title-container">
        <h2 class="experience__title">NorthsouthUX</h2>
      </div>
    </div>
    <div class="experience__subsection">
      <p class="experience__position"><strong>Full Stack Web Developer</strong></p>
      <p class="experience__date">May 2023 - Dec 2023</p>
      <div class="experience__description">
        <p>As a Full-stack Developer at NorthsouthUX, my primary responsibility involves transforming Figma design specifications into fully functional websites, ensuring the accurate implementation of visual concepts while maintaining optimal user experience standards.</p>
        <p class="experience__projects">
          <strong>Example projects:</strong>
          <a href="https://www.scuolaguidalugano.ch/" target="_blank" class="project-link">Scuola Guida Lugano</a> | 
          <a href="https://softwaregestionale-ch.vercel.app/" target="_blank" class="project-link">Software Gestionale CH</a>
        </p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Skills Applied</h3>
        <div class="skills-grid">
          <div class="skill-tag">HTML/CSS</div>
          <div class="skill-tag">JavaScript</div>
          <div class="skill-tag">PHP</div>
          <div class="skill-tag">Responsive Design</div>
          <div class="skill-tag">Figma</div>
          <div class="skill-tag">WordPress</div>
        </div>
      </div>
    </div>
  </div>
</div>
