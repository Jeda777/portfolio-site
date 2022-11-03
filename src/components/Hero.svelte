<script>
  import arrowDown from "../assets/arrowDown.svg";
</script>

<section id="hero">
  <h1>Hi, I'm Jakub</h1>
  <p>I am front-end developer.</p>
  <a href="#about"><img src={arrowDown} alt="Arrow down" /></a>
</section>

<style lang="scss">
  @import "../variables";
  #hero {
    @apply max-w-none gap-12 bg-bg px-4 md:py-32;
    background-image: $hero-bg-img;
    min-height: calc(100vh - 4.5rem);
    h1 {
      @apply text-[32px] font-bold uppercase md:text-[40px] lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl;
    }
    p {
      @apply text-lg font-normal md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-4xl 3xl:text-[42px];
    }
    a {
      @apply relative h-10 w-10 cursor-pointer rounded-full bg-secondary md:h-12 md:w-12 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20;
      &:hover {
        img {
          rotate: 360deg;
        }
      }
      img {
        @apply absolute top-0 -left-[2px] block h-11 w-11 transition-all duration-300 md:h-[52px] md:w-[52px] 2xl:h-[68px]
        2xl:w-[68px] 3xl:h-[84px] 3xl:w-[84px];
      }
    }
    @media (min-width: 768px) {
      min-height: auto;
    }
    @media (min-width: 1280px) {
      min-height: calc(100vh - 5.25rem);
    }
    @media (min-width: 1536px) {
      min-height: calc(100vh - 6rem);
    }
  }
</style>
