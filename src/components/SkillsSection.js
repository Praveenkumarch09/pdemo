import { motion } from "framer-motion";
import "../styles/sections.css";

const skills = [
  "HTML", "CSS", "JavaScript", "Node.js", "React", "Python", "MySQL", "Express", "TypeScript"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Programming Languages</h2>
        <div className="skills-list">
          {skills.map(skill => (
            <motion.div
              className="skill-card glass-glow"
              whileHover={{ scale: 1.1, boxShadow: "0 0 28px #ff435c" }}
              key={skill}
            >{skill}</motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
