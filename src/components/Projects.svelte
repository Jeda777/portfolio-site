<script>
  import Project from "./Project.svelte";
  import projects from "../assets/projects";
</script>

<section id="projects">
  <h2>Projects</h2>
  <div class="projects-container">
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
  <a
    href="https://github.com/Jeda777?tab=repositories"
    target="_blank"
    rel="noreferrer">See More</a
  >
</section>

<style lang="scss">
  @import "../variables";
  #projects {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    .projects-container {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    a {
      font-size: 18px;
      padding: 0.5rem 1.5rem;
      border-radius: 5rem;
      color: white;
      background: $text-hover;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
    @media (min-width: 768px) {
      padding: 5rem 2rem;
      gap: 3rem;
    }
    @media (min-width: 1024px) {
      padding: 6rem 2rem;
    }
    @media (min-width: 1280px) {
      padding: 6rem 2rem;
      gap: 4rem;
    }
    @media (min-width: 1600px) {
      gap: 6rem;
    }
    @media (min-width: 1920px) {
      gap: 8rem;
      a {
        margin-top: -2rem;
      }
    }
  }
</style>
