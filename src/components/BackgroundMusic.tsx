import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

// Déposez votre fichier audio dans public/music.mp3 (ou changez le chemin ci-dessous).
const MUSIC_SRC = '/music.mpeg'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35

    // 1) Autoplay EN MUET dès le chargement : autorisé par tous les navigateurs,
    //    donc l'élément joue réellement (en silence) tout de suite.
    audio.muted = true
    audio.play().catch(() => {})

    // 2) La moindre interaction (scroll compris) tente de DÉMUTER.
    const events = ['pointerdown', 'click', 'touchstart', 'keydown', 'scroll', 'wheel'] as const

    const cleanup = () =>
      events.forEach((ev) => window.removeEventListener(ev, onInteract))

    function onInteract() {
      const a = audio!
      a.muted = false
      a.play().catch(() => {})
      // Le scroll molette n'accorde pas toujours le droit au son : on vérifie
      // juste après si le son est réellement passé.
      window.setTimeout(() => {
        if (!a.paused && !a.muted) {
          setPlaying(true)
          cleanup() // son audible confirmé : on arrête d'écouter
        } else {
          // Refusé par le navigateur : on repasse en muet et on continue à
          // guetter la prochaine interaction (clic, clavier, toucher...).
          a.muted = true
          a.play().catch(() => {})
        }
      }, 80)
    }

    events.forEach((ev) => window.addEventListener(ev, onInteract, { passive: true }))

    return cleanup
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused || audio.muted) {
      audio.muted = false
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Couper la musique' : 'Activer la musique'}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-night-900/80 text-sand-50 shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:text-ember-400"
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  )
}
