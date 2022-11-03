<script>
  import ProjectLinks from "./ProjectLinks.svelte";
  export let project;
</script>

<div class="project">
  <div class="project-img-container">
    <img src={project.imageURL} alt="project screen" />
    <div class="img-overlay">
      <ProjectLinks {project} type="overlay" />
    </div>
  </div>
  <div class="project-info-container">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <div class="info-links-container">
      <ProjectLinks {project} type="normal" />
    </div>
  </div>
</div>

<style lang="scss">
  .project {
    @apply flex w-full max-w-[350px] flex-col rounded-2xl;
    .project-img-container {
      @apply relative aspect-video w-full;
      img {
        @apply block aspect-video h-full w-full rounded-t-2xl object-cover;
      }
      .img-overlay {
        @apply absolute left-0 top-0 hidden h-full w-full rounded-t-2xl bg-black bg-opacity-60 opacity-0 transition-all duration-300 hover:opacity-100;
      }
    }
    .project-info-container {
      @apply flex h-full flex-col items-center gap-4 rounded-b-2xl bg-white py-8 px-4;
      h3 {
        @apply text-xl font-semibold;
      }
      p {
        @apply text-sm font-normal;
      }
      .info-links-container {
        @apply flex justify-center gap-4;
      }
    }
    @media (min-width: 1024px) and (hover) {
      .project-img-container {
        .img-overlay {
          display: initial;
        }
      }
      .project-info-container {
        .info-links-container {
          display: none;
        }
      }
    }
  }
</style>
