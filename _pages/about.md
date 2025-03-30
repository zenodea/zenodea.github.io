---
permalink: /about/
title: "About"
layout: single
author_profile: true
classes: wide
---

<div class="about-section">
  <div class="about-header">
    <div class="profile-summary">
      <div class="profile-content">
        <h1 class="profile-title">About Me</h1>
        <p class="profile-description">I am a Computer Science graduate with a strong foundation in technology and a proven track record of adaptability and innovation. Currently pursuing my MSc in Information Security at UCL, I combine academic excellence with practical experience to deliver impactful solutions in dynamic environments.</p>
      </div>
      <div class="profile-highlights">
        <div class="highlight-box">
          <i class="fas fa-graduation-cap"></i>
          <span>MSc Information Security</span>
        </div>
        <div class="highlight-box">
          <i class="fas fa-code"></i>
          <span>Full-Stack Development</span>
        </div>
        <div class="highlight-box">
          <i class="fas fa-shield-alt"></i>
          <span>Security & Cryptography</span>
        </div>
      </div>
    </div>
  </div>

  <hr class="section-divider">

  <div class="skills-section">
    <h2 class="section-title">Technical Expertise</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Programming Languages</h3>
        <div class="skills-list">
          <div class="skill-item">
            <i class="fab fa-java"></i>
            <span>Java</span>
            <div class="skill-level">Advanced</div>
          </div>
          <div class="skill-item">
            <i class="fab fa-python"></i>
            <span>Python</span>
            <div class="skill-level">Advanced</div>
          </div>
          <div class="skill-item">
            <i class="fab fa-js"></i>
            <span>JavaScript</span>
            <div class="skill-level">Advanced</div>
          </div>
          <div class="skill-item">
            <i class="fas fa-microchip"></i>
            <span>C</span>
            <div class="skill-level">Intermediate</div>
          </div>
        </div>
      </div>

      <div class="skill-category">
        <h3>Specialized Areas</h3>
        <div class="skills-list">
          <div class="skill-item">
            <i class="fas fa-lock"></i>
            <span>Cryptography</span>
            <div class="skill-level">Advanced</div>
          </div>
          <div class="skill-item">
            <i class="fas fa-database"></i>
            <span>Database Systems</span>
            <div class="skill-level">Intermediate</div>
          </div>
          <div class="skill-item">
            <i class="fas fa-robot"></i>
            <span>Machine Learning</span>
            <div class="skill-level">Intermediate</div>
          </div>
          <div class="skill-item">
            <i class="fas fa-shield-alt"></i>
            <span>Information Security</span>
            <div class="skill-level">Advanced</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="section-divider">

  <div class="experience-section">
    <h2 class="section-title">Professional Highlights</h2>
    <div class="experience-grid">
      <div class="experience-card">
        <div class="experience-icon">
          <i class="fas fa-university"></i>
        </div>
        <h3>MSc Information Security</h3>
        <p class="experience-location">University College London</p>
        <p class="experience-description">Specializing in Cryptography and Cryptocurrency, focusing on blockchain security and privacy-preserving technologies.</p>
        <a href="/academics/" class="read-more-btn">View Academic Profile</a>
      </div>

      <div class="experience-card">
        <div class="experience-icon">
          <i class="fas fa-flask"></i>
        </div>
        <h3>Research Assistant</h3>
        <p class="experience-location">UCL</p>
        <p class="experience-description">Demonstrated rapid learning capabilities and technical expertise in implementing novel technologies and methodologies.</p>
        <a href="/experience/" class="read-more-btn">View Experience</a>
      </div>

      <div class="experience-card">
        <div class="experience-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3>COVID-19 Analytics Project</h3>
        <p class="experience-location">Personal Project</p>
        <p class="experience-description">Developed innovative methods for detecting changes in COVID-19 growth rates using publicly available data.</p>
        <a href="/projects/" class="read-more-btn">View Project</a>
      </div>
    </div>
  </div>
</div>

<style>
.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-summary {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.profile-content {
  text-align: center;
}

.profile-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.profile-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #34495e;
  max-width: 800px;
  margin: 0 auto;
}

.profile-highlights {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.highlight-box {
  background: #f8f9fa;
  padding: 1rem 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.highlight-box i {
  font-size: 1.5rem;
  color: #3498db;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skill-category h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.skills-list {
  display: grid;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  transition: transform 0.2s;
}

.skill-item:hover {
  transform: translateX(5px);
}

.skill-item i {
  font-size: 1.2rem;
  color: #3498db;
}

.skill-level {
  margin-left: auto;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.experience-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.experience-icon {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.experience-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.experience-location {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.experience-description {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more-btn {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.2s;
}

.read-more-btn:hover {
  background: #2980b9;
}

.section-divider {
  border: none;
  border-top: 2px solid #eee;
  margin: 3rem 0;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .about-section {
    padding: 1rem;
  }
  
  .profile-highlights {
    flex-direction: column;
    align-items: center;
  }
  
  .highlight-box {
    width: 100%;
    max-width: 300px;
  }
}
</style>
