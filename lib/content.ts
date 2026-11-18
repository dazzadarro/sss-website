export const siteContent = {
  company: {
    name: 'Sakura System Service',
    shortName: 'SSS',
    tagline: 'Reliable. Innovative. Tailored IT Services for Seamless Digital Transformation.',
    founded: '1990',
    foundedMonth: 'April 1990',
    fullName: 'Sakura System Service Pte Ltd',
    capital: 'S$1,000,000',
    parentCompany: 'Sakura Information Systems Co., Ltd. (100% shareholder)',
    managingDirector: 'Kiyonori Ugajin',
    generalManager: 'Hiromu Ozawa',
    domain: 'sss-sng.com.sg',
    description:
      "Since 1990, Sakura System Service has been providing top-tier IT solutions to Japanese companies expanding in ASEAN. From system development to cloud solutions, we tailor our services to meet your industry's needs.",
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Our Services', href: '#services' },
      { label: 'Client Stories', href: '/clientstories' },
      { label: 'Careers', href: '/careers' },
      { label: 'About Us', href: '/aboutus' },
    ],
  },

  hero: {
    headline: 'Empowering Your Business with',
    headlineAccent: 'Future-Ready IT Solutions',
    subheadline:
      'Reliable. Innovative. Tailored IT Services for Seamless Digital Transformation.',
    cta: 'Our Services',
    ctaSecondary: 'Get In Touch',
  },

  about: {
    body:
      "Since 1990, Sakura System Service has been providing top-tier IT solutions to Japanese companies expanding in ASEAN. From system development to cloud solutions, we tailor our services to meet your industry's needs.",
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
      slug: 'office-it',
      title: 'Office IT Services',
      description:
        'Comprehensive IT solutions tailored to meet the unique needs of businesses — spanning system development, network design, cloud services, and IT consulting.',
      icon: 'Monitor',
      featured: true,
      capabilities: [
        {
          title: 'Network Management',
          description:
            'Designing, building, and maintaining customized office networks, including Wi-Fi, VPNs, firewalls, and network segmentation.',
        },
        {
          title: 'Server & Cloud Infrastructure',
          description:
            'Managing physical and cloud-hosted servers, with virtualization, backups, hybrid cloud design, and disaster recovery.',
        },
        {
          title: 'CyberSecurity',
          description:
            'Firewalls, endpoint device management, secure email, cloud application security, and continuous monitoring with rapid incident response.',
        },
        {
          title: 'Tech Support & Helpdesk',
          description:
            'Remote and onsite after-sales support and maintenance, with optional 24/7 assistance.',
        },
        {
          title: 'IT Procurement (HW/SW)',
          description:
            "Sourcing hardware and software licenses at competitive prices, tailored to each client's needs.",
        },
        {
          title: 'IT Asset Management',
          description:
            'Handling the asset lifecycle from procurement and setup through maintenance, warranty tracking, and secure disposal, including license renewals and reporting.',
        },
      ],
    },
    {
      id: 'software',
      slug: 'software-application',
      title: 'Software & Application',
      description:
        'Tailored software solutions, from custom-built applications to automation tools, aimed at productivity, smoother workflows, and business growth.',
      icon: 'Code2',
      featured: false,
      capabilities: [
        {
          title: 'Custom Software Development',
          description:
            'Bespoke software solutions crafted to precisely fit your business requirements, with a focus on scalability, usability, and integration.',
        },
        {
          title: 'Power Apps & Low-Code Solutions',
          description:
            'Low-code platforms that speed up delivery, cut development costs, and integrate with the Microsoft ecosystem, reducing reliance on scarce developers.',
        },
        {
          title: 'Web Design',
          description:
            "Responsive, user-friendly, SEO-optimized websites tailored to a client's brand and market.",
        },
        {
          title: 'Process Automation',
          description:
            'Reducing manual work with Microsoft Power Automate and Robotic Process Automation.',
        },
      ],
    },
    {
      id: 'data-analytics',
      slug: 'data-analytics',
      title: 'Data Analytics',
      description:
        'Turning complex data into business value through data science, machine learning, and visualization for better decisions and operations.',
      icon: 'BarChart3',
      featured: false,
      capabilities: [
        {
          title: 'Cloud Analytics',
          description:
            'Cloud-based dashboards and reports, built with Tableau and Microsoft Power BI, giving teams real-time access from any location.',
        },
        {
          title: 'Flexible Integration',
          description:
            'Solutions that adapt to new data types, growing data sources, and API integrations.',
        },
        {
          title: 'Data Science',
          description:
            'Extracting, cleaning, and storing data, plus predictive modeling, simulation, and machine learning for forecasts and decision support.',
        },
        {
          title: 'Embedded Support',
          description:
            'Dedicated analysts working onsite with client teams to provide tailored analytics support.',
        },
      ],
    },
    {
      id: 'rpa',
      slug: 'rpa',
      title: 'Automation (RPA)',
      description:
        'Enterprise-grade robotic process automation built with UiPath — software bots that handle repetitive, rule-based tasks across finance, trading, and logistics.',
      icon: 'Zap',
      featured: false,
      capabilities: [
        {
          title: 'Workflow Automation',
          description:
            'Reusable automation for routine processes such as data entry, form validation, and document movement.',
        },
        {
          title: 'Email & File Handling',
          description:
            'Saving attachments, extracting content, and triggering follow-up workflows based on emails or file events.',
        },
        {
          title: 'Data Extraction',
          description:
            'Using OCR to pull structured data from scanned documents like invoices and forms.',
        },
        {
          title: 'Cross-System Integration',
          description:
            'Connecting desktop apps, web systems, and Citrix environments in end-to-end pipelines.',
        },
      ],
    },
    {
      id: 'outsourcing',
      slug: 'outsource',
      title: 'Outsourcing',
      description:
        'Outsourced IT staffing — specialized engineers, developers, and analysts deployed fast, managed end-to-end, and backed by continuity guarantees.',
      icon: 'Users',
      featured: false,
      capabilities: [
        {
          title: 'Expert Access',
          description:
            'Bring in specialized IT staff — systems engineers, developers, and analysts — without lengthy recruitment or training.',
        },
        {
          title: 'Flexibility',
          description:
            'Working hours tailored to operations, such as staggered shifts, with staffing levels adjusted as project needs change.',
        },
        {
          title: 'Cost Efficiency',
          description:
            'Sakura covers wages, medical, immigration, and other employment costs — a predictable monthly fee avoids recruitment, severance, and training expenses.',
        },
        {
          title: 'Quality Assurance',
          description:
            'Regular performance evaluations and feedback support continuous improvement, with skill gaps addressed by moving staff to a more suitable resource.',
        },
        {
          title: 'Business Continuity',
          description:
            'If an assigned specialist leaves or becomes unavailable, Sakura provides a replacement with equivalent skills to avoid disruption.',
        },
      ],
    },
  ],

  clientStories: [
    {
      title: 'Automation (RPA) for a Financial Institution',
      industry: 'Banking',
      summary:
        'A Japanese bank used UiPath robotic process automation to automate more than 70 business processes.',
      impact: [
        'Over 70% manpower time savings',
        'Fewer manual data-entry errors',
        'Daily monitoring of process performance',
        'Over 200 staff hours saved per day',
      ],
    },
    {
      title: 'Data Analytics for a Trading Company',
      industry: 'Financial Services',
      summary:
        'A financial services client combined UiPath, Python, SQL, and Power BI in a digital transformation project.',
      impact: [
        '80% cut in manual reporting',
        'Centralized database shared across departments',
        'Risk-exposure and P&L forecasting models',
        '20% uplift in productivity and revenue',
      ],
    },
    {
      title: 'Network Engineering and IT Support',
      industry: 'Banking / APAC Systems Integration',
      summary:
        "For a Japanese finance institute's APAC-wide system integration project, SSS supplied onsite specialists in IT project and vendor management, network engineering, and 24/7 technical support.",
      impact: [
        'Technology refresh initiatives',
        'Vendor performance management',
        '24-hour helpdesk',
      ],
    },
  ],

  careers: {
    intro:
      'Join a cross-cultural environment working with Singaporean and Japanese clients across software, infrastructure, data analytics, and RPA projects.',
    benefits: [
      'Exposure to software, infrastructure, data analytics, and RPA projects',
      'Mentorship from senior engineers and technical leads',
      'Support for degree sponsorships and certifications such as CCNA, UiPath, and PMP',
      'A cross-cultural environment working with Singaporean and Japanese clients',
    ],
    roles: [
      {
        title: 'Network/Systems Engineer',
        description:
          'Designs and maintains enterprise network infrastructure. Cisco experience preferred, CCNA/CCNP certification a bonus.',
      },
      {
        title: 'Full Stack Apps Developer',
        description:
          'A C++ role focused on modernizing legacy systems and integrating AI and automation.',
      },
      {
        title: 'Data Scientist / Analyst',
        description:
          'Builds dashboards and predictive models, requiring Python, SQL, and Power BI or similar tools.',
      },
      {
        title: 'Digital Transformation PM',
        description:
          'Leads cross-functional tech initiatives with an Agile focus.',
      },
      {
        title: 'Lead Solutions Architect',
        description:
          'Guides a hybrid architecture linking an on-premise .NET MVC system with Microsoft Power Platform.',
      },
      {
        title: 'AI Machine Learning Intern',
        description:
          'Supports the AI research team on proof-of-concept experiments — aimed at fresh grads or early-career candidates.',
      },
    ],
  },

  pdpa: {
    intro:
      'Sakura System Service Pte Ltd is committed to the protection of personal data through a privacy policy, internal procedures, and staff training.',
    sections: [
      {
        title: 'Supervision',
        body: 'Personal data is managed under security systems, a management structure, and employee training.',
      },
      {
        title: 'Purposes',
        body: 'Customer data is used to provide services, deliver emails or documents, share service information, and answer inquiries.',
      },
      {
        title: 'Disclosure',
        body: 'Data is kept confidential and shared only with customer agreement, with subcontractors who need it to deliver services and must follow Singapore PDPA-related law, when required by law or authorities, or to establish or defend a legal claim.',
      },
      {
        title: 'Security',
        body: 'The company commits to reasonable steps to keep data accurate and secure.',
      },
      {
        title: 'Identity Verification',
        body: 'Requests to access, update, or delete personal data require identity verification first.',
      },
      {
        title: 'Compliance and Revisions',
        body: 'This policy is reviewed periodically, and the company may change or discontinue all or part of the website at any time without notice.',
      },
    ],
    contactEmail: 'PDPA@sss-sng.com.sg',
  },

  contact: {
    address: '77 Science Park Drive, #03-10 Cintech III, Singapore Science Park 1, Singapore 118256',
    email: '',
    phone: '(65) 6773 0500',
    fax: '(65) 6773 0318',
    hours: 'Mon – Fri 9:00am – 6:00pm',
    hoursClosed: 'Sat / Sun / PH Closed',
  },

  footer: {
    companyInfo: [
      { label: 'About Us', href: '/aboutus' },
      { label: 'Careers', href: '/careers' },
      { label: 'Personal Data Protection Act', href: '/pdpa-1' },
      { label: 'Credits', href: '/attributes' },
    ],
    solutionServices: [
      { label: 'Office IT Services', href: '/office-it' },
      { label: 'Software & Application', href: '/software-application' },
      { label: 'Data Analytics', href: '/data-analytics' },
      { label: 'Automation (RPA)', href: '/rpa' },
      { label: 'Outsourcing', href: '/outsource' },
    ],
    copy: 'Copyright © 2025 Sakura System Service Pte Ltd. All rights reserved.',
  },
}
