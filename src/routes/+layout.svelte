<script>
  import ThemeToggle from '../lib/ThemeToggle.svelte';
  import ArrowDown from 'phosphor-svelte/lib/ArrowDown';
  import { theme } from '../lib/themeStore.js';
  import { page } from '$app/stores';
  import { rootPage } from '../lib/pageControlStore.js';
  import PortfolioPage from './PortfolioPage.svelte';
  import MaintainancePage from './MaintainancePage.svelte';
  let arrowColor = "#222";
  $: arrowColor = $theme === 'dark' ? '#fff' : '#222';
  $: {
    if (typeof window !== 'undefined') {
      if ($theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
</script>

{#if $page.url.pathname === '/' && $rootPage === 'maintainance'}
  <!-- Root page with maintainance - hide nav bar -->
  <MaintainancePage />
{:else}
  <!-- All other cases - show nav bar and normal layout -->
  <div class="theme-toggle-fixed">
    <ThemeToggle />
  </div>
  <nav class="navbar">
    <a href="/assets/CV Original.pdf" download class="down-group" style="text-decoration: none;">
      <div class="down-arrow">
        <ArrowDown size={32} color={arrowColor} />
      </div>
      <span class="download-cv">Download CV</span>
    </a>
    <div class="nav-right-group">
      <div class="nav-links">
        <a class="nav-link" href="/" class:selected={$page.url.pathname === '/'}>Home</a>
        <a class="nav-link" href="/About" class:selected={$page.url.pathname.startsWith('/About')}>About Me</a>
        <a class="nav-link" href="/Projects" class:selected={$page.url.pathname.startsWith('/Projects')}>Projects</a>
      </div>
    </div>
  </nav>
  <hr class="divider" />
  <slot />
{/if}

<style>
  :global(.dark) .nav-link {
    color: #ffffff;
  }
  
  :global(.dark) .download-cv {
    color: #cccccc;
  }
  .theme-toggle-fixed {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2000;
    padding: 0;
  }
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    background: #fff;
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
    text-decoration: none;
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
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.2s;
    color: #222;
    position: relative;
    padding-bottom: 0.2rem;
  }
  .nav-link.selected::after {
    content: '';
    display: block;
    height: 3px;
    border-radius: 2px;
    background: #77b323;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;
  }
  .nav-link:hover {
    color: #77b323;
  }
  .divider {
    margin-top: 5.5rem;
    border: none;
    border-top: 1.5px solid #e0e0e0;
    width: 100vw;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
  }
  :global(.dark) .navbar {
    background: #181818;
  }
</style> 