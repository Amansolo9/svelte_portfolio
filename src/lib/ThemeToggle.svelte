<script>
  import { theme } from './themeStore.js';
  import { Sun, Moon } from 'phosphor-svelte';
  import { onMount } from 'svelte';

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
    theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  $: theme.subscribe(val => {
    isDarkMode = val === 'dark';
  });

  $: iconColor = $theme === 'dark' ? '#fff' : '#222';

  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setTheme(true);
    else setTheme(false);
  });
</script>

<button class="theme-toggle-btn" on:click={toggleTheme} aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <Sun size={16} weight="duotone" class="theme-icon" color={iconColor} />
  {:else}
    <Moon size={16} weight="duotone" class="theme-icon" color={iconColor} />
  {/if}
</button>

<style>
  .theme-toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style> 