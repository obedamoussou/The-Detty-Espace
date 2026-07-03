import { motion } from 'framer-motion'
import { STRIP_FEATURES } from '../data/content'

export default function FeatureStrip() {
  return (
    <section className="relative z-20 border-y border-white/10 bg-night-900">
      <div className="container-x">
        <ul className="grid grid-cols-2 divide-white/10 py-2 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
          {STRIP_FEATURES.map((f, i) => (
            <motion.li
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center justify-center gap-2.5 px-3 py-4 text-center"
            >
              <f.icon size={22} className="shrink-0 text-ember-500" />
              <span className="text-xs font-semibold uppercase tracking-wide text-sand-100/85">
                {f.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
