---
title: "Education"
permalink: /academics/
layout: single
author_profile: true
classes: wide
---

<style>
  .education-toggle {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .toggle-btn {
    padding: 0.4rem 1.5rem;
    background: #3b4252;
    color: #d8dee9;
    border: 2px solid #4c566a;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .toggle-btn:hover {
    background: #434c5e;
    border-color: #63b3ed;
  }

  .toggle-btn.active {
    background: #63b3ed;
    color: #1a202c;
    border-color: #63b3ed;
  }

  .education-section {
    display: none;
  }

  .education-section.active {
    display: block;
  }
</style>

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

<div class="education-toggle">
  <button class="toggle-btn active" onclick="showSection('academics')">Academics</button>
  <button class="toggle-btn" onclick="showSection('certificates')">Certificates</button>
</div>

<div id="academics-section" class="education-section active">
<div class="academics">
  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
        <img src="/assets/images/ucllogo.png" alt="UCL Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">University College London</h2>
        <p class="academic-institution__degree"><strong>MSc Information Security</strong></p>
        <p class="academic-institution__date">2024 - 2025</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>Specializing in Cryptography and Cryptocurrency with focus on blockchain security and privacy-preserving technologies.</p>
      </div>
      <div class="experience__projects">
        <strong>Achievements:</strong>
        <ul>
          <li>Obtained a Distinction with an %80+ average</li>
          <li>Achieved 92% for thesis:<br>&nbsp;&nbsp;&nbsp;&nbsp;<em>Sharpedo: Dual-Mode Uncertified DAG-Based Consensus Protocol</em></li>
        </ul>
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
      <div class="experience__projects">
        <strong>Achievements:</strong>
        <ul>
          <li>First-Class Honours with an 80+ average</li>
          <li>Achieved 79% for thesis:<br>&nbsp;&nbsp;&nbsp;&nbsp;<em>Analytics on the Pandemic</em></li>
        </ul>
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
        <h2 class="academic-institution__title" style="font-size: 1.4rem;">The American School in Switzerland</h2>
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
</div>

<div id="certificates-section" class="education-section">
<div class="academics">
  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
              <img src="/assets/images/tcm-logo.png" alt="TCM Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">PNPT</h2>
        <p class="academic-institution__degree"><strong>TCM Security - Work in Progress</strong></p>
        <p class="academic-institution__date">Expected 2026</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>Currently pursuing the Practical Network Penetration Tester (PNPT) certification from TCM Security. This hands-on certification focuses on real-world penetration testing skills including external and internal network assessments, Active Directory attacks, and comprehensive reporting.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Skills Covered</h3>
        <div class="skills-grid">
          <div class="skill-tag">Network Penetration Testing</div>
          <div class="skill-tag">Active Directory Attacks</div>
          <div class="skill-tag">Web Application Testing</div>
          <div class="skill-tag">Linux & Windows Exploitation</div>
          <div class="skill-tag">OSINT</div>
          <div class="skill-tag">Privilege Escalation</div>
          <div class="skill-tag">Vulnerability Assessment</div>
          <div class="skill-tag">Report Writing</div>
        </div>
      </div>
    </div>
  </div>

  <div class="academic-institution">
    <div class="academic-institution__header">
      <div class="academic-institution__logo">
          <img src="/assets/images/ncsc-logo.png" alt="NCSC Logo">
      </div>
      <div class="academic-institution__title-container">
        <h2 class="academic-institution__title">NCSC Certified MSc</h2>
        <p class="academic-institution__degree"><strong>Security Management</strong></p>
        <p class="academic-institution__date">2024-2025</p>
      </div>
    </div>
    <div class="academic-institution__content">
      <div class="academic-institution__description">
        <p>My MSc at UCL has been officially certified by the National Cyber Security Centre (NCSC). This certification equipped me with the skills to manage and assess security risks in complex organizational environments.</p>
      </div>
      <div class="academic-institution__skills">
        <h3 class="skills-title">Security Management Skills</h3>
        <div class="skills-grid">
          <div class="skill-tag">Risk Assessment</div>
          <div class="skill-tag">ISO 27001</div>
          <div class="skill-tag">Compliance Management</div>
          <div class="skill-tag">Security Auditing</div>
          <div class="skill-tag">Incident Response</div>
          <div class="skill-tag">Security Frameworks</div>
          <div class="skill-tag">Threat Modeling</div>
          <div class="skill-tag">GDPR Compliance</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<script>
function showSection(section) {
  // Hide all sections
  document.getElementById('academics-section').classList.remove('active');
  document.getElementById('certificates-section').classList.remove('active');

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.toggle-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show selected section and activate button
  if (section === 'academics') {
    document.getElementById('academics-section').classList.add('active');
    buttons[0].classList.add('active');
  } else if (section === 'certificates') {
    document.getElementById('certificates-section').classList.add('active');
    buttons[1].classList.add('active');
  }
}
</script>
