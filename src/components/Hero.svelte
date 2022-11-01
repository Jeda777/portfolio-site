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
    background-color: $bg;
    background-image: $hero-bg-img;
    padding: 8rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    text-align: center;
    h1 {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 700;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
    a {
      cursor: pointer;
      background: $text-hover;
      border-radius: 100%;
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #ede12b;
      }
      img {
        display: block;
        position: absolute;
        top: 0;
        left: -2px;
        width: 44px;
        height: 44px;
      }
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 22px;
      }
      a {
        width: 3rem;
        height: 3rem;
        img {
          width: 52px;
          height: 52px;
        }
      }
    }
    @media (min-width: 1024px) {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 26px;
      }
    }
    @media (min-width: 1280px) {
      padding: 10rem 1rem;
      h1 {
        font-size: 58px;
      }
      p {
        font-size: 28px;
      }
    }
    @media (min-width: 1440px) {
      padding: 12rem 1rem;
      h1 {
        font-size: 64px;
      }
      p {
        font-size: 32px;
      }
      a {
        width: 3.5rem;
        height: 3.5rem;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
    @media (min-width: 1600px) {
      padding: 16rem 1rem;
      h1 {
        font-size: 76px;
      }
      p {
        font-size: 38px;
      }
      a {
        width: 4rem;
        height: 4rem;
        img {
          width: 68px;
          height: 68px;
        }
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
