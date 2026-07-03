import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { EVENT } from '../data/content'
import { IMAGES } from '../data/images'
import Reveal from './Reveal'
import Lieu from "../../public/lieu.jpeg"

export default function Stay() {
  // const newLocal = ""
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-8 lg:grid-cols-2">
        {/* Hébergement */}
        <Reveal>
          <div id="hebergement" className="h-full overflow-hidden rounded-2xl border border-white/10 bg-night-900">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-3xl uppercase tracking-tight text-sand-50">
                Hébergement
              </h3>
            </div>
            <div className="grid gap-5 px-6 pb-6 ">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={IMAGES.room}
                  alt="Chambre double"
                  loading="lazy"
                  className="h-full min-h-[220px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-xl uppercase tracking-tight text-ember-500">
                  Chambre Double
                </h4>
                <p className="text-xs uppercase tracking-wide text-sand-100/60">
                  Jusqu'à 2 personnes
                </p>
                {/* <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sand-100/70">
                  Inclus :
                </p>
                <ul className="mt-2 space-y-1.5">
                  {roomInclusions.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-sand-50">
                      <Check size={14} className="mt-0.5 shrink-0 text-ember-500" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <span className="inline-block rounded-lg bg-gradient-to-r from-ember-600 to-ember-500 px-5 py-2.5 font-display text-lg tracking-tight text-white">
                    {EVENT.price} {EVENT.currency}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Le lieu */}
        <Reveal delay={0.1}>
          <div id="lieu" className="card h-full p-6 sm:p-8">
            <h3 className="font-display text-3xl uppercase tracking-tight text-sand-50">Le lieu</h3>
            <h4 className="mt-4 font-semibold text-ember-500">{EVENT.hotel}</h4>
            <p className="mt-2 text-sm leading-relaxed text-sand-100/75">
              Un hôtel situé en bord de mer à Grand-Popo. Profitez d'un cadre exceptionnel entre
              plage, piscine, chambres confortables et espaces de loisirs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 overflow-hidden rounded-xl"
            >
              <img
                src={Lieu}
                alt={EVENT.hotel}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                EVENT.hotel + ' ' + EVENT.location,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 !py-2.5 !text-xs"
            >
              <MapPin size={15} /> Voir sur la carte
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
