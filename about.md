---
layout: default
---

<div class="about-page">
  <header class="about-header">
    <h1 class="heading-hero" style="text-align: center; margin-top: 20vh; font-size: 3rem;">About Me</h1>
    
    <div class="button-group" style="margin-top: 40px; display: flex; gap: 18px; flex-wrap: wrap; justify-content: center;">
      <button class="nice-btn" onclick="window.location.href='/'">← Back to Blog</button>
      <button class="nice-btn" onclick="window.location.href='/contact'">Contact</button>
    </div>
  </header>

  <div class="about-content">
    <div class="about-card">
      <div class="about-text">
        <h2>Hello, I'm a Developer! 👋</h2>
        
        <p>Welcome to my blog! I'm passionate about web development, creating beautiful user experiences, and sharing knowledge with the developer community.</p>
        
        <h3>What I Do</h3>
        <ul>
          <li><strong>Frontend Development</strong> - React, Vue.js, TypeScript, and modern CSS</li>
          <li><strong>Backend Development</strong> - Node.js, Python, and API design</li>
          <li><strong>Full-Stack Projects</strong> - End-to-end application development</li>
          <li><strong>UI/UX Design</strong> - Creating intuitive and beautiful interfaces</li>
        </ul>
        
        <h3>Technologies I Love</h3>
        <div class="tech-tags">
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Python</span>
          <span class="tech-tag">CSS/SCSS</span>
          <span class="tech-tag">Jekyll</span>
        </div>
        
        <h3>Why I Blog</h3>
        <p>I believe in the power of sharing knowledge and learning in public. Through this blog, I document my journey, share tutorials, and explore new technologies. Whether you're a beginner or an experienced developer, I hope you find something useful here!</p>
        
        <div class="about-cta">
          <p><strong>Let's connect!</strong> Feel free to reach out if you have questions, want to collaborate, or just want to chat about development.</p>
          <button class="nice-btn" onclick="window.location.href='https://willcodes.tech/contact'">Get In Touch</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .about-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .about-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px 80px;
  }
  
  .about-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1.5px solid #444;
    border-radius: 20px;
    padding: 48px;
    max-width: 800px;
    width: 100%;
    color: var(--color-white);
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.12);
    font-family: var(--font-system);
    line-height: 1.7;
  }
  
  .about-text h2 {
    color: var(--color-accent-blue);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
  }
  
  .about-text h3 {
    color: var(--color-white);
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 16px;
    border-bottom: 2px solid var(--color-accent-blue);
    padding-bottom: 8px;
    display: inline-block;
  }
  
  .about-text p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    opacity: 0.9;
  }
  
  .about-text ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  
  .about-text li {
    padding: 8px 0;
    padding-left: 24px;
    position: relative;
    font-size: 1.05rem;
  }
  
  .about-text li::before {
    content: "▶";
    color: var(--color-accent-blue);
    position: absolute;
    left: 0;
    font-size: 0.8rem;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 24px 0;
  }
  
  .tech-tag {
    background: rgba(125, 211, 252, 0.15);
    color: var(--color-accent-blue);
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(125, 211, 252, 0.3);
    transition: all 0.2s ease;
  }
  
  .tech-tag:hover {
    background: rgba(125, 211, 252, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(125, 211, 252, 0.2);
  }
  
  .about-cta {
    background: rgba(125, 211, 252, 0.08);
    border: 1px solid rgba(125, 211, 252, 0.2);
    border-radius: 16px;
    padding: 32px;
    margin-top: 40px;
    text-align: center;
  }
  
  .about-cta p {
    margin-bottom: 24px;
    font-size: 1.1rem;
  }
  
  /* Light mode styles */
  body.light-mode .about-card {
    background: var(--color-white);
    color: var(--color-dark-text);
    border-color: #e5e7eb;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }
  
  body.light-mode .about-text h2 {
    color: var(--color-accent-yellow);
  }
  
  body.light-mode .about-text h3 {
    color: var(--color-dark-text);
    border-bottom-color: var(--color-accent-yellow);
  }
  
  body.light-mode .about-text li::before {
    color: var(--color-accent-yellow);
  }
  
  body.light-mode .tech-tag {
    background: rgba(251, 191, 36, 0.15);
    color: var(--color-accent-yellow);
    border-color: rgba(251, 191, 36, 0.3);
  }
  
  body.light-mode .tech-tag:hover {
    background: rgba(251, 191, 36, 0.25);
    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
  }
  
  body.light-mode .about-cta {
    background: rgba(251, 191, 36, 0.08);
    border-color: rgba(251, 191, 36, 0.2);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .about-card {
      padding: 32px 24px;
      margin: 0 16px;
    }
    
    .about-text h2 {
      font-size: 1.6rem;
    }
    
    .about-text h3 {
      font-size: 1.2rem;
    }
    
    .tech-tags {
      gap: 8px;
    }
    
    .tech-tag {
      font-size: 0.85rem;
      padding: 6px 12px;
    }
    
    .about-cta {
      padding: 24px 16px;
    }
  }
  
  @media (max-width: 480px) {
    .about-card {
      padding: 24px 16px;
      margin: 0 8px;
    }
    
    .button-group {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
</style>
