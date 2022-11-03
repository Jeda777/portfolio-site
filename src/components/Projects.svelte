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
  #projects {
    .projects-container {
      @apply flex w-full flex-wrap justify-center gap-8;
    }
    a {
      @apply rounded-3xl bg-secondary py-2 px-6 text-lg text-white transition-all duration-300 hover:opacity-70 2xl:-mt-4;
    }
  }
</style>
