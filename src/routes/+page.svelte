<script>
  import ArrowDown from "phosphor-svelte/lib/ArrowDown";
  import { theme } from '../lib/themeStore.js';
  let arrowColor = "#222";
  $: arrowColor = $theme === 'dark' ? '#fff' : '#222';
</script>

<style>
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/Lexend-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  
  :global(html) {
    font-family: 'Lexend', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  :global(.dark) {
    background-color: #1a1a1a;
    color: #ffffff;
  }
  
  :global(.dark) .navbar {
    background-color: rgba(26, 26, 26, 0.9);
  }
  
  :global(.dark) .nav-link {
    color: #ffffff;
  }
  
  :global(.dark) .download-cv {
    color: #cccccc;
  }
  
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem 1.5rem 2rem;
    background: transparent;
    width: 100vw;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .down-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease;
    min-width: 80px;
  }
  
  .down-group:hover {
    transform: translateY(2px);
  }
  
  .down-arrow {
    font-size: 2rem;
    margin-bottom: 0.25rem;
    display: flex;
    justify-content: center;
  }
  
  .download-cv {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }
  
  .nav-right-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-link {
    text-decoration: none;
    color: #222;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s;
  }
  
  .nav-link:hover {
    color: #0070f3;
  }
  
  :global(.dark) .nav-link:hover {
    color: #4da6ff;
  }
  
  .divider {
    margin-top: 5.5rem;
    border: none;
    border-top: 1.5px solid #e0e0e0;
    width: 100vw;
  }
  
  :global(.dark) .divider {
    border-top: 1.5px solid #333;
  }
</style>

<nav class="navbar">
  <a href="/assets/CV Original.pdf" download class="down-group" style="text-decoration: none;">
    <div class="down-arrow">
      <ArrowDown size={32} color={arrowColor} />
    </div>
    <span class="download-cv">Download CV</span>
  </a>
  <div class="nav-right-group">
    <div class="nav-links">
      <a class="nav-link" href="/About">About Me</a>
      <a class="nav-link" href="/Projects">Projects</a>
    </div>
  </div>
</nav>
<hr class="divider" />

<!-- Body placeholder -->
<main style="margin-top: 2rem;">
  <!-- Body content will go here -->
</main> 