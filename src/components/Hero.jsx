import { motion } from "framer-motion";
import avatar from "./../assets/gaara.jpg";

export default function Hero() {
  return (
    <section id="home" className="py-16 sm:py-24">
      <div className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-14 items-center">
        {/* Avatar with hover-only glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
          className="relative mx-auto"
        >
          <div className="size-56 sm:size-64 rounded-full p-[6px] ring-1 ring-white glow-hover">
            <div className="size-full rounded-full bg-[#2b2b2b] grid place-items-center ring-1 ring-white/10 overflow-hidden">
              <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* subtle radial tint */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(236,72,153,.45),transparent_60%)]" />
        </motion.div>

        {/* Text — no stagger/typing lag; only the name types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold md:whitespace-nowrap">
            Hi, I’m <span className="text-brand typing-smooth">Praveen</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="max-w-2xl text-white/80 leading-7"
          >
            Creative developer and designer — I blend clean UI with smooth
            interactions to build delightful web experiences. Scroll down to see
            more about me and my work!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
