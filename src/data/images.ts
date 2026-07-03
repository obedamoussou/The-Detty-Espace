// Centralized image sources (Unsplash — free to use).
// Helper appends sizing/quality params for performance.
const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  heroBonfire: img('1533105079780-92b9be482077', 1800),
  beachAerial: img('1507525428034-b723cf961d3e'),
  hotelRoom: img('1611892440504-42a792e24d32'),
  pool: img('1571896349842-33c89424de2d'),
  bonfireGroup: img('1414124488080-0188dcbb8834'),
  nightclub: img('1516450360452-9312f5e86fc7'),
  basketball: img('1546519638-68e109498ffc'),
  venue1: img('1520250497591-112f2f40a3f4', 600),
  venue2: img('1582719508461-905c673771fd', 600),
  venue3: img('1584132967334-10e028bd69f7', 600),
  venue4: img('1618773928121-c32242e63f39', 600),
  room: img('1631049307264-da0ec9d70304', 700),
}
