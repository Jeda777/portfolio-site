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
    rel="noreferrer">More Projects</a
  >
</section>

<style lang="scss">
  #projects {
    .projects-container {
      @apply flex w-full flex-wrap justify-center gap-6 lg:gap-8;
    }
    a {
      @apply rounded-3xl bg-secondary py-2 px-8 text-lg text-white outline-offset-8 transition-opacity duration-300
      hover:opacity-70 focus:opacity-70 2xl:-mt-4;
    }
  }
</style>
