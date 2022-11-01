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
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 28px;
      border-bottom: 4px solid $text-hover;
    }
    .about-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      .about-text,
      .about-skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        h3 {
          font-size: 26px;
          font-weight: 600;
          border-bottom: 3px solid $text-hover;
        }
        p {
          font-weight: 400;
        }
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
      }
    }
    @media (min-width: 768px) {
      padding: 5rem 8rem;
      gap: 3rem;
      h2 {
        font-size: 34px;
        border-width: 5px;
      }
      .about-container {
        gap: 3rem;
        .about-text,
        .about-skills {
          gap: 2rem;
          h3 {
            font-size: 30px;
            border-width: 4px;
          }
          .skills-container {
            gap: 0.75rem;
          }
        }
      }
    }
    @media (min-width: 1024px) {
      padding: 5rem 10rem;
    }
    @media (min-width: 1280px) {
      padding: 6rem 8rem;
      gap: 4rem;
      h2 {
        font-size: 38px;
      }
      .about-container {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        gap: 10rem;
        .about-text,
        .about-skills {
          align-items: flex-start;
          flex: 1;
          h3 {
            font-size: 34px;
          }
          p {
            font-size: 18px;
          }
          .skills-container {
            justify-content: flex-start;
          }
        }
      }
    }
    @media (min-width: 1600px) {
      padding: 8rem 10rem;
      gap: 6rem;
      h2 {
        font-size: 44px;
      }
      .about-container {
        gap: 12rem;
        .about-text,
        .about-skills {
          h3 {
            font-size: 38px;
          }
          p {
            font-size: 22px;
          }
        }
      }
    }
    @media (min-width: 1920px) {
      padding: 10rem 12rem;
      gap: 8rem;
      h2 {
        font-size: 50px;
      }
      .about-container {
        gap: 14rem;
        .about-text,
        .about-skills {
          h3 {
            font-size: 44px;
          }
          p {
            font-size: 24px;
          }
        }
      }
    }
  }
</style>
