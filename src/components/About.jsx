import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="glass p-2 rounded-2xl shadow-glow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          {/* reduced image size */}
          <img
            src={new URL("../assets/IMG-20251111-WA0011.jpg", import.meta.url).href}
            alt="about"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm mx-auto object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>

        <motion.p
          className="text-white/80 leading-7"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          I am a <strong>Full-Stack Developer</strong> and <strong>Ethical Hacker</strong>.
          I build secure, fast and scalable web applications, and I love blending
          modern UI with strong security practices to create safe, visually engaging
          digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
