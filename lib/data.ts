// Mock data for development - In production, this comes from Sanity CMS

export const siteSettings = {
  siteName: 'Pine Builders and Developers',
  tagline: 'Building Excellence Since 1995',
  heroHeading: 'Crafting Spaces That Inspire',
  heroSubheading:
    'We transform your vision into architectural masterpieces with precision engineering, exceptional craftsmanship, and an unwavering commitment to quality.',
  ctaText: 'Explore Our Work',
  services: [
    {
      title: 'Residential Construction',
      description:
        'Custom homes, luxury villas, and apartment complexes built to the highest standards of quality and design.',
      icon: 'home',
    },
    {
      title: 'Commercial Buildings',
      description:
        'Office spaces, retail centers, and corporate headquarters designed for functionality and aesthetic appeal.',
      icon: 'building',
    },
    {
      title: 'Industrial Projects',
      description:
        'Warehouses, manufacturing facilities, and logistics centers built for efficiency and durability.',
      icon: 'factory',
    },
    {
      title: 'Renovation & Remodeling',
      description:
        'Transform existing spaces with modern designs while preserving structural integrity.',
      icon: 'paintbrush',
    },
  ],
  footerText:
    'Building excellence since 1995. We transform visions into reality with precision, quality, and unwavering commitment.',
}

export const projects = [
  {
    _id: '1',
    title: ' PINE CITY',
    slug: { current: 'pine-city' },
    location: 'Prime Location',
    year: '2022',
    category: 'Residential',
    description:
      'Pine City is a thoughtfully developed residential project designed to provide comfortable living in a well-planned environment. The project focuses on quality construction, modern design, and a peaceful lifestyle, making it an ideal choice for families and investors alike.',
    imageSrc: '/images/projects/pine-city/1.webp',
    gallery: [
      '/images/projects/pine-city/6.webp',
      '/images/projects/pine-city/8.webp',
      '/images/projects/pine-city/4.webp',
      '/images/projects/pine-city/7.webp',
    ],
    featured: true,
    status: 'Under Development',
  },
  {
    _id: '2',
    title: 'PINE HOMES',
    slug: { current: 'pine-homes' },
    location: 'Well-connected Area',
    year: '2021',
    category: 'Commercial',
    description:
      'Pine Homes is a modern development offering a balanced blend of functionality and contemporary design. Developed with attention to detail and quality standards, the project provides a reliable and well-structured environment suitable for long-term growth and value.',
    imageSrc: '/images/projects/pine-homes/2.webp',
    gallery: [
      '/images/projects/pine-homes/1.webp',
      '/images/projects/pine-homes/3.webp',
      '/images/projects/pine-homes/4.webp',
      '/images/projects/pine-homes/2.webp',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    _id: '3',
    title: 'PINE CORNER',
    slug: { current: 'pine-corner' },
    location: 'Strategic Urban Location',
    year: '2021',
    category: 'Residential',
    description:
      'Pine Corner is a carefully planned residential development created to deliver comfort, convenience, and a modern lifestyle. The project reflects a commitment to quality construction and practical design, ensuring a welcoming environment for residents.',
    imageSrc: '/images/projects/pine-corner/5.webp',
    gallery: [
      '/images/projects/pine-corner/1.webp',
      '/images/projects/pine-corner/2.webp',
      '/images/projects/pine-corner/3.webp',
      '/images/projects/pine-corner/4.webp',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    _id: '4',
    title: 'Pine Comfort',
    slug: { current: 'pine-comfort' },
    location: 'Growing Residential Zone',
    year: '2022',
    category: 'Residential',
    description:
      'Pine Comfort is a well-executed development designed to meet modern standards of planning and construction. With a focus on reliability and functionality, the project offers a secure and well-managed environment suited to contemporary needs.',
    imageSrc: '/images/projects/pine-comfort/4.webp',
    gallery: [
      '/images/projects/pine-comfort/1.webp',
      '/images/projects/pine-comfort/2.webp',
      '/images/projects/pine-comfort/3.webp',
      '/images/projects/pine-comfort/5.webp',
    ],
    featured: false,
    status: 'Under Development',
  },
  {
    _id: '5',
    title: 'KARACHI RAJPUT II',
    slug: { current: 'karachi-rajput-ii' },
    location: 'Karachi, Pakistan',
    year: '2021',
    category: 'Society',
    description:
      'Karachi Rajput II is a well-planned project developed with a vision of creating a structured and organized community. The development emphasizes quality standards, accessibility, and long-term value for residents and stakeholders.',
    imageSrc: '/images/projects/karachi-rajput-ii/1.webp',
    gallery: [
      '/images/projects/karachi-rajput-ii/5.webp',
      '/images/projects/karachi-rajput-ii/3.webp',
      '/images/projects/karachi-rajput-ii/2.webp',
      '/images/projects/karachi-rajput-ii/4.webp',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    _id: '6',
    title: 'ROYAL KISHTS HEIGHTS',
    slug: { current: 'royal-kishts-heights' },
    location: 'Prime Location',
    year: '2022',
    category: 'Residential',
    description:
      'Royal Kishts Heights is a contemporary development designed to provide a refined and comfortable living experience. Built with attention to design, structure, and overall planning, the project reflects a commitment to delivering dependable and lasting value.',
    imageSrc: '/images/projects/royal-kishts-heights/1.webp',
    gallery: [
      '/images/projects/royal-kishts-heights/2.webp',
      '/images/projects/royal-kishts-heights/3.webp',
      '/images/projects/royal-kishts-heights/4.webp',
      '/images/projects/royal-kishts-heights/5.webp',
    ],
    featured: true,
    status: 'Under Development',
  },
];


export const aboutData = {
  title: 'About Us',
  heroHeading: 'Building Tomorrow, Today',
  heroSubheading:
    'With over 25 years of experience, we have established ourselves as a leader in construction excellence.',
  mission:
    'To deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.',
  vision:
    'To be the most trusted construction partner, known for transforming ambitious visions into enduring landmarks that enhance communities.',
  history:
    'Founded in 1995, Pine Builders and Developers began as a small residential contractor with a passion for quality craftsmanship. Over three decades, we have grown into a full-service construction company handling projects of all scales, from luxury homes to commercial complexes and industrial facilities. Our commitment to excellence has earned us numerous industry awards and, more importantly, the trust of hundreds of satisfied clients.',
  yearsExperience: 28,
  projectsCompleted: 500,
  happyClients: 350,
  teamMembers: 120,
}

export const contactData = {
  phones: [
    '+92 (313) 822-2808',
    '+92 (213) 496-2038'
  ],
  email: 'pinebuilder83@gmail.com',
  address:
    'LSA-1 to LSA-12, 1st–12th Floor, Street-2, Row-1, Gulshan-e-Iqbal, Block-5, Scheme-24, Karachi, Pakistan',
  officeHours: 'Monday – Friday: 8:00 AM – 6:00 PM',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=61588158037232',
    instagram: 'https://www.instagram.com/pinebuilderdeveloper',
    youtube: 'https://www.youtube.com/@PINEBUILDERSDEVELOPERS',
    tiktok: 'https://www.tiktok.com/@pine.builders.and?_r=1&_t=ZS-940IeMG3NhQ',
  },
}


export const blogPosts = [
  {
    _id: 'blog-1',
    title: 'The Future of Sustainable Construction: Trends to Watch in 2024',
    slug: { current: 'future-sustainable-construction-2024' },
    excerpt:
      'Discover the latest sustainable building practices transforming the construction industry, from green materials to energy-efficient designs.',
    imageSrc: '/images/blog/blog-1.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
      image: '/images/logo12.webp',
    },
    category: 'Sustainability',
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'The construction industry is undergoing a significant transformation as sustainability becomes a central focus. From innovative green materials to cutting-edge energy-efficient designs, builders and architects are reimagining how we create the spaces we live and work in.',
      },
      {
        type: 'heading',
        text: 'Green Building Materials',
      },
      {
        type: 'paragraph',
        text: 'One of the most exciting developments is the emergence of new sustainable materials. Cross-laminated timber (CLT) is revolutionizing multi-story construction, offering a carbon-negative alternative to concrete and steel. Recycled materials, including reclaimed wood and recycled steel, are becoming standard choices for environmentally conscious projects.',
      },
      {
        type: 'heading',
        text: 'Energy Efficiency Standards',
      },
      {
        type: 'paragraph',
        text: 'Net-zero energy buildings are no longer a distant dream but an achievable reality. Advanced insulation, triple-glazed windows, and smart building systems work together to minimize energy consumption while maximizing comfort.',
      },
    ],
    tags: ['Sustainability', 'Green Building', 'Innovation', 'Trends'],
  },
  {
    _id: 'blog-2',
    title: 'How to Choose the Right Construction Partner for Your Project',
    slug: { current: 'choose-right-construction-partner' },
    excerpt:
      'A comprehensive guide to evaluating and selecting the perfect construction company for your residential or commercial project.',
    imageSrc: '/images/blog/blog-2.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
       image: '/images/logo12.webp',
    },
    category: 'Tips & Guides',
    publishedAt: '2024-01-10',
    readTime: 6,
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Choosing the right construction partner can make or break your project. Whether you are building your dream home or developing a commercial property, the contractor you select will significantly impact the quality, timeline, and budget of your project.',
      },
      {
        type: 'heading',
        text: 'Key Factors to Consider',
      },
      {
        type: 'paragraph',
        text: 'Experience in similar projects, financial stability, reputation, and communication style are all crucial factors. Take time to review portfolios, check references, and ensure proper licensing and insurance.',
      },
    ],
    tags: ['Construction Tips', 'Project Planning', 'Contractors'],
  },
  {
    _id: 'blog-3',
    title: 'Marina Bay Residence: A Behind-the-Scenes Look at Our Latest Project',
    slug: { current: 'marina-bay-residence-behind-scenes' },
    excerpt:
      'Take an exclusive tour behind the scenes of our award-winning Marina Bay Residence project and discover the craftsmanship that went into every detail.',
    imageSrc: '/images/blog/blog-3.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
       image: '/images/logo12.webp',
    },
    category: 'Project Updates',
    publishedAt: '2024-01-05',
    readTime: 10,
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'The Marina Bay Residence stands as a testament to what is possible when vision meets expertise. This waterfront luxury home combines stunning architecture with cutting-edge technology and sustainable design principles.',
      },
      {
        type: 'heading',
        text: 'Design Philosophy',
      },
      {
        type: 'paragraph',
        text: 'Every aspect of the Marina Bay Residence was designed to maximize the breathtaking ocean views while creating intimate, livable spaces. Floor-to-ceiling windows blur the line between indoor and outdoor living.',
      },
    ],
    tags: ['Project Showcase', 'Residential', 'Luxury Homes'],
  },
  {
    _id: 'blog-4',
    title: 'Understanding Construction Permits: A Complete Guide',
    slug: { current: 'understanding-construction-permits-guide' },
    excerpt:
      'Navigate the complex world of construction permits with our comprehensive guide covering everything from applications to inspections.',
    imageSrc: '/images/blog/blog-4.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
       image: '/images/logo12.webp',
    },
    category: 'Tips & Guides',
    publishedAt: '2023-12-28',
    readTime: 12,
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Construction permits are essential documents that ensure your building project meets safety standards and local regulations. Understanding the permit process can save you time, money, and potential legal issues.',
      },
    ],
    tags: ['Permits', 'Regulations', 'Legal', 'Planning'],
  },
  {
    _id: 'blog-5',
    title: 'The Rise of Smart Buildings: Technology in Modern Construction',
    slug: { current: 'rise-smart-buildings-technology' },
    excerpt:
      'Explore how IoT, AI, and automation are transforming buildings into intelligent, responsive environments that enhance comfort and efficiency.',
    imageSrc: '/images/blog/blog-5.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
      image: '/images/logo12.webp',
    },
    category: 'Industry News',
    publishedAt: '2023-12-20',
    readTime: 7,
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Smart buildings represent the convergence of construction and technology. These intelligent structures use sensors, automation, and data analytics to optimize everything from energy usage to occupant comfort.',
      },
    ],
    tags: ['Smart Buildings', 'Technology', 'IoT', 'Innovation'],
  },
  {
    _id: 'blog-6',
    title: 'Pine Builders and Developers Celebrates 25 Years of Excellence',
    slug: { current: 'premier-construction-25-years' },
    excerpt:
      'Join us as we celebrate a quarter-century of building excellence, reflecting on our journey and looking forward to the future.',
    imageSrc: '/images/blog/blog-6.webp',
    author: {
      name: 'Pine Builders Editorial Team',
      role: 'Official Publication',
      image: '/images/logo12.webp',
    },
    category: 'Company News',
    publishedAt: '2023-12-15',
    readTime: 5,
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Twenty-five years ago, Pine Builders and Developers started with a simple mission: to build with excellence and integrity. Today, we are proud to have completed over 500 projects and earned the trust of hundreds of clients.',
      },
    ],
    tags: ['Company News', 'Anniversary', 'Milestone'],
  },
]
