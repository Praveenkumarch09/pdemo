import { motion } from "framer-motion";

const cards = [
  { title: "Personal Portfolio", desc: "Showcase site", available: false },
  { title: "Vote Counter App", desc: "Counts and shows winner", available: true },
  { title: "3D Profile Card", desc: "CSS 3D transforms", available: true },
  { title: "Crystal Nav Website", desc: "Glass hover nav", available: true },
  { title: "To-Do List App", desc: "Add / delete / save", available: true },
  { title: "Curry Maker Website", desc: "Drag & drop fun", available: false },
  { title: "MLBB Giveaway Page", desc: "Spin + entry", available: true },
  { title: "Digital Clock", desc: "Live updating time", available: true },
];

function ProjectCard({title, desc, available}) {
  return (
    <div className="group relative glass hover-glow p-5 rounded-2xl min-h-[150px] overflow-hidden">
      {/* hover badge */}
      <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold tracking-wide transition
        ${available ? "bg-emerald-500/20 text-emerald-300" : "bg-pink-500/20 text-pink-300"}
        opacity-0 group-hover:opacity-100`}>
        {available ? "AVAILABLE" : "NOT AVAILABLE"}
      </div>

      {/* content */}
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>

      {/* subtle shine sweep on hover */}
      <span className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/3 translate-x-[-120%] rotate-[25deg]
        bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700
        group-hover:translate-x-[220%]" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">My Projects</h2>
      <motion.div
        initial={{opacity:0, y:8}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {cards.map((c, i) => (<ProjectCard key={i} {...c} />))}
      </motion.div>
    </section>
  );
}
