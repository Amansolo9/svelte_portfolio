<script lang="ts">
  import { rootPage } from '../lib/pageControlStore.js';
  import PortfolioPage from './PortfolioPage.svelte';
  import MaintainancePage from './MaintainancePage.svelte';
</script>

{#if $rootPage === 'portfolio'}
  <PortfolioPage />
{:else}
  <MaintainancePage />
{/if}