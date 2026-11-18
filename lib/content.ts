export const siteContent = {
  company: {
    name: 'Sakura System Service',
    shortName: 'SSS',
    tagline: 'Reliable. Innovative. Tailored IT Services for Seamless Digital Transformation.',
    founded: '1990',
    fullName: 'Sakura System Service Pte Ltd',
    registration: 'UEN: XXXXXXXXXX',
    domain: 'sss-sng.com.sg',
    description:
      'Since 1990, Sakura System Service has been the trusted IT partner for Japanese companies expanding across ASEAN. We deliver reliable, tailored technology solutions that bridge cultures and drive growth.',
  },

  nav: {
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Client Stories', href: '/client-stories' },
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  hero: {
    headline: 'IT Solutions Built for',
    headlineAccent: 'Japanese Business in ASEAN',
    subheadline:
      'Since 1990, Sakura System Service has been the trusted technology partner for Japanese companies expanding across Southeast Asia.',
    cta: 'Explore Our Services',
    ctaSecondary: 'Contact Us',
  },

  stats: [
    { value: '35+', label: 'Years of Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '5', label: 'Core Service Areas' },
    { value: '100%', label: 'Singapore Based' },
  ],

  services: [
    {
      id: 'office-it',
      title: 'Office IT Services',
      description:
        'End-to-end IT infrastructure support — networks, hardware, helpdesk, and maintenance tailored for Japanese office environments.',
      icon: 'Monitor',
      featured: true,
    },
    {
      id: 'software',
      title: 'Software & Applications',
      description:
        'Custom software development and application management designed around your unique business workflows.',
      icon: 'Code2',
      featured: false,
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description:
        'Transform raw data into actionable insights. We build dashboards and analytics pipelines that drive smarter decisions.',
      icon: 'BarChart3',
      featured: false,
    },
    {
      id: 'rpa',
      title: 'Automation (RPA)',
      description:
        'Eliminate repetitive manual work with Robotic Process Automation. Free your team to focus on what matters.',
      icon: 'Zap',
      featured: false,
    },
    {
      id: 'outsourcing',
      title: 'IT Outsourcing',
      description:
        'On-demand IT staffing and managed services. Scale your IT capability without the overhead.',
      icon: 'Users',
      featured: false,
    },
  ],

  contact: {
    address: 'Singapore',
    email: 'info@sss-sng.com.sg',
    phone: '+65 XXXX XXXX',
    hours: 'Mon–Fri, 9:00am – 6:00pm',
  },

  footer: {
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Contact', href: '/contact' },
    ],
    copy: `© ${new Date().getFullYear()} Sakura System Service Pte Ltd. All rights reserved.`,
  },
}
