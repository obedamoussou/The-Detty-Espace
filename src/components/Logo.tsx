export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-lg uppercase tracking-tight text-ember-500 sm:text-xl">
        The Detty
      </span>
      <span className="-mt-1 font-script text-xl text-sand-50 sm:text-2xl">Escape</span>
    </div>
  )
}
