import { getLocaleDate } from './getLocaleDate'

describe('getLocaleDate', () => {
  test('should format a date in a German format', () => {
    const testDate = new Date(2020, 7, 13)
    expect(getLocaleDate(testDate)).toBe('13.8.2020')
  })

  test('should format a date-string in a German format', () => {
    const testDate = '2020-08-16T00:00:00.000+00:00'
    expect(getLocaleDate(testDate)).toBe('16.8.2020')
  })

  test('should treat a number as a timestamp', () => {
    expect(getLocaleDate(1)).toBe('1.1.1970')
  })

  test('should return an empty string when date is null', () => {
    const testDate = null
    expect(getLocaleDate(testDate)).toBe('')
  })

  test('should return an empty string when date-string is not parsable', () => {
    const testDate = 'Hello'
    expect(getLocaleDate(testDate)).toBe('')
  })
})
