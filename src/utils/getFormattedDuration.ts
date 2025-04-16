export const getFormattedDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  let result = ''
  if (hours > 0) {
    result += `${hours}h `
  }
  if (remainingMinutes > 0 || hours === 0) {
    result += `${remainingMinutes}min`
  }

  return result
}
