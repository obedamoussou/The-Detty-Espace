import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { INCLUSIONS } from '../data/content'
import { IMAGES } from '../data/images'
import Reveal from './Reveal'
import Plage from "../../public/plage.jpeg"
import Chambre from "../../public/chambre.jpeg"
import Piscine from "../../public/piscine.jpeg"
import Feu from "../../public/feu.jpeg"
import Ouidah from "../../public/ouidah.jpeg"
import Tennis from "../../public/tenis.jpeg"

const gallery = [
  { src: Plage, alt: 'Plage', span: '' },
  { src: Chambre, alt: 'Chambre', span: '' },
  { src: Piscine, alt: 'Piscine', span: '' },
  { src: Feu, alt: 'Feu de plage', span: '' },
  { src: IMAGES.nightclub, alt: 'Boîte de nuit', span: '' },
  { src: IMAGES.basketball, alt: 'Basketball', span: '' },
  { src: Ouidah, alt: 'Visite de Ouidah', span: '' },
  { src: Tennis, alt: 'Tennis', span: '' },
]

export default function AllInclusive() {
  return (
    <section id="apropos" className="relative py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
        {/* Left text */}
        <div>
          <Reveal>
            <h2 className="section-title">
              Une expérience
              <br />
              <span className="text-gradient-ember">All Inclusive</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-md text-sand-100/75">
              Profitez d'un séjour 100% all inclusive avec hébergement, repas, activités et accès à
              toutes les infrastructures.
            </p>
          </Reveal>

          <ul className="mt-6 space-y-2.5">
            {INCLUSIONS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm text-sand-50"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-600/90">
                  <Check size={13} strokeWidth={3} className="text-white" />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-6 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-relaxed text-sand-100/60">
              <Info size={15} className="mt-0.5 shrink-0 text-ember-400" />
              Les consommations au bar sont libres et à la charge de chacun(e), y compris pendant la
              pool party, le feu de plage et la soirée en boîte de nuit.
            </p>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.alt}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
              <figcaption className="absolute bottom-2 left-3 text-xs font-semibold uppercase tracking-wide text-white/90 drop-shadow">
                {g.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
