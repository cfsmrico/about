import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'Chaney Fonseca',
  description: "Chaney Fonseca",
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chaney Fonseca.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Austin-based <strong className="text-stone-100">devOps team lead</strong>, currently working
        at <strong className="text-stone-100">Charles Schwab</strong> facilitating software build and delivery.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I'm <strong className="text-stone-100">powerlifting</strong>, attempting
        calisthenics, <strong className="text-stone-100"> playing online chess</strong>, and loving my family.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/ChaneyFonsecaDevOpsLead.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `Bio`,
  aboutItems: [
    {label: 'Location', text: 'Georgetown, TX (Austin metro)', Icon: MapIcon},
    {label: 'Age', text: '42', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Puerto Rican / Texan', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, powerlifting, gymnastics', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Texas at Austin, Texas State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Charles Schwab', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
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
        name: 'Spanish',
        level: 1,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  //{
  //  title: 'Project title 1',
  //  description: 'Give a short description of your project here.',
  //  url: 'https://github.com/cfsmrico/cfsmrico.github.io',
  //  image: porfolioImage1,
  //},
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'San Marcos',
    title: 'Masters in Computer Science',
    content: <p>Describe</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2015 - Present',
    location: 'Charles Schwab',
    title: 'DevOps Developer',
    content: (
      <p>
        Describe
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Todo',
  items: [
    {
      type: ContactType.Location,
      text: 'Georgetown, Texas',
      href: 'https://www.google.com/maps/place/',
    },
    {
      type: ContactType.Instagram,
      text: '@chaneyvictorfonseca',
      href: 'https://www.instagram.com/chaneyvictorfonseca/',
    },
    {
      type: ContactType.Github,
      text: 'cfsmrico',
      href: 'https://github.com/cfsmrico',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/cfsmrico'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/chaneyfonseca/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/chaneyvictorfonseca/'},
];
