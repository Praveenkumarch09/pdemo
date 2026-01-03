import { motion } from "framer-motion";
import { Mail, SendHorizonal, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.trim() || "Visitor";
    const email = fd.get("email")?.trim() || "";
    const message = fd.get("message")?.trim() || "";

    // build a clean mailto
    const to = "you@example.com"; // <-- put your email here
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-white/10"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 73) % 100}%`,
              width: `${4 + (i % 4)}px`,
              height: `${4 + (i % 4)}px`,
              filter: "blur(.6px)",
            }}
          />
        ))}
      </div>

      <div className="container-xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-3"
        >
          <span className="text-brand">Get</span> In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl text-white/80 mb-10"
        >
          Want to collaborate or say hi? Fill this form or email me. I’m open to
          discussing new projects and opportunities.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-5 max-w-4xl"
        >
          <div>
            <label className="block text-sm mb-2 opacity-80">Your Name</label>
            <input name="name" placeholder="Enter Your Name" className="input" />
          </div>

          <div>
            <label className="block text-sm mb-2 opacity-80">Your Email</label>
            <input
              name="email"
              placeholder="abc@example.com"
              type="email"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 opacity-80">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Your message here..."
              className="input resize-none"
            />
          </div>

          <div className="mt-2 flex flex-wrap gap-4">
            <button type="submit" className="btn-gradient">
              <SendHorizonal className="-ml-1 size-4" />
              Send Message
            </button>

            <a href="mailto:you@example.com" className="btn-outline">
              <Mail className="-ml-1 size-4" />
              Email Me
            </a>
          </div>
        </motion.form>
      </div>

      {/* floating socials on the right */}
      <div className="hidden md:flex absolute right-6 bottom-6 flex-col gap-3">
        <a className="fab" href="https://github.com/" target="_blank" rel="noreferrer">
          <Github className="size-4" />
        </a>
        <a className="fab" href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin className="size-4" />
        </a>
        <a className="fab" href="https://instagram.com/" target="_blank" rel="noreferrer">
          <Instagram className="size-4" />
        </a>
      </div>
    </section>
  );
}
