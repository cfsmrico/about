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
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
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
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
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
      href: 'ChaneyFonsecaDevOpsLead.pdf',
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
    {label: 'Location', text: 'Georgetown, Texas (Austin metro)', Icon: MapIcon},
    {label: 'Age', text: '42', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, gymnastics, powerlifting (Texas deadlift record-holder)', Icon: SparklesIcon},
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
        level: 2,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2008 - 2011',
    location: 'San Marcos',
    title: 'Masters in Computer Science',
    content: <p>Texas State University</p>,
  },
  {
    date: '2001 - 2007',
    location: 'Austin',
    title: 'Bachelor of Arts in Philosophy',
    content: <p>University of Texas at Austin</p>
  }
];

export const experience: TimelineItem[] = [
  {
    date: '2020 - present',
    location: 'Charles Schwab',
    title: 'DevOps Team Lead',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2016 - 2020',
    location: 'Charles Schwab',
    title: 'DevOps Developer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2015 - 2016',
    location: 'Randstad @ Charles Schwab',
    title: 'DevOps Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2015',
    location: 'Experis @ Dell',
    title: 'Software Development Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2014 - 2015',
    location: 'PureWRX',
    title: 'Software Developer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2013 - 2014',
    location: 'Bazaarvoice',
    title: 'Software QA Automation Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2013',
    location: 'InReach',
    title: 'Software Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2012',
    location: 'Apex Systems @ 3M',
    title: 'Software Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2011 - 2012',
    location: 'CGI Federal',
    title: 'Consultant (Web Developer)',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2011 - 2011',
    location: 'Texas Department of Transportation',
    title: 'Summer IT Technician',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2009 - 2010',
    location: 'Texas State University',
    title: 'Graduate Instructional Assistant',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2008',
    location: 'Texas State University',
    title: 'Computer Science Grader',
    content: (
      <p>

      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: "TODO - have not hooked up SendGrid, yet",
  items: [
    {
      type: ContactType.Location,
      text: 'Georgetown, Texas',
      href: 'https://www.google.com/maps/place/Georgetown,+TX/@30.6567877,-97.7913503,12z/data=!3m1!4b1!4m6!3m5!1s0x8644d5fd54dafbdf:0x61ec34de94c03a09!8m2!3d30.6332618!4d-97.6779842!16zL20vMDEwYzJn?entry=ttu',
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
