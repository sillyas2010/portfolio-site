import { getCareerYears } from '@/app/utils/careerYears'

export const name = 'Illia Hloza'
export const subTitle = 'Frontend Developer (React)'
// from 15.07.2017 till now
export const careerYears = getCareerYears(new Date(2017, 7 - 1, 15), new Date())

export const careerDescriptionText = `
      I have over ${careerYears} years of commercial experience as a Front End
      Developer (including Full Stack Node.js knowledge) and 6.5 years of
      academic learning experience at a local technological university. I hold a
      Master's degree in Software Engineering from ZPS University of
      Ukraine and have an upper intermediate level of proficiency in written and
      spoken English. I am highly motivated, detail-oriented, and a responsible
      employee who is always interested in building mutually-beneficial
      partnerships. Have any questions or offers? Feel free to contact me on
      social networks or by email 24/7.
`
