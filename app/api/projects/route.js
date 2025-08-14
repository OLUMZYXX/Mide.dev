// /app/api/projects/route.js
import { NextResponse } from 'next/server'

const projects = [
  {
    num: '01',
    category: 'Frontend Project',
    title: 'Apple Website Clone',
    description:
      'Developed a fully responsive Apple clone website, replicating the sleek design and functionality of the original. Utilized modern web technologies to create an interactive, pixel-perfect user experience across all devices.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/iphone.jpg',
    live: 'https://appl-website-clone.vercel.app',
    github: 'https://github.com/OLUMZYXX/Appleeee-website-clone',
    features: [
      'Responsive Design',
      'Interactive Animations',
      'Modern UI/UX',
      'Cross-browser Compatible',
    ],
  },
  {
    num: '02',
    category: 'Frontend Project',
    title: 'Modern Furniture Website',
    description:
      'Developed a sleek, responsive modern furniture website showcasing products with clean design and intuitive navigation. Leveraged HTML, CSS, and JavaScript to create an engaging user experience with a focus on minimalism and elegance',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '#',
    github: '#',
    features: [
      'Product Showcase',
      'Clean Design',
      'Responsive Layout',
      'Interactive Elements',
    ],
  },
  {
    num: '03',
    category: 'Full-Stack Project',
    title: 'Restaurant Website',
    description:
      'Developed a fully functional restaurant website with a modern, user-friendly interface, incorporating dynamic menus, reservations, and online ordering. Utilized a full stack of technologies, including React for the front end and Node.js for the back end, ensuring a seamless and responsive user experience',
    stack: [
      { name: 'HTML5' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/restaurant.png',
    live: 'https://food-website-react-ui.vercel.app',
    github: 'https://github.com/OLUMZYXX/Food-Website-React-Ui',
    features: [
      'Online Ordering',
      'Menu Management',
      'Reservation System',
      'Full-Stack Solution',
    ],
  },
]

export async function GET() {
  return NextResponse.json(projects)
}
