<script>
  import { Phone, EnvelopeSimple, TelegramLogo, GithubLogo, FigmaLogo, LinkedinLogo, TwitterLogo, ArrowUpRight, Copy } from 'phosphor-svelte';
  import ContactMap from '../../lib/ContactMap.svelte';
  import { theme } from '../../lib/themeStore.js';
  let copied = false;
  /** @type {ReturnType<typeof setTimeout>} */
  let copyTimeout;
  const phoneNumber = '+251967286535';
  $: copyIconColor = $theme === 'dark' ? '#fff' : '#222';
  function copyPhone() {
    navigator.clipboard.writeText(phoneNumber);
    copied = true;
    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => copied = false, 1500);
  }
</script>

<section class="contact-section">
  <h2 class="contact-title">Get in touch</h2>
  <div class="contacts-list">
    <div class="contact-item">
      <Phone size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Phone:</span>
      <span class="phone-copy-row">
        <button
          type="button"
          class="contact-value copy-phone phone-btn"
          on:click={copyPhone}
          on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { copyPhone(); } }}
          aria-label="Copy phone number to clipboard"
          title="Copy to clipboard"
        >
          {phoneNumber}
        </button>
        <button
          type="button"
          class="clipboard-icon-wrap"
          aria-label="Copy phone number to clipboard"
          title="Copy to clipboard"
          on:click={copyPhone}
          on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { copyPhone(); } }}
        >
          <Copy size={22} weight="duotone" class="clipboard-icon" color={copyIconColor} />
        </button>
      </span>
      {#if copied}
        <span class="copied-msg">Copied!</span>
      {/if}
    </div>
    <div class="contact-item">
      <EnvelopeSimple size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Email:</span>
      <span class="contact-value">amana67286535@gmail.com</span>
      <div class="email-btn-center">
        <a class="email-btn" href="mailto:amana67286535@gmail.com" target="_blank" rel="noopener">
          Send an email <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
    <div class="contact-item">
      <TelegramLogo size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Telegram:</span>
      <a class="contact-link" href="https://t.me/sakazuki" target="_blank" rel="noopener">sakazuki <ArrowUpRight size={16} /></a>
    </div>
    <div class="contact-item">
      <GithubLogo size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Github:</span>
      <a class="contact-link" href="https://github.com/Amansolo9" target="_blank" rel="noopener">Amansolo9 <ArrowUpRight size={16} /></a>
    </div>
    <div class="contact-item">
      <FigmaLogo size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Figma:</span>
      <a class="contact-link" href="https://www.figma.com/@akaza" target="_blank" rel="noopener">akaza <ArrowUpRight size={16} /></a>
    </div>
    <div class="contact-item">
      <LinkedinLogo size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">LinkedIn:</span>
      <a class="contact-link" href="https://www.linkedin.com/in/amanuel-solomon-araya/" target="_blank" rel="noopener">Amanuel Solomon <ArrowUpRight size={16} /></a>
    </div>
    <div class="contact-item">
      <TwitterLogo size={28} weight="duotone" class="contact-icon" />
      <span class="contact-label">Twitter:</span>
      <a class="contact-link" href="https://x.com/kagelevelpower" target="_blank" rel="noopener">kagelevelpower <ArrowUpRight size={16} /></a>
    </div>
  </div>
  <ContactMap />
</section>

<style>
.contact-section {
  max-width: 520px;
  margin: 0 auto;
  padding: 2.5rem 1.2rem 3rem 1.2rem;
}
.contact-title {
  font-size: 2.1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.2rem;
  color: #222;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}
.contact-title::after {
  content: '';
  display: block;
  margin: 0.5rem auto 0 auto;
  width: 60%;
  height: 4px;
  border-radius: 2px;
  background: #77b323;
}
:global(.dark) .contact-title {
  color: #fff;
}
.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  background: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 1.1rem 1.2rem;
  font-size: 1.08rem;
  flex-wrap: wrap;
}
:global(.dark) .contact-item {
  background: #232323;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
}
.contact-label {
  font-weight: 600;
  color: #222;
  min-width: 70px;
}
:global(.dark) .contact-label {
  color: #fff;
}
.contact-value {
  color: #444;
  font-weight: 500;
  margin-right: 0.7rem;
}
:global(.dark) .contact-value {
  color: #cccccc;
}
.contact-link {
  color: #77b323;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  transition: color 0.2s;
}
.contact-link:hover {
  color: #4e7c1b;
}
.email-btn {
  display: inline-flex;
  margin: 0.7rem 0 0 0;
  padding: 0.3rem 0.9rem;
  border-radius: 1.1rem;
  border: 1.5px solid #e0e0e0;
  background: transparent;
  color: #222;
  font-size: 0.98rem;
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  cursor: pointer;
  gap: 0.3rem;
  transition: border 0.2s, color 0.2s;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  white-space: nowrap;
}
.email-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
:global(.dark) .email-btn {
  border: 1.5px solid #333;
  color: #fff;
  background: transparent;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
}
:global(.dark) .email-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
.email-btn-center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 600px) {
  .contact-section {
    padding: 1.2rem 0.2rem 2rem 0.2rem;
  }
  .contact-title {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  .contacts-list {
    gap: 1rem;
  }
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    font-size: 0.99rem;
    padding: 0.9rem 0.7rem;
  }
  .email-btn {
    display: inline-flex;
    width: auto;
    margin-left: 0;
    margin-top: 0.5rem;
    justify-content: center;
    align-self: flex-start;
    max-width: 100%;
    white-space: nowrap;
  }
}
.copy-phone {
  cursor: pointer;
  color: #444;
  font-weight: 500;
  margin-right: 0.3rem;
  transition: color 0.2s;
}
.copy-phone:hover {
  color: #77b323;
}
.copied-msg {
  margin-left: 0.5rem;
  color: #77b323;
  font-size: 0.98rem;
  font-weight: 500;
  transition: opacity 0.2s;
}
.clipboard-icon-wrap {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
.phone-copy-row {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.1rem;
  flex-wrap: nowrap;
}
.phone-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
}
.phone-btn:hover,
.phone-btn:focus {
  color: #77b323;
}
</style>
