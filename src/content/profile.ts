export type Profile = {
  name: string
  role: string
  location: string
  summary: string
  contact: {
    email: string
    linkedin: string
    github: string
  }
  photo: {
    src: string
    alt: string
  }
}

export const profile: Profile = {
  name: 'Syed Rafiul Kabir',
  role: 'Software Engineer I',
  location: 'Mirpur DOHS, Dhaka, Bangladesh',
  summary:
    'Results-driven Software Engineer specializing in the .NET ecosystem and Angular. I build and scale enterprise applications with a focus on performance, reliability, and clean architecture.',
  contact: {
    email: 'mailto:rafiulkabir01.rucse@gmail.com',
    linkedin: 'https://www.linkedin.com/in/syedrafiulkabir/',
    github: 'https://github.com/SyedRafiulKabir',
  },
  photo: {
    src: `${import.meta.env.BASE_URL}${import.meta.env.VITE_PROFILE_PHOTO || 'shanto.png'}`,
    alt: 'Portrait of Syed Rafiul Kabir',
  },
}
