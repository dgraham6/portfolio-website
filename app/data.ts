type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'work1',
    company: 'Consumers Energy',
    title: 'Data Science Intern',
    start: 'May 2025',
    end: 'August 2025',
    link: 'https://www.consumersenergy.com',
  },
  {
    id: 'work2',
    company: 'University of Michigan',
    title: 'Assistant Researcher — Multidisciplinary Design Program',
    start: 'Aug 2023',
    end: 'Jan 2024',
    link: 'https://mdp.engin.umich.edu',
  },
];



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dgraham6',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/drake-graham-csds14/',
  },
]

export const EMAIL = 'dgraham7362@email.com'

export const EDUCATION = [
  {
    school: 'University of Michigan',
    degree: 'B.S. Data Science - Minor in Math',
    field: 'College of Engineering',
    start: 'Aug 2023',
    end: 'Apr 2027',
    image: 'images/michigan-wolverines-1-logo-black-and-white.png'
  },
  // …you can add more entries here
]
