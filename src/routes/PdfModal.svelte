<script lang="ts">
  import { onMount } from 'svelte';
  let Pdf: any = null;
  export let pdfUrl = '';
  export let open = false;
  export let onClose = () => {};
  let scale = 1.2;
  let client = false;

  onMount(async () => {
    client = true;
    const mod = await import('svelte-pdf');
    Pdf = mod.default;
  });

  function zoomIn() {
    scale = Math.min(scale + 0.2, 3);
  }
  function zoomOut() {
    scale = Math.max(scale - 0.2, 0.5);
  }
  function handleBackdrop(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      onClose();
    }
  }
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }
</script>

{#if open}
  <div
    class="modal-backdrop"
    tabindex="0"
    role="dialog"
    aria-modal="true"
    on:click={handleBackdrop}
    on:keydown={handleKeydown}
  >
    <div class="modal-content">
      <button class="close-btn" on:click={onClose} aria-label="Close">&times;</button>
      <div class="pdf-controls">
        <button on:click={zoomOut} class="zoom-btn">-</button>
        <span class="zoom-label">{Math.round(scale * 100)}%</span>
        <button on:click={zoomIn} class="zoom-btn">+</button>
      </div>
      <div class="pdf-viewer">
        {#if client && Pdf}
          {#key `${pdfUrl}-${scale}`}
            <svelte:component this={Pdf} url={pdfUrl} {scale} />
          {/key}
        {:else}
          <div>Loading PDF viewer...</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.55);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
  width: 90vw;
  max-width: 800px;
  height: 88vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
}
:global(.dark) .modal-content {
  background: #232323;
}
.close-btn {
  position: absolute;
  top: 1.1rem;
  right: 1.2rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s;
}
.close-btn:hover {
  color: #e74c3c;
}
.pdf-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 0.7rem;
}
.zoom-btn {
  font-size: 1.3rem;
  background: none;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.2rem 0.7rem;
  color: #222;
  cursor: pointer;
  transition: border 0.2s, color 0.2s;
}
.zoom-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
:global(.dark) .zoom-btn {
  border: 1.5px solid #333;
  color: #fff;
}
:global(.dark) .zoom-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
.zoom-label {
  font-size: 1.1rem;
  color: #666;
}
:global(.dark) .zoom-label {
  color: #ccc;
}
.pdf-viewer {
  flex: 1;
  overflow: auto;
  border-radius: 8px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
}
:global(.dark) .pdf-viewer {
  background: #181818;
}
</style> 