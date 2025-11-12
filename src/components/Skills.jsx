import { motion } from "framer-motion";

/* simple inline SVG icons */
const Icon = ({ name }) => {
  const common = "w-6 h-6";
  switch (name) {
    case "HTML": return <svg viewBox="0 0 128 128" className={common}><path fill="#E44D26" d="M19 114L9 2h110l-10 112-45 12"/></svg>;
    case "CSS": return <svg viewBox="0 0 128 128" className={common}><path fill="#1572B6" d="M19 114L9 2h110l-10 112-45 12"/></svg>;
    case "JavaScript": return <svg viewBox="0 0 128 128" className={common}><rect width="128" height="128" fill="#F7DF1E"/></svg>;
    case "Node.js": return <svg viewBox="0 0 256 272" className={common}><path fill="#339933" d="M128 0l128 74v124l-128 74L0 198V74z"/></svg>;
    case "Python": return <svg viewBox="0 0 128 128" className={common}><rect width="128" height="128" rx="24" fill="#3776AB"/><rect x="16" y="16" width="96" height="48" rx="12" fill="#FFE052"/></svg>;
    case "MySQL": return <svg viewBox="0 0 128 128" className={common}><ellipse cx="64" cy="64" rx="50" ry="38" fill="#00618A"/></svg>;
    default: return <div className={common} />;
  }
};

const Box = ({label}) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="glass hover-glow p-4 rounded-2xl relative ribbon shine flex items-center gap-3"
  >
    <Icon name={label} />
    <div className="text-lg font-medium">{label}</div>
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-6 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>

      <div>
        <div className="text-brand font-semibold mb-3">📘 Programming Languages</div>
        <motion.div
          initial={{opacity:0, y:8}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <Box label="HTML" />
          <Box label="CSS" />
          <Box label="JavaScript" />
          <Box label="Node.js" />
          <Box label="Python" />
          <Box label="MySQL" />
        </motion.div>
      </div>
    </section>
  );
}
