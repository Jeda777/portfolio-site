<script>
  import logo from "../assets/logo.png";
  import menu from "../assets/menu.svg";
  import close from "../assets/close.svg";

  let open = false;

  const handleMenuButton = () => {
    open ? (open = false) : (open = true);
  };

  const closeMenu = () => {
    open = false;
  };
</script>

<header>
  <div class="header-left">
    <img src={logo} alt="Jakub Jęda logo" />
    <a href="/">Jakub Jęda</a>
  </div>
  <div class="header-right">
    <button on:click={handleMenuButton} type="button" class="mobile-button">
      <img src={open ? close : menu} alt="mobile menu open close" />
    </button>
    <nav class="desktop-nav">
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
  <nav
    class={`mobile-nav ${open ? "opened" : ""}`}
    inert={!open ? "true" : undefined}
  >
    <a href="/" on:click={closeMenu}>Home</a>
    <a href="#about" on:click={closeMenu}>About</a>
    <a href="#projects" on:click={closeMenu}>Projects</a>
    <a href="#contact" on:click={closeMenu}>Contact</a>
  </nav>
</header>

<style lang="scss">
  @import "../variables";
  header {
    @apply fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-white p-4 shadow-[0_-56px_40px_40px_rgba(0,0,0,0.3)]
    shadow-primary lg:py-5 lg:px-6 xl:px-8 2xl:py-6 2xl:px-10 3xl:px-12;
    a {
      @apply outline-offset-4 transition-colors duration-300 hover:text-secondary focus:text-secondary;
    }
    .header-left {
      @apply flex items-center gap-2 md:gap-3 2xl:gap-4;
      img {
        @apply w-10 lg:w-11 2xl:w-12;
      }
      a {
        @apply text-lg font-bold md:text-xl lg:text-[22px] 2xl:text-2xl;
      }
    }
    .header-right {
      .mobile-button {
        @apply h-8 w-8 cursor-pointer md:hidden;
        img {
          @apply block w-full;
        }
      }
      .desktop-nav {
        @apply hidden gap-6 md:flex md:gap-7 lg:gap-8 2xl:gap-12;
        a {
          @apply font-semibold uppercase lg:text-lg 2xl:text-xl;
        }
      }
    }
    .mobile-nav {
      @apply absolute top-[110%] -left-full flex w-[90%] flex-col rounded-2xl bg-white px-4 py-2 text-center transition-all
      duration-300 md:hidden;
      &.opened {
        left: 5%;
      }
      a {
        @apply border-0 border-t border-solid border-bg py-4 font-semibold;
        &:nth-child(1) {
          border: none;
        }
      }
    }
  }
</style>
