<script>
  import github from "../assets/github.png";
  import githubDark from "../assets/githubDark.png";

  export let project;
  export let type;
</script>

<a
  href={project.githubURL}
  class={`${type} ${project.siteURL === undefined ? "only" : ""}`}
  target="_blank"
  rel="noreferrer"
>
  <img
    src={type === "overlay" ? github : githubDark}
    alt={`${project.name} github`}
  /></a
>
{#if project.siteURL !== undefined}
  <a href={project.siteURL} class={type} target="_blank" rel="noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={type === "overlay" ? "#ffffff" : "#000000"}
      class="h-6 w-6"
      aria-label={`${project.name} website`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  </a>
{/if}

<style lang="scss">
  a {
    @apply rounded-full outline-offset-8 outline-white transition-opacity duration-300 focus-within:opacity-70 hover:opacity-70;
    img,
    svg {
      @apply block h-9 w-9;
    }
  }
  a.overlay {
    @apply absolute top-1/2 left-1/3;
    transform: translate(-50%, -50%);
    &.only {
      @apply left-1/2;
    }
    &:nth-child(2) {
      @apply left-2/3;
    }
    img,
    svg {
      @apply block h-12 w-12;
    }
  }
</style>
