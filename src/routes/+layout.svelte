<script>
  import ThemeToggle from '../lib/ThemeToggle.svelte';
</script>

<style>
  :global(html, body) {
    overflow-x: hidden;
    max-width: 100vw;
  }
  .theme-toggle-fixed {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2000;
    padding: 0;
  }
</style>

<div class="theme-toggle-fixed">
  <ThemeToggle />
</div>
<slot /> 