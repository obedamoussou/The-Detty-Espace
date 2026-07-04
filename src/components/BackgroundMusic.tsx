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

    // Toute interaction utilisateur peut débloquer le son.
    const events = ['pointerdown', 'click', 'touchstart', 'keydown', 'scroll', 'wheel'] as const

    const cleanup = () =>
      events.forEach((ev) => window.removeEventListener(ev, tryPlay))

    function tryPlay() {
      audio!
        .play()
        .then(() => {
          setPlaying(true)
          cleanup() // succès : plus besoin d'écouter
        })
        .catch(() => {
          // Interaction sans « user activation » (ex: scroll molette) :
          // on garde les écouteurs pour la prochaine interaction.
        })
    }

    // Tentative dès l'arrivée (souvent bloquée par le navigateur) PUIS
    // écouteurs posés inconditionnellement : la moindre interaction lance la musique.
    tryPlay()
    events.forEach((ev) => window.addEventListener(ev, tryPlay, { passive: true }))

    return cleanup
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
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
