<script>
  import linkedIn from "../assets/linkedIn.png";
  import githubDark from "../assets/githubDark.png";
  import email from "../assets/mail.svg";
</script>

<section id="contact">
  <h2>Contact</h2>
  <div class="contact-container">
    <div class="contact-element">
      <img src={githubDark} alt="GitHub" />
      <a href="https://github.com/Jeda777" target="_blank" rel="noreferrer"
        >github.com/Jeda777</a
      >
    </div>
    <div class="contact-element">
      <img src={linkedIn} alt="linkedIn" />
      <a
        href="https://www.linkedin.com/in/jakub-tomasz-j%C4%99da/"
        target="_blank"
        rel="noreferrer">linkedin.com/in/jakub-tomasz/</a
      >
    </div>
    <div class="contact-element">
      <img src={email} alt="E-Mail" />
      <p>jakub.jeda@wp.pl</p>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../variables";
  #contact {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    .contact-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      .contact-element {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        img {
          height: 40px;
        }
      }
    }
    @media (min-width: 768px) {
      padding: 5rem 2rem;
      gap: 3rem;
      .contact-container {
        gap: 4rem;
      }
    }
    @media (min-width: 1024px) {
      padding: 6rem 2rem;
    }
    @media (min-width: 1280px) {
      padding: 6rem 2rem;
      gap: 4rem;
    }
    @media (min-width: 1600px) {
      gap: 6rem;
    }
    @media (min-width: 1920px) {
      gap: 8rem;
    }
  }
</style>
