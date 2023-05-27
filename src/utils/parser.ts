export const parseMinutes = (mins: string): string => {
  const hours = Math.floor(Number(mins) / 60)
  const minutes = Number(mins) % 60

  return `${hours} h ${minutes} min`
}

export const parseRatings = (rate: number): number => {
  const scaledRating = (rate / 10) * 5;

  return Number(scaledRating.toFixed(1))
}

type size = "w300" | "w780" | "w1280" | "original"
export const getBackdropPath = (path: string, size: size) => {
  return `https://image.tmdb.org/t/p/${size}/${path}`
}

export const parseCurrency = (price: number) => {
  const getCurrency = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).split('.')[0]
  return getCurrency
}
