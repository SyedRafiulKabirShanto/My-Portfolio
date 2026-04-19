export const profile = {
  name: 'Syed Rafiul Kabir',
  role: 'Software Engineer I',
  location: 'Mirpur DOHS, Dhaka, Bangladesh',
  summary:
    'Results-driven Software Engineer specializing in the .NET ecosystem and Angular. I build and scale enterprise applications with a focus on performance, reliability, and clean architecture.',
  contact: {
    // TODO: replace with your real email address
    email: 'mailto:your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/syedrafiulkabir/',
    github: 'https://github.com/SyedRafiulKabir',
  },
  photo: {
    publicPath: '/shanto.jpg',
    alt: 'Portrait of Syed Rafiul Kabir',
  },
} as const

export type Profile = typeof profile
