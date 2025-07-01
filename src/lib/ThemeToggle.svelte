<script>
  import Sun from 'phosphor-svelte/lib/Sun';
  import Moon from 'phosphor-svelte/lib/Moon';
  import { onMount } from 'svelte';
  import { theme } from './themeStore.js';

  let isDarkMode = false;

  /**
   * @param {boolean} dark
   */
  function setTheme(dark) {
    isDarkMode = dark;
    theme.set(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }

  function toggleTheme() {
    setTheme(!isDarkMode);
  }

  $: theme.subscribe(val => {
    isDarkMode = val === 'dark';
  });

  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setTheme(true);
    else setTheme(false);
  });
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
  {#if isDarkMode}
    <Sun size={24} color="#fff" />
  {:else}
    <Moon size={24} color="#222" />
  {/if}
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .theme-toggle:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :global(.dark) .theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style> 