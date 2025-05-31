const menu = [
  { label: 'Home' },
  { label: 'About Us' },
  {
    label: 'Our Services',
    submenu: [
      'Strategic Management Services',
      'Financial Services',
      'Marketing & Brand Services',
      'Production & Operations Services',
      'Compliance & Regulatory Services',
      'Internal Audit & Risk Advisory',
      'Administrative Services',
      'Human Resource Services',
      'Customer Support Services',
      'IT & Digital Services',
      'Corporate Social Responsibility Services',
    ],
  },
  {
    label: 'Membership',
    submenu: [
      'Client',
      'Vendor',
      'Intern',
      'Referee',
      'Specialist',
      'Professional',
      'Contributor',
      'Ambassador',
    ],
  },
  {
    label: 'Partners',
    submenu: [
      'Sign-up',
      'Form',
      'Membership ID',
      {
        label: "Partner's Platform",
        children: [
          "Shareholder's Platform",
          "Entrepreneur's Platform",
          'Escrow Payment System',
          'Digital Agreement',
          'Payment Gateway',
          "Current A/c of Partners",
        ]
      }
    ]
  },
  {
    label: 'Operations',
    submenu: [
      'Cost Estimation',
      'Bidding Hub',
      'Digital Agreement',
      'Project Management',
      'Workstation',
      'Deliverables Management',
      'Quality Assurance',
      'Conflict Resolution',
      'Bill Processing',
      `Member's Current A/c`,
      'Payment Processing',
    ],
  },
  {
    label: 'Integrations',
    submenu: [
      'Getting Started',
      'Strategic Management Services',
      'Financial Services',
      'Marketing & Brand Services',
      'Production & Operations Services',
      'Compliance & Regulatory Services',
      'Internal Audit & Risk Advisory',
      'Administrative Services',
      'Human Resource Services',
      'Customer Support Services',
      'IT & Digital Services',
      'Corporate Social Responsibility Services',
      'FAQ',
      'Tutorials',
      'Member Support',
    ],
  },
  {
    label: 'Career',
    submenu: [
      'Job Opportunities',
      'Growth and Development',
      'Recognition and Rewards',
      'Networking and Community',
      'Resources and Support',
      'Application Information',
    ],
  },
  {
    label: 'SkillSphere',
    submenu: [
      'E-learning',
      'Training',
      'Business News',
      'Business Blogs',
      `What's New in Business`,
      'AI Chatbot',
      'FAQs',
      'Queries',
      'Yellow Page',
    ],
  },
  { label: 'Contact Us' },
];

const menuString = menu.map(item => item.submenu[3].label
)
console.log(menu);