import icon from '@public/safari-pinned-tab.svg'
// import Image from 'next/image'
// import { Fragment } from 'react'
import ExperienceJob from './ExperienceJob'

const experienceHistory = [
  {
    icon,
    title: 'Web3 Developer',
    company: 'Alchemy',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
  {
    icon,
    title: 'Web3 Developer',
    company: 'Alchemy',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
  {
    icon,
    title: 'Web3 Developer',
    company: 'Alchemy',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
]

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-16">
      <h1 className="text-7xl">My Work Experience</h1>
      <div className="experience-container flex justify-center">
        <div className="timeline w-28 flex flex-col items-center">
          <div className="line w-0.5 bg-white h-36"></div>
          {experienceHistory.map((itemProps, i) => (
            <div key={i}>
              <ExperienceJob
                {...itemProps}
                direction={i % 2 === 0 ? 'left' : 'right'}
              />
              <div className="line w-0.5 h-96 bg-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
