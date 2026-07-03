import { createLucideIcon } from 'lucide-react'

// Custom basketball icon following lucide's API (stroke, currentColor, 24 viewBox).
const Basketball = createLucideIcon('Basketball', [
  ['circle', { cx: '12', cy: '12', r: '10', key: 'ball' }],
  ['line', { x1: '12', y1: '2', x2: '12', y2: '22', key: 'seam-v' }],
  ['line', { x1: '2', y1: '12', x2: '22', y2: '12', key: 'seam-h' }],
  ['path', { d: 'M4.9 4.9a15 15 0 0 1 0 14.2', key: 'seam-l' }],
  ['path', { d: 'M19.1 4.9a15 15 0 0 0 0 14.2', key: 'seam-r' }],
])

export default Basketball
