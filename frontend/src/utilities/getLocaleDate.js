export function getLocaleDate(date) {
  return (
    new Date(date).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  )
}