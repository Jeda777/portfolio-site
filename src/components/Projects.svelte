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
    @apply mx-auto flex max-w-[1200px] flex-col items-center gap-8 py-16 px-8 text-center md:gap-12 md:py-20 md:px-8 lg:py-24
    xl:gap-16 2xl:gap-28;
    .projects-container {
      @apply flex w-full flex-wrap justify-center gap-8;
    }
    a {
      @apply rounded-3xl bg-secondary py-2 px-6 text-lg text-white transition-all duration-300 hover:opacity-70 2xl:-mt-4;
    }
  }
</style>
