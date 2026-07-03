import { MapPin, Calendar, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { EVENT } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-night-900">
      <div className="container-x py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-6">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-sand-100/60">{EVENT.intro}</p>
          </div>

          <div className="space-y-3 text-sm">
            <Item icon={MapPin}>
              {EVENT.hotel}
              <br />
              {EVENT.location}
            </Item>
            <Item icon={Calendar}>{EVENT.dates}</Item>
          </div>

          <div className="space-y-3 text-sm">
            <Item icon={Phone}>
              <a href={`tel:${EVENT.phone.replace(/\s/g, '')}`} className="hover:text-ember-400">
                {EVENT.phone}
              </a>
            </Item>
            <Item icon={Mail}>
              <a href={`mailto:${EVENT.email}`} className="hover:text-ember-400">
                {EVENT.email}
              </a>
            </Item>
            <div className="flex items-center gap-3 pt-1">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sand-100/70 transition-colors hover:border-ember-500 hover:text-ember-400"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-sand-100/70 transition-colors hover:border-ember-500 hover:text-ember-400"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-sand-100/45">
          © 2026 {EVENT.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

function Item({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 text-sand-100/75">
      <Icon size={16} className="mt-0.5 shrink-0 text-ember-500" />
      <span className="leading-relaxed">{children}</span>
    </div>
  )
}
