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
  link?: string
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

export const PROJECTS = [
  {
    name: "Sudoku-SAT Performance Lab",
    description:
      "SAT-based solver performance experiments with optimized encodings and parallelism.",
    video: "/images/sat.png",
    link: "https://github.com/dgraham6/sudoku-sat-perf-lab",
  },
  {
    name: "Taxi Trip Time Prediction Model",
    description:
      "Predictive modeling on the NYC Taxi dataset, exploring trip duration and route optimization, supported by exploratory data analysis.",
    video: "/images/taxi.png",
    link: "https://github.com/dgraham6/taxi-eda",
  },
]


export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'work1',
    company: 'Consumers Energy',
    title: 'Data Science Intern',
    start: 'May 2025',
    end: 'August 2025',
  },
  {
    id: 'work2',
    company: 'University of Michigan',
    title: 'Assistant Researcher — Multidisciplinary Design Program',
    start: 'Aug 2023',
    end: 'Jan 2024',
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
    end: 'Dec 2026',
    image: 'images/michigan-wolverines-1-logo-black-and-white.png'
  },
  // …you can add more entries here
]
