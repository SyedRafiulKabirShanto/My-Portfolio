import { education } from './education'
import { experience } from './experience'
import { profile } from './profile'
import { projects } from './projects'
import { skills } from './skills'
import type { PortfolioData } from '../types/portfolio'

export const defaultPortfolioData: PortfolioData = {
  profile,
  cv: {
    src: '/src/assets/cv.pdf',
    fileName: 'Syed-Rafiul-Kabir-CV.pdf',
  },
  education,
  experience,
  projects,
  skills,
}

