<script lang="ts">
  import Lottie from '../lib/Lottie.svelte';
  import { onMount } from 'svelte';
  let animationData: any;

  onMount(async () => {
    const res = await fetch('/assets/maintainance.json');
    animationData = await res.json();
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
    min-height: 100vh;
    width: 100vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
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
