<script lang="ts">
  import Lottie from '../lib/Lottie.svelte';
  import { onMount, onDestroy } from 'svelte';
  let animationData: any;

  onMount(async () => {
    const res = await fetch('/assets/maintainance.json');
    animationData = await res.json();
    // Prevent scrolling (client only)
    if (typeof document !== 'undefined') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
  });
  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  });
</script>

<div class="maintainance-bg">
  {#if animationData}
    <div class="lottie-wrapper">
      <Lottie {animationData} />
    </div>
  {/if}
  <div class="maintainance-text">Under Maintainance</div>
</div>

<style>
  .maintainance-bg {
    height: 100vh;
    width: 100vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .lottie-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .maintainance-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: #222;
    text-align: center;
    letter-spacing: 1px;
  }
</style> 