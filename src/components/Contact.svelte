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
  #contact {
    @apply mx-auto flex max-w-[1200px] flex-col items-center gap-8 py-16 px-8 text-center md:gap-12 md:py-20 lg:py-24 xl:gap-16 2xl:gap-24;
    .contact-container {
      @apply flex flex-wrap items-center justify-center gap-8 md:gap-16;
      .contact-element {
        @apply flex flex-1 flex-col items-center gap-2;
        img {
          @apply h-10;
        }
      }
    }
  }
</style>
