export type ExperienceItem = {
  company: string
  title: string
  start: string
  end: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Brain Station 23',
    title: 'Software Engineer I',
    start: 'Oct 2025',
    end: 'Present',
    highlights: [
      'Build and maintain custom NopCommerce-based solutions with a focus on performance and reliability.',
      'Deliver features end-to-end across backend, integrations, data, and UI with strong ownership.',
    ],
  },
  {
    company: 'MultiTech Systems',
    title: 'Associate Software Engineer',
    start: 'Apr 2025',
    end: 'Sep 2025',
    highlights: [
      'Primarily worked on the HR module of the Multitex ERP application.',
      'Improved system stability and delivery speed through pragmatic refactoring and debugging.',
    ],
  },
  {
    company: 'Global Software Architects (GSA)',
    title: 'Associate Software Engineer',
    start: 'Jan 2024',
    end: 'Apr 2025',
    highlights: [
      'Developed production features in .NET and Angular stacks for real-world business needs.',
      'Applied OOP, SOLID, and Agile practices to deliver maintainable, testable solutions.',
    ],
  },
]
