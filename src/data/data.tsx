import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon, MailIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header.jpg';
// import porfolioImage1 from '../images/portfolio/demo.gif';
// import porfolioImage2 from '../images/portfolio/design.gif';

// import porfolioImage4 from '../images/portfolio/poster.jpg';
// import porfolioImage5 from '../images/portfolio/results.png';
import porfolioImage6 from '../images/portfolio/reg.png';
// @ts-ignore
import porfolioImage3 from '../images/portfolio/launchsq.jpeg';
import porfolioImage7 from '../images/portfolio/blackpill.png';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/puffline.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "CV of Stefanie Joubert",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Welcome to the CV of Stefanie Joubert`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a newly graduated Computer & Electronic Engineer from Pretoria, South Africa.

        I currently work at <strong className="text-stone-100">Keystone Electronic Solutions</strong> as a Junior Software Engineer.
        Most recently I've been involved in full stack development of an interactive web API for viewing, dispatching and adding products to a database.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In the past year I have enjoyed working with big data and machine learning, as well as with the STM32 microcontroller.
  I am most comfortable working in Python and C++ as well as accustomed to using Docker and Git for version control.
      </p>
    </>
  ),
  actions: [
    {
      href: 'Stefanie_Joubert_cv.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I strive to be positive and enthusiastic. I enjoy being challenged, learning new skills and solving problems. 
  I enjoy learning new skills to deliver high quality solutions. I am well rounded and with skills and knowledge accross platforms
  I enjoy travelling to learn about cultures and new ways of thought.
  In my free time time I enjoy cycling, trail running, hiking, mountain climbing, tennis and badminton. 
  Besides spending times outdoors, I enjoy board games, pets and a good braai.
 `,
  aboutItems: [
    {label: 'Location', text: 'Pretoria, South Africa', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'South African', Icon: FlagIcon},
    {label: 'Interests', text: 'Outdoors, sports, new tech, travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'North-West University, Potchefstroom', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Keystone Electronic Solutions', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section analysis paralysis vs specialize data decision precision, pics of traveling and braai competition,
 * risk boundary pusher and innovative... leanent towards falling but not failing.
 * striving to be part of a company that drives innovation and pushes the boundaries of possibility.
 * Part of a culture that where i can learn for others and be menotored to become better and contribute to a higher level.
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Afrikaans',
        level: 10,
      },
      {
        name: 'ASL',
        level: 3,
      },
    ],
  },
      {
    name: 'Embedded development',
    skills: [
      {
        name: 'C/C++',
        level: 8,
      },
      {
        name: 'PCP Design',
        level: 4,
      },
      {
        name: 'Matlab/Simulink',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'PHP',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'C/C++',
        level: 7,
      },
    ],
  },
  {
    name: 'Other development',
    skills: [
      {
        name: 'Swift',
        level: 4.5,
      },
              {
        name: 'Pytorch',
        level: 7,
      },
              {
        name: 'Tensoflow',
        level: 5,
      },
    ],
  },
  {
    name: 'Life skills development',
    skills: [
      {
        name: 'Aging',
        level: 2,
      },
      { name: 'Travelling',
        level: 7,
      },
              {
        name: 'Mastering "braai broodjies" techniques',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Final year project',
    description: 'Sign Language translation with non-manual feature recognition. This app uses machine learning models to recognize hand gestures and the effect that accompanying facial expressions has on the output.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Database webtool',
    description: 'A Client\'s webtool for a database system. This tool enables viewing and limited editing for specific users.',
    url: 'https://timbaker.me',
    image: porfolioImage6 ,
  },
  {
    title: 'STM32 based ventilator system',
    description: 'A project in C to create a medical ventilator mimicking the patient\'s flow and pressure after setting parameters. This project was done as part of my studies using RTOS, UART and interrupts.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2016-2022',
    location: 'North-West University Potchefstroom',
    title: 'B.Eng Computer & Electronic Engineering',
    content: <p>Through the course of my studies I used a wide range of programming languages and programs that bested suited each project.
<br/>
<br/>
      I used C and C++ in Matlab, Simulink for simulations, mathematics and analytics for multiple years and projects.
      For Embedded systems and firmware I have worked with the mostly with STM32s and Arduino. I have experience in using timers, interrupts, UART and RTOS in creating desired outcomes.
      In Software development I've used C++ for Object Orientated Programming, Python in Big Data and Machine Learning, HTML and Javascript with PHP and SQL for Databases and
    lastly, Swift for IOS development.</p>,
  },
  {
    date: '2002-2014',
    location: 'Hatfield Christian School',
    title: 'Primary and High School',
    content: <p>Matriculated in the top 5 of my school with Maths, Science, Accounting & Biology as choice subjects.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'Keystone Electronic Solutions',
    title: 'Junior Software Engineer',
    content: (
      <p>
        I have been using Python, Jinja2, Flask, mySQL, SQLAlchemy, HTML, CSS, Bootstrap and JavaScript amongst others.

         I was tasked with front and back end development of an interactive database website tool and API.
        This lead to a more in depth knowledge of OOP, Python, Javascript and SQL.
        All the projects are developed in a team setting and use Docker and Gitlab for development.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out and contact me for any further questions.',
  items: [
    {
      type: ContactType.Email,
      text: 's.joubert@zoho.com',
      href: 'mailto:s.joubert@zoho.com',
    },
    {
      type: ContactType.Location,
      text: 'Pretoria, South Africa',
      href: 'https://www.google.ca/maps/place/Pretoria/@-25.7585829,28.057866,11z/data=!3m1!4b1!4m5!3m4!1s0x1e95619cbec65033:0xf66262b07a847b4c!8m2!3d-25.7478676!4d28.2292712',
    },
    {
      type: ContactType.Phone,
      text: '+27 83 452 9940',
      href: 'phone:+27 83 452 9940'

    },
    {
      type: ContactType.Github,
      text: 'Stefanie on Github',
      href: 'https://github.com/SteezieJ',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/stefaniejoubert/'},
    {label: 'Email', Icon: MailIcon, href: 'mailto:s.joubert@zoho.com'},
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SteezieJ'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},

  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
