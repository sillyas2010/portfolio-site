const getYearProgressPercent = (date: Date) => {
  const firstDateOfYear = +new Date(date.getFullYear(), 0, 1)
  const currentDate = +date
  const progress =
    (((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365

  return progress / 100
}

export const getCareerYears = (start: Date, now: Date) => {
  const startYears = start.getFullYear() + getYearProgressPercent(start)
  const nowYears = now.getFullYear() + getYearProgressPercent(now)

  const careerYears = nowYears - startYears
  const careerMonths = careerYears - Math.floor(careerYears)

  return `${Math.floor(careerYears)}${careerMonths >= 0.5 ? '.5' : ''}`
}
