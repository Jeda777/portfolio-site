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
    @apply flex flex-col items-center gap-12 bg-bg py-32 px-4 text-center xl:py-40 2xl:py-56;
    background-image: $hero-bg-img;
    h1 {
      @apply text-[32px] font-bold uppercase md:text-[40px] lg:text-5xl xl:text-6xl 2xl:text-7xl;
    }
    p {
      @apply text-lg font-normal md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-4xl;
    }
    a {
      @apply relative h-10 w-10 cursor-pointer rounded-full bg-secondary md:h-12 md:w-12 2xl:h-16 2xl:w-16;
      &:hover {
        img {
          rotate: 360deg;
        }
      }
      img {
        @apply absolute top-0 -left-[2px] block h-11 w-11 transition-all duration-300 md:h-[52px] md:w-[52px] 2xl:h-[68px] 2xl:w-[68px];
      }
    }
    @media (min-width: 1920px) {
      padding: 20rem 1rem;
      h1 {
        font-size: 98px;
      }
      p {
        font-size: 48px;
      }
      a {
        width: 5rem;
        height: 5rem;
        img {
          width: 84px;
          height: 84px;
        }
      }
    }
  }
</style>
