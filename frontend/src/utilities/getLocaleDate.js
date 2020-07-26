export function getLocaleDate(date) {
  if (date == null) {
    return ''
  }
  const parsedDate = date === +date ? date : Date.parse(date)
  if (isNaN(parsedDate)) {
    return ''
  }
  return (
    new Date(parsedDate).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  )
}