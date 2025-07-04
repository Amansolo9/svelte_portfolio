<script>
    import Icon from '@iconify/svelte';
    import { theme } from '../../lib/themeStore.js';
    import { onMount, onDestroy } from 'svelte';
    import { GithubLogo } from 'phosphor-svelte';
    const skills = [
      { icon: 'simple-icons:flutter', label: 'Flutter' },
      { icon: 'simple-icons:jetpackcompose', label: 'Jetpack Compose' },
      { icon: 'simple-icons:kotlin', label: 'Kotlin' },
      { icon: 'simple-icons:figma', label: 'Figma' },
      { icon: 'simple-icons:cplusplus', label: 'C++' },
      { icon: 'simple-icons:mysql', label: 'MySQL' },
      { icon: 'simple-icons:arduino', label: 'Arduino' },
    ];
    let currentSkills = [...skills];
    /** @type {ReturnType<typeof setInterval>} */
    let intervalId;
    $: iconColor = $theme === 'dark' ? '#fff' : '#222';

    onMount(() => {
      intervalId = setInterval(() => {
        currentSkills = [...currentSkills.slice(1), currentSkills[0]];
      }, 1500);
    });
    onDestroy(() => {
      clearInterval(intervalId);
    });
</script>
<div class="skills-carousel-outer">
  <div class="skills-carousel">
    {#each currentSkills.slice(0, 5) as skill, i (skill.icon)}
      <div class="skill-icon-wrap" title={skill.label}>
        <Icon icon={skill.icon} class="skill-icon" color={iconColor} />
      </div>
    {/each}
  </div>
</div>

<h2 class="section-title">Projects</h2>
<div class="projects-section">
  {#each [
    {
      name: 'PRICO',
      tech: ['Flutter', 'Figma'],
      desc: 'A local E-commerce Application',
      link: 'https://github.com/KURAZTEAM7/Mobile'
    },
    { 
      name: 'CBE Expense',
      tech: ['Flutter', 'Firebase'],
      desc: 'A mobile app that tracks the expense from your CBE account',
      link: 'https://github.com/Amansolo9/CBE_Expense'
    },
    { 
      name: 'My Game Stat', 
      tech: ['Kotlin', 'Flutter', 'C++'], 
      desc: 'A mobile app that gives you stats of Supercell games', 
      link: 'https://github.com/Amansolo9/my_game_stats' 
    },
    { 
      name: 'Volta', 
      tech: ['Flutter', 'Arduino'], 
      desc: 'A mobile app that logs the voltage of a circuit using an Arduino using Bluetooth', 
      link: 'https://github.com/Amansolo9/Voltage-Sensor' 
    },
    { 
      name: 'AASTU Lib', 
      tech: ['Jetpack Compose', 'MySQL'], 
      desc: 'A book renting mobile app for AASTU', 
      link: 'https://github.com/Amansolo9/Aastu-Library' 
    },
    { 
      name: 'My Portfolio', 
      tech: ['SvelteKit', 'Typescript'], 
      desc: 'A portfolio website for myself', 
      link: 'https://github.com/Amansolo9/svelte_portfolio' 
    },
  ] as projects}
    <div class="project-card">
      <div class="project-title">{projects.name}</div>
      <div class="project-tech-list">
        {#each projects.tech as t}
          <span class="project-tech">{t}</span>
        {/each}
      </div>
      <div class="project-desc">{projects.desc}</div>
      <div class="project-link-wrap">
        <a class="project-link-btn" href={projects.link} target="_blank" rel="noopener">
          <GithubLogo size={20} weight="duotone" class="github-icon" />
          Check on Github
        </a>
      </div>
    </div>
  {/each}
</div>

<div class="github-section">
  <div class="github-line"></div>
  <a href="https://github.com/Amansolo9" target="_blank" rel="noopener" class="github-btn">
    <GithubLogo size={20} weight="duotone" />
    More on my Github
  </a>
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
    padding: 3.5rem 2.5vw 0 2.5vw;
  }
  .skills-carousel {
    gap: 0.8rem;
    max-width: 100%;
  }
  .skill-icon-wrap {
    min-width: 32px;
    min-height: 32px;
    font-size: 1.4rem;
  }
}
.projects-section {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0;
  box-sizing: border-box;
}
.project-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
  padding: 1.6rem 1.3rem 1.3rem 1.3rem;
  max-width: 340px;
  min-width: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  box-sizing: border-box;
}
.project-card:hover {
  box-shadow: 0 4px 24px 0 rgba(119,179,35,0.13);
  transform: translateY(-2px) scale(1.012);
}
:global(.dark) .project-card {
  background: #232323;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.18);
}
.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.7rem;
  text-align: center;
}
:global(.dark) .project-title {
  color: #fff;
}
.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  justify-content: center;
}
.project-tech {
  font-size: 0.92rem;
  font-weight: 500;
  background: #f8f8f8;
  color: #222;
  border-radius: 8px;
  border: 1.2px solid #e0e0e0;
  padding: 0.18rem 0.7rem;
  transition: background 0.2s, color 0.2s;
}
:global(.dark) .project-tech {
  background: #181818;
  color: #fff;
  border: 1.2px solid #333;
}
.project-desc {
  font-size: 1.01rem;
  color: #444;
  margin-bottom: 1.2rem;
  text-align: center;
  min-height: 2.2em;
}
:global(.dark) .project-desc {
  color: #cccccc;
}
.project-link-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}
.project-link-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #77b323;
  color: #fff;
  font-weight: 600;
  font-size: 1.01rem;
  border: none;
  border-radius: 1.1rem;
  padding: 0.45rem 1.2rem;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(119,179,35,0.09);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.project-link-btn:hover {
  background: #4e7c1b;
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(119,179,35,0.18);
}
@media (max-width: 900px) {
  .projects-section {
    gap: 1.2rem;
  }
  .project-card {
    max-width: 98vw;
    min-width: 0;
    padding: 1.2rem 0.7rem 1.1rem 0.7rem;
  }
}
@media (max-width: 600px) {
  .projects-section {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    box-sizing: border-box;
  }
  .project-card {
    max-width: 100%;
    min-width: 0;
    padding: 1.1rem 0.3rem 1rem 0.3rem;
    box-sizing: border-box;
  }
}
.github-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  position: relative;
}
.github-line {
  width: 2px;
  height: 40px;
  background: repeating-linear-gradient(
    to bottom,
    #666 0px,
    #666 4px,
    transparent 4px,
    transparent 8px
  );
  margin-bottom: 0;
}
:global(.dark) .github-line {
  background: repeating-linear-gradient(
    to bottom,
    #cccccc 0px,
    #cccccc 4px,
    transparent 4px,
    transparent 8px
  );
}
.github-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.45rem 1.1rem;
  border-radius: 1.2rem;
  border: 1.5px solid #e0e0e0;
  background: transparent;
  color: #222;
  font-size: 0.98rem;
  font-weight: 500;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  cursor: pointer;
  transition: border 0.2s, color 0.2s;
  text-decoration: none;
}
.github-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
:global(.dark) .github-btn {
  border: 1.5px solid #333;
  color: #fff;
  background: transparent;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
}
:global(.dark) .github-btn:hover {
  border: 1.5px solid #77b323;
  color: #77b323;
}
</style>