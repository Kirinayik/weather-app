export default function getTimeOfDay(hours: number): string {
  if (hours >= 0 && hours < 6) {
    return 'night'
  } else if (hours >= 6 && hours < 12) {
    return 'morning'
  } else if (hours >= 12 && hours < 17) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}
