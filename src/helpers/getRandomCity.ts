export default function getRandomCity() {
  const array = [
    'Moscow',
    'London',
    'Paris',
    'Kiev',
    'Warsaw',
    'Vilnius',
    'Stockholm',
  ]
  return array[Math.floor(Math.random() * array.length)]
}
