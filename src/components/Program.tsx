import { motion } from 'framer-motion'
import { DAY_ONE, DAY_TWO, type Slot } from '../data/content'
import Reveal from './Reveal'

function Timeline({ slots }: { slots: Slot[] }) {
  return (
    <ol className="relative ml-2 space-y-5 border-l border-white/12 pl-6">
      {slots.map((s, i) => (
        <motion.li
          key={s.time + s.title}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="relative"
        >
          <span
            className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
              s.highlight
                ? 'border-ember-400 bg-ember-500 shadow-[0_0_0_4px_rgba(242,105,31,0.18)]'
                : 'border-ember-600/70 bg-night-950'
            }`}
          />
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-semibold tabular-nums text-ember-400">{s.time}</span>
            <span className={`font-semibold ${s.highlight ? 'text-ember-400' : 'text-sand-50'}`}>
              {s.title}
            </span>
          </div>
          {s.sub && <p className="mt-0.5 text-sm text-sand-100/60">{s.sub}</p>}
        </motion.li>
      ))}
    </ol>
  )
}

export default function Program() {
  return (
    <section id="programme" className="relative overflow-hidden py-20 sm:py-28">
      {/* palm silhouette accent */}
      <div className="pointer-events-none absolute -right-10 top-10 hidden text-[18rem] leading-none text-ember-900/40 md:block">
        🌴
      </div>

      <div className="container-x relative">
        <Reveal>
          <h2 className="section-title text-center">Le programme</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="card p-6 sm:p-8">
              <span className="mb-6 inline-block rounded-md bg-ember-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Mardi 29 Décembre
              </span>
              <Timeline slots={DAY_ONE} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              <span className="mb-6 inline-block rounded-md bg-ember-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Mercredi 30 Décembre
              </span>
              <Timeline slots={DAY_TWO} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
