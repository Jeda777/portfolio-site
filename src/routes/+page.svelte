<script>
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import About from "../components/About.svelte";
  import Projects from "../components/Projects.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";
  import "./+page.scss";
</script>

<Navbar />
<main>
  <Hero />
  <About />
  <Projects />
  <Contact />
</main>
<Footer />
