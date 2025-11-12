import { motion } from "framer-motion";
import "../styles/sections.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="glass"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2>About Me</h2>
        <p>
          I'm a full stack developer and ethical hacker focused on building secure, user-friendly, and exciting web apps.
          <br />
          I experiment a lot with animation, interface design, and security. I’m always learning newer tech and passionate
          about creative engineering!
        </p>
      </motion.div>
    </section>
  );
}
