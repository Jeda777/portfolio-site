<script>
  export let skill;
</script>

<p class="skill" key={skill}>{skill}</p>

<style lang="scss">
  .skill {
    @apply rounded-lg bg-primary py-1 px-3 text-sm font-normal text-bg transition-all duration-300 hover:opacity-70 md:rounded-[0.625rem] md:py-1.5 
    md:px-3.5 md:text-base lg:rounded-xl lg:py-2 lg:px-4 2xl:text-lg 3xl:text-[20px];
  }
</style>
