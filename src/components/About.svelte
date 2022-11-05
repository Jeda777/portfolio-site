<script>
  import Skill from "./Skill.svelte";
  const skills = [
    "React",
    "Svelte",
    "JS",
    "TS",
    "TailwindCSS",
    "Bootstrap",
    "SASS",
    "CSS",
    "Git",
    "HTML",
  ];
</script>

<section id="about">
  <h2 tabindex="0">About Me</h2>
  <div class="about-container">
    <p>
      My name is Jakub and I am a self-taught Front-end Developer from Poland. I
      have been learning front-end for a year. I am currently in my first year
      of studies in the field of front-end development.
    </p>
    <div class="skills-container">
      {#each skills as skill}
        <Skill {skill} />
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  #about {
    @apply px-12 md:px-32 lg:px-40 xl:px-8;
    .about-container {
      @apply flex flex-col items-center gap-8 md:gap-12 xl:flex-row xl:items-start xl:gap-40 xl:text-left 2xl:gap-48;
      p {
        @apply max-w-2xl font-normal md:text-lg xl:flex-1 xl:text-[20px] 2xl:text-2xl 3xl:text-[26px];
      }
      .skills-container {
        @apply flex flex-wrap justify-center gap-2 md:gap-3 xl:flex-1 xl:justify-start;
      }
    }
  }
</style>
