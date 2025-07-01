<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  let container: HTMLDivElement;
  export let animationData: any;

  onMount(() => {
    if (container && animationData) {
      const anim = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData
      });
      return () => anim.destroy();
    }
  });
</script>

<div bind:this={container} style="width: 260px; height: 260px;"></div> 