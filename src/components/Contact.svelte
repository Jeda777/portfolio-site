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
        rel="noreferrer">linkedin.com/in/jakub-tomasz-jęda/</a
      >
    </div>
    <div class="contact-element">
      <img src={email} alt="E-Mail" />
      <p tabindex="0">jakub.jeda@wp.pl</p>
    </div>
  </div>
</section>

<style lang="scss">
  #contact {
    .contact-container {
      @apply flex flex-wrap items-center justify-center gap-8 md:items-start md:gap-16;
      .contact-element {
        @apply flex flex-1 flex-col items-center gap-2 2xl:gap-4;
        img {
          @apply h-10 md:h-11 xl:h-12 3xl:h-14;
        }
        a,
        p {
          @apply underline-offset-8 outline-none hover:underline focus:underline md:text-lg xl:text-xl 3xl:text-2xl;
        }
      }
    }
  }
</style>
