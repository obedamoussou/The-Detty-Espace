import { useEffect, useState } from 'react'

type TimeLeft = { jours: number; heures: number; minutes: number; secondes: number }

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const s = Math.floor(diff / 1000)
  return {
    jours: Math.floor(s / 86400),
    heures: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    secondes: s % 60,
  }
}

export default function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime()
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(targetMs))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  const units: { value: number; label: string }[] = [
    { value: time.jours, label: 'Jours' },
    { value: time.heures, label: 'Heures' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.secondes, label: 'Secondes' },
  ]

  return (
    <div className="flex items-stretch justify-between gap-1 sm:gap-2">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-stretch">
          <div className="flex min-w-[52px] flex-col items-center sm:min-w-[64px]">
            <span className="font-display text-3xl leading-none text-ember-400 tabular-nums sm:text-4xl">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sand-100/60">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="self-start font-display text-2xl leading-none text-white/25 sm:text-3xl">|</span>
          )}
        </div>
      ))}
    </div>
  )
}
