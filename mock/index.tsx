import { ProjectItem, Service, Testimonial } from '@/types'
import { Monitor, Smartphone, Workflow, Server, } from 'lucide-react'
import FigmaIcon from '@/components/icons/figma-icon'
import LaravelIcon from '@/components/icons/laravel-icon'

export const SERVICES: Service[] = [
{
  key: 'ui/ux',
  title: 'UI/UX Design',
  description:
    'Designing user-centered interfaces with clear flows and structured systems from research to high-fidelity prototypes.',
  icon: FigmaIcon,
  highlights: []
},
{
  key: 'frontend',
  title: 'Frontend Development',
  description:
    'Building responsive and interactive web interfaces using modern frameworks and clean implementation practices.',
  icon: LaravelIcon,
  highlights: [
  ],
},
{
  key: 'backend',
  title: 'Backend API & Integration',
  description:
    'Developing backend logic and integrating REST APIs to ensure smooth communication between systems.',
  icon: Server,
  highlights: [
  ],
},
{
  key: 'mobile',
  title: 'Mobile UI Implementation',
  description:
    'Developing basic mobile application interfaces as part of academic and project-based experience.',
  icon: Smartphone,
  highlights: []
} ]

export const PROJECTS: ProjectItem[] = [
  {
    frontImage: '/images/project/project-kudaku-1.png',
    backImage: '/images/project/project-kudaku-2.png',
    title: 'Website KudaKu',
    topics: ['PHP', 'Laravel', 'REST API', 'MySQL', 'Authentication'],
  },
  {
    frontImage: '/images/project/project-lashielust-1.png',
    backImage: '/images/project/project-lashielust-2.png',
    title: 'Lashie Lust Admin Dashboard (Frontend)',
    topics: ['PHP', 'Laravel'],
  },
]
