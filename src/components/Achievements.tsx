import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import RecognitionCards from './RecognitionCards';
import { RailButtons } from './Rail';


export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Build notes" title="Project Milestones" />

      <RecognitionCards items={achievements} />

      {certifications.length > 0 && (
        <div className="mt-16">
          <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
              Certifications <span className="text-mist">· {certifications.length} credentials</span>
            </h3>
            <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
          </div>
          <div className="group/rail relative">
            <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
              {certifications.map((c, i) => (
                <motion.a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="group relative flex w-[230px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{c.issuer}</span>
                    <span className="text-sm text-smoke transition group-hover:text-bone">↗</span>
                  </div>
                  <p className="mt-6 text-sm font-medium leading-snug text-bone">{c.name}</p>
                </motion.a>
              ))}
            </div>
            <RailButtons rail={rail} />
          </div>
        </div>
      )}
    </>
  );
}
