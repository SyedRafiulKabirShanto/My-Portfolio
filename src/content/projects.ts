export type Project = {
  title: string
  workplace: string
  domainTags: string[]
  tech: string[]
  responsibilities: string[]
}

export const projects: Project[] = [
  {
    title: 'Action Website',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Integrations', 'Search'],
    tech: [
      'ASP.NET Core',
      'MVC / Razor',
      'MS SQL',
      'Xero OAuth2',
      'Schneider API',
      'Elasticsearch',
      'Schedulers',
    ],
    responsibilities: [
      'Implemented Xero OAuth2 auth flow with database token persistence and dynamic “Connect” state management.',
      'Integrated Elasticsearch to replace standard search logic and created scheduled tasks for bulk product updates.',
      'Built a Schneider product sync scheduler for automated category/specification mapping.',
      'Delivered a monthly order reporting system with customer identification and automated email delivery.',
      'Engineered SQL migration scripts to sync category/product attribute data from legacy databases to production.',
    ],
  },
  {
    title: 'Intelisale',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Performance', 'Background Jobs'],
    tech: ['ASP.NET Core', 'MVC / Razor', 'MS SQL'],
    responsibilities: [
      'Re-engineered core services to handle complex background calculations and improved overall performance.',
      'Built adaptive logic to resolve discrepancies in real-time data delivery.',
      'Designed scalable workflows to bridge external sales tools and the main e-commerce engine.',
      'Refined backend architecture to reduce latency and improve data reliability.',
    ],
  },
  {
    title: 'AmTab',
    workplace: 'Brain Station 23',
    domainTags: ['NopCommerce', 'Plugins', 'Performance'],
    tech: ['ASP.NET Core', 'MVC / Razor', 'MS SQL'],
    responsibilities: [
      'Identified and resolved architectural bottlenecks in custom modules to improve stability.',
      'Architected scalable plugin workflows for adding design resources without disrupting core logic.',
      'Improved cross-component communication via dependency and data-flow refinement.',
      'Optimized the rendering pipeline for efficient loading of data-heavy design resources.',
    ],
  },
  {
    title: 'Multitex ERP',
    workplace: 'MultiTech Systems',
    domainTags: ['ERP', 'HR Module', 'Reporting'],
    tech: ['ASP.NET', 'AngularJS', 'RDLC', 'Oracle DB'],
    responsibilities: [
      'Architected Oracle data retrieval workflows to process large datasets for enterprise reports.',
      'Designed RDLC reporting for workforce metrics and financial data.',
      'Engineered automated payroll and attendance logic for multi-shift calculations and statutory compliance.',
      'Optimized query performance to support near real-time report generation across historical datasets.',
    ],
  },
  {
    title: 'MPU',
    workplace: 'Global Software Architects (GSA)',
    domainTags: ['FinTech', 'Clean Architecture', 'Admin Dashboard'],
    tech: ['ASP.NET Core', 'ADO.NET', 'Angular', 'Kendo UI', 'Clean Architecture'],
    responsibilities: [
      'Architected the backend using Clean Architecture for maintainability and separation of concerns.',
      'Used ADO.NET for high-performance data access and optimized complex transactional queries.',
      'Built a dynamic admin dashboard with Kendo UI components in Angular for managing financial datasets.',
      'Implemented secure API endpoints and robust validation layers for sensitive financial operations.',
    ],
  },
  {
    title: 'TYT-Chat-bot (Track Your Truck)',
    workplace: 'Global Software Architects (GSA)',
    domainTags: ['AI-integrated', 'Real-time', 'Data processing'],
    tech: ['Node.js', 'Angular', 'OpenAI API', 'JSON processing'],
    responsibilities: [
      'Engineered a Node.js backend to ingest and process massive real-time JSON datasets for truck telemetry.',
      'Integrated OpenAI API to convert raw logistical data into natural-language insights.',
      'Designed a prompt workflow that feeds real-time JSON context for accurate fleet status updates.',
      'Built an interactive Angular chat interface for conversational tracking.',
    ],
  },
]

