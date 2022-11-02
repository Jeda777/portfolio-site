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
  @import "../variables";
  .project {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    max-width: 350px;
    .project-img-container {
      aspect-ratio: 16/9;
      position: relative;
      width: 100%;
      img {
        object-fit: cover;
        display: block;
        aspect-ratio: 16/9;
        width: 100%;
        height: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
      .img-overlay {
        display: none;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgb(0 0 0 / 0.6);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
    .project-info-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      padding: 2rem 1rem;
      gap: 1rem;
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
      .info-links-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
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
