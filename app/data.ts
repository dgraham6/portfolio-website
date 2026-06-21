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
  location?: string
  status?: 'Incoming' | 'Current'
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
    id: 'work-amazon',
    company: 'Amazon',
    title: 'Software Development Engineer Intern',
    start: 'Aug 2026',
    end: 'Nov 2026',
    location: 'Bellevue, WA',
    status: 'Incoming',
  },
  {
    id: 'work-evercore',
    company: 'Evercore',
    title: 'AI/ML Engineer Intern',
    start: 'June 2026',
    end: 'Present',
    location: 'New York, NY',
    status: 'Current',
  },
  {
    id: 'work1',
    company: 'Consumers Energy',
    title: 'Data Science Intern',
    start: 'May 2025',
    end: 'Aug 2025',
    location: 'Jackson, MI',
  },
  {
    id: 'work2',
    company: 'University of Michigan',
    title: 'Assistant Researcher — Multidisciplinary Design Program',
    start: 'Aug 2023',
    end: 'Jan 2024',
    location: 'Ann Arbor, MI',
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

export const EDUCATION = [
  {
    school: 'University of Michigan',
    degree: 'B.S. Computer Science — Minor in Mathematics',
    field: 'College of Engineering',
    start: 'Aug 2023',
    end: 'May 2027',
    image: 'images/michigan-wolverines-1-logo-black-and-white.png'
  },
  // …you can add more entries here
]
