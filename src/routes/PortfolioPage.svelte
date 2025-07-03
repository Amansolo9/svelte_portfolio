<script lang="ts">
  import { theme } from '../lib/themeStore.js';
  const texts = [
    "Amanuel Solomon",
    "Mobile Application Developer",
    "UI/UX Designer"
  ];
  let displayText = "";
  let textIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeNextChar() {
    if (typing) {
      if (charIndex < texts[textIndex].length) {
        displayText += texts[textIndex][charIndex];
        charIndex++;
        setTimeout(typeNextChar, 80);
      } else {
        typing = false;
        setTimeout(eraseText, 1200);
      }
    }
  }

  function eraseText() {
    if (!typing) {
      if (charIndex > 0) {
        displayText = displayText.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, 40);
      } else {
        typing = true;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeNextChar, 400);
      }
    }
  }

  import { onMount } from 'svelte';
  onMount(() => {
    typeNextChar();
  });
</script>

<main>
  <section class="body-section">
    <div class="text-col">
      <div class="typing-text">{displayText}</div>
      <div class="subtitle-group">
        <div class="subtitle-light">Creative Approach</div>
        <div class="subtitle-light">UI/UX Enthusiast</div>
      </div>
      <div class="about-paragraph">
        A dedicated Flutter developer, <br />
        with a keen eye for UI/UX, <br />
        committed to building robust, <br />
        and user-centric applications <br />
        that make a difference.
      </div>
    </div>
    <div class="image-col">
      <div class="oval-frame">
        <img src="/assets/Aman.png" alt="Amanuel Solomon" />
      </div>
    </div>
  </section>
</main>

<style>
  .body-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 3.5rem;
    margin-top: 3.5rem;
    padding-left: 6vw;
    padding-right: 6vw;
    width: 100%;
  }

  /* --- MODIFIED MEDIA QUERY --- */
  @media (max-width: 900px) {
    .body-section {
      flex-direction: column;
      /* Changed to center the columns horizontally */
      align-items: center; /* This centers items along the cross-axis (horizontal for column) */
      justify-content: flex-start; /* This aligns items along the main-axis (vertical for column) */
      gap: 2.5rem;
      min-height: unset;
      margin-top: 6rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

    .text-col,
    .image-col {
      /* Remove any specific padding/margin that might interfere with width */
      padding: 0; /* Override any padding-left/right inherited or set */
      margin: 0; /* Ensure no external margins are pushing it */
      width: 100%; /* Force them to take full available width of body-section */
      max-width: 100%;
      box-sizing: border-box; /* Include padding/border in width calculation */
    }

    .image-col {
      /* These properties are correct for centering the oval-frame within image-col */
      display: flex;
      justify-content: center; /* Center horizontally */
      align-items: center;   /* Center vertically (if height allows) */
    }

    .typing-text {
      white-space: normal !important;
      overflow: visible !important;
      text-align: center;
      font-size: 1.4rem;
      min-height: unset;
      word-break: break-word;
      /* Max width for text should be relative to its parent, or a fixed reasonable size */
      max-width: 90vw; /* This might still cause issues for very narrow screens if text is long */
      margin-left: auto; /* To help center it within itself if it doesn't take 100% width */
      margin-right: auto;
    }

    /* REMOVED: .oval-frame { margin: 0 auto; } - Let flexbox handle it */

    /* Ensure text-col content is also centered */
    .text-col {
      align-items: center; /* This centers the typing-text, subtitle-group, and about-paragraph within text-col */
      text-align: center; /* Ensures text inside paragraphs etc. is centered */
    }
    .about-paragraph {
      text-align: center;
    }
    .subtitle-group {
      align-items: center;
      justify-content: center; /* Added for subtitle-group itself */
    }
  }

  /* ... (rest of your CSS remains the same for larger screens) ... */

  .text-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Default for large screens */
    justify-content: center;
    min-width: 250px;
    padding-left: 2.5rem;
  }
  .typing-text {
    font-size: 2.2rem;
    font-weight: 600;
    min-height: 2.7rem;
    letter-spacing: 1px;
    border-right: 2px solid #77b323;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 1.2rem;
    color: #222;
    transition: color 0.2s;
  }
  :global(.dark) .typing-text {
    color: #fff;
    border-right: 2px solid #77b323;
  }
  .subtitle-group {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-bottom: 1.1rem;
  }
  .subtitle-light {
    font-size: 1.08rem;
    font-weight: 300;
    color: #888;
    letter-spacing: 0.5px;
  }
  :global(.dark) .subtitle-light {
    color: #bbbbbb;
  }
  .about-paragraph {
    font-size: 1.18rem;
    font-weight: 400;
    color: #444;
    line-height: 1.7;
    margin-top: 0.7rem;
    max-width: 32rem;
    white-space: pre-line;
  }
  :global(.dark) .about-paragraph {
    color: #e0e0e0;
  }
  .image-col {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 220px;
    padding-right: 2.5rem;
  }
  .oval-frame {
    width: 270px;
    height: 340px;
    border-radius: 50% / 45%;
    overflow: hidden;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
    border: 4px solid #e0e0e0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(.dark) .oval-frame {
    border: 4px solid #333;
    background: #222;
  }
  .oval-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
</style>