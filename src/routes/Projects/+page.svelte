<script>
    import Icon from '@iconify/svelte';
    import { theme } from '../../lib/themeStore.js';
    import { onMount, onDestroy } from 'svelte';
    const skills = [
      { icon: 'simple-icons:flutter', label: 'Flutter' },
      { icon: 'simple-icons:jetpackcompose', label: 'Jetpack Compose' },
      { icon: 'simple-icons:kotlin', label: 'Kotlin' },
      { icon: 'simple-icons:figma', label: 'Figma' },
      { icon: 'simple-icons:cplusplus', label: 'C++' },
      { icon: 'simple-icons:mysql', label: 'MySQL' },
      { icon: 'simple-icons:arduino', label: 'Arduino' },
    ];
    let visibleCount = 5;
    let currentSkills = [...skills];
    /** @type {ReturnType<typeof setInterval>} */
    let intervalId;
    $: iconColor = $theme === 'dark' ? '#fff' : '#222';

    function updateVisibleCount() {
      if (window.innerWidth <= 400) visibleCount = 1;
      else if (window.innerWidth <= 700) visibleCount = 3;
      else visibleCount = 5;
    }

    onMount(() => {
      updateVisibleCount();
      window.addEventListener('resize', updateVisibleCount);
      intervalId = setInterval(() => {
        currentSkills = [...currentSkills.slice(1), currentSkills[0]];
      }, 1500);
    });
    onDestroy(() => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateVisibleCount);
    });
</script>
<div class="skills-carousel-outer">
  <div class="skills-carousel">
    {#each currentSkills.slice(0, visibleCount) as skill, i (skill.icon)}
      <div class="skill-icon-wrap" title={skill.label}>
        <Icon icon={skill.icon} class="skill-icon" color={iconColor} />
      </div>
    {/each}
  </div>
</div>

<h2 class="section-title">Projects</h2>
<div class="projects-section">
  <!-- Project cards will go here -->
</div>

<style>
.section-title {
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
.section-title::after {
  content: '';
  display: block;
  margin: 0.5rem auto 0 auto;
  width: 60%;
  height: 4px;
  border-radius: 2px;
  background: #77b323;
}
:global(.dark) .section-title {
  color: #fff;
}
.skills-carousel-outer {
  width: 100%;
  overflow: hidden;
  padding: 3.5rem 2.5vw 0 2.5vw;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
}
.skills-carousel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  width: 100%;
  max-width: 600px;
}
.skill-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 64px;
  font-size: 3.2rem;
  background: transparent;
  border-radius: 50%;
  transition: background 0.2s;
}
@media (max-width: 700px) {
  .skills-carousel {
    gap: 1.2rem;
    max-width: 340px;
  }
  .skill-icon-wrap {
    min-width: 44px;
    min-height: 44px;
    font-size: 2.1rem;
  }
}
@media (max-width: 400px) {
  .skills-carousel-outer {
    padding: 0 18vw;
  }
  .skills-carousel {
    gap: 0.5rem;
    max-width: 60vw;
  }
  .skill-icon-wrap {
    min-width: 38vw;
    min-height: 38vw;
    font-size: 1.5rem;
  }
}
.projects-section {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}
</style>