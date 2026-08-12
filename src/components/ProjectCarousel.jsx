import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';

// Each project card supports an optional `video` field (a video src URL) —
// when unset it falls back to the icon-on-gradient tile. Drop in a real file
// later (project.video = "/videos/slug-demo.mp4") and this upgrades on its own.
function ProjectTile({ project }) {
  const Icon = project.icon;
  if (project.video) {
    return (
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <>
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 30% 25%, rgba(224,164,88,0.35), transparent 60%)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-white group-hover:scale-105 transition-transform duration-300">
          <Icon size={28} />
        </span>
      </div>
    </>
  );
}

function ProjectCard({ project, index, total }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group w-[82vw] sm:w-[420px] flex flex-col bg-panel border border-white/8 rounded-2xl overflow-hidden hover:border-signal hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/50"
    >
      <div className="relative h-48 overflow-hidden bg-[linear-gradient(135deg,var(--color-olive)_0%,var(--color-ink)_100%)]">
        <ProjectTile project={project} />
        <span className="absolute top-3 left-3 font-mono text-[11px] text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        {project.video && (
          <span className="absolute bottom-3 right-3 flex items-center justify-center w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm text-white">
            <Play size={12} fill="currentColor" />
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-display font-semibold text-ink mb-1 group-hover:text-signal transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-muted font-medium mb-2">{project.tagline}</p>
        <p className="text-sm text-ink/80 line-clamp-2 mb-4">{project.problem}</p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {project.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="bg-surface p-2.5 rounded-lg">
              <div className="text-[15px] font-display font-semibold text-signal">{stat.metric}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.keywords.slice(0, 3).map((keyword, i) => (
            <span key={i} className="px-2.5 py-0.5 bg-signal/15 text-signal text-xs rounded-full font-medium">
              {keyword}
            </span>
          ))}
        </div>
        <span className="mt-auto flex items-center gap-1.5 text-signal text-sm font-semibold">
          View Details
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function ProjectCarousel({ projects }) {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < maxScroll - 8);

    // Near max scroll, the last card can never reach its own offsetLeft snap
    // point (there's no room left to scroll it there), so the nearest-offset
    // search below would land on an earlier card. Treat "scrolled to the end"
    // as its own case so the last dot lights up correctly.
    if (el.scrollLeft >= maxScroll - 8) {
      setActiveIndex(el.children.length - 1);
      return;
    }

    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - el.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const scrollToIndex = (i) => {
    const el = scrollerRef.current;
    const card = el?.children[i];
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  // Steps by one card-width from wherever the scroller actually is, rather than
  // from `activeIndex` — activeIndex gets pinned to the last card once scrolled
  // near the end (see updateScrollState), which isn't a reliable step origin.
  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    const firstChild = el?.children[0];
    if (!el || !firstChild) return;
    const step = firstChild.offsetWidth + 20; // 20 = gap-5
    el.scrollTo({ left: el.scrollLeft + direction * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={updateScrollState}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="snap-center shrink-0"
          >
            <ProjectCard project={project} index={i} total={projects.length} />
          </motion.div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollPrev}
        aria-label="Previous project"
        className="hidden md:flex absolute -left-5 top-24 items-center justify-center w-10 h-10 rounded-full bg-panel border border-white/10 text-ink shadow-lg hover:border-signal disabled:opacity-0 disabled:pointer-events-none transition"
      >
        <ArrowLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollNext}
        aria-label="Next project"
        className="hidden md:flex absolute -right-5 top-24 items-center justify-center w-10 h-10 rounded-full bg-panel border border-white/10 text-ink shadow-lg hover:border-signal disabled:opacity-0 disabled:pointer-events-none transition"
      >
        <ArrowRight size={16} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? 'w-6 bg-signal' : 'w-1.5 bg-white/20 hover:bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
