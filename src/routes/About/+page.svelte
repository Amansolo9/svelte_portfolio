<script>
</script>

<section class="about-section">
  <h2 class="section-title">Education</h2>
  <div class="timeline-container">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2021 - 2025</div>
        <div class="card">
          <div class="card-title">Addis Ababa Science and Technology University</div>
          <div class="card-degree">Bachelor of Science Degree in Software Engineering</div>
          <div class="card-courses">Data Structure and Algorithms, Computer Networking, Mobile, Web, Server side Programming, and related courses</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2015 - 2021</div>
        <div class="card">
          <div class="card-title">Lideta Catholic Cathedral School</div>
          <div class="card-degree">Highschool Diploma</div>
          <div class="card-courses">Natural Science</div>
        </div>
      </div>
      <div class="timeline-line"></div>
    </div>
  </div>

  <h2 class="section-title">Experience</h2>
  <div class="timeline-container">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">JULY 2024 - SEPTEMBER 2024</div>
        <div class="card">
          <div class="card-title">Flutter Developer Intern and Team Leader</div>
          <div class="card-subtitle">KURAZ Technologies</div>
        </div>
      </div>
      <div class="timeline-line"></div>
    </div>
  </div>
</section>

<style>
.about-section {
  max-width: 900px;
  padding: 2.5rem 1rem 0 10rem;
  margin: 0;
}
.section-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #222;
  letter-spacing: 1px;
}
:global(.dark) .section-title {
  color: #fff;
}
.timeline-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0.7rem;
}
.timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
}
.timeline-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.7rem;
  position: relative;
}
.timeline-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #77b323;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px #e0e0e0;
  margin-right: 1.2rem;
  z-index: 2;
  flex-shrink: 0;
}
:global(.dark) .timeline-dot {
  border: 3px solid #181818;
  box-shadow: 0 0 0 3px #333;
}
.timeline-date {
  width: 180px;
  font-size: 1.05rem;
  color: #888;
  margin-right: 1.5rem;
  font-weight: 500;
  flex-shrink: 0;
  text-align: left;
}
:global(.dark) .timeline-date {
  color: #bbbbbb;
}
.card {
  width: 320px;
  height: 180px;
  background: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
  padding: 1.1rem 1.5rem 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  overflow: hidden;
  margin-left: 70px; 
}
:global(.dark) .card {
  background: #232323;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
}
.card-title {
  font-size: 1.13rem;
  font-weight: 600;
  color: #222;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
:global(.dark) .card-title {
  color: #fff;
}
.card-degree {
  font-size: 1.01rem;
  font-weight: 500;
  color: #77b323;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-subtitle {
  font-size: 0.98rem;
  color: #77b323;
  font-weight: 500;
  margin-top: 0.2rem;
}
.card-courses {
  font-size: 0.98rem;
  color: #666;
  font-weight: 400;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
:global(.dark) .card-courses {
  color: #cccccc;
}
.timeline-line {
  position: absolute;
  left: 8px;
  top: 0;
  width: 2.5px;
  height: 100%;
  background: #77b323;
  z-index: 1;
}
@media (max-width: 900px) {
  .about-section {
    padding-left: 2.5rem;
  }
}
@media (max-width: 600px) {
  .about-section {
    padding: 1.2rem 0.2rem 0 0.7rem;
  }
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }
  .timeline-container {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.7rem;
  }
  .timeline {
    width: 100%;
  }
  .timeline-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.7rem;
    position: relative;
  }
  .timeline-dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #77b323;
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px #e0e0e0;
    z-index: 2;
    flex-shrink: 0;

    position: absolute;
    left: -1px;
    top: 0.2rem;
    margin-right: 0;
    margin-bottom: 0;
  }
  :global(.dark) .timeline-dot {
    border: 3px solid #181818;
    box-shadow: 0 0 0 3px #333;
  }
  .timeline-date {
    width: auto;
    margin-bottom: 0.3rem;
    margin-right: 0;
    min-width: 0;
    font-size: 1.05rem;
    margin-left: 25px;
    order: 1;
  }
  :global(.dark) .timeline-date {
    color: #bbbbbb;
  }
  .card {
    width: 98vw;
    max-width: 370px;
    height: auto;
    min-height: 110px;
    padding: 1rem 0.7rem 1rem 0.7rem;
    margin-left: 25px; 
    order: 2;
  }
  :global(.dark) .card {
    background: #232323;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
  }
  .timeline-line {
    position: absolute;
    left: 8px;
    top: 0;
    width: 2.5px;
    height: 100%;
    background: #77b323;
    z-index: 1;
  }
}
</style>