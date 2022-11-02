<script>
  export let skill;
</script>

<p class="skill" key={skill}>{skill}</p>

<style lang="scss">
  @import "../variables";
  .skill {
    padding: 0.25rem 0.75rem;
    background: $text;
    color: $bg;
    border-radius: 0.5rem;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
    @media (min-width: 768px) {
      padding: 0.375rem 0.875rem;
      border-radius: 0.625rem;
    }
    @media (min-width: 1024px) {
      padding: 0.5rem 1rem;
      border-radius: 0.75rem;
    }
    @media (min-width: 1280px) {
      font-size: 18px;
    }
    @media (min-width: 1600px) {
      font-size: 22px;
    }
    @media (min-width: 1920px) {
      padding: 0.625rem 1.125rem;
      border-radius: 0.825rem;
      font-size: 24px;
    }
  }
</style>
