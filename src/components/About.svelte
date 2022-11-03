<script>
  import { each } from "svelte/internal";
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
  <h2>About Me</h2>
  <div class="about-container">
    <div class="about-text">
      <h3>Me</h3>
      <p>
        My name is Jakub and I am a self-taught Front-end Developer from Poland.
        I have been learning front-end for a year. I am currently in my first
        year of studies in the field of front-end development.
      </p>
    </div>
    <div class="about-skills">
      <h3>Skills</h3>
      <div class="skills-container">
        {#each skills as skill}
          <Skill {skill} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../variables";
  #about {
    @apply mx-auto flex max-w-[1200px] flex-col items-center gap-8 py-16 px-12 text-center md:gap-12 md:py-20 md:px-32 lg:px-40
    xl:gap-16 xl:py-24 xl:px-8 2xl:gap-24 2xl:py-32;
    .about-container {
      @apply flex flex-col items-center gap-8 md:gap-12 xl:flex-row xl:items-start xl:gap-40 xl:text-left 2xl:gap-48;
      .about-text,
      .about-skills {
        @apply flex flex-col items-center gap-6 md:gap-8 xl:flex-1 xl:items-start;
        h3 {
          @apply text-[26px] font-semibold md:border-4 md:text-3xl xl:text-4xl;
          border-bottom: 3px solid $text-hover;
        }
        p {
          @apply font-normal xl:text-lg 2xl:text-2xl;
        }
        .skills-container {
          @apply flex flex-wrap justify-center gap-2 md:gap-3 xl:justify-start;
        }
      }
    }
  }
</style>
