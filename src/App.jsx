import Navbar from "./components/Navbar.jsx"; // choose this OR Navbar.js (not both)
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx"; // or AboutSection.js (pick one)
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ParticleBG from "./components/ParticleBG.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* add horizontal padding to the whole content */}
      <main className="px-10 md:px-24 space-y-24 pt-20">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

