// Mock academy data for Delhi sports academies
export const academies = [
  {
    id: '1',
    name: 'Delhi Football Academy',
    sport: 'Football',
    location: 'Dwarka, New Delhi',
    area: 'Dwarka',
    fees: 3500,
    rating: 4.7,
    reviewCount: 128,
    contact: '+91-9876543210',
    whatsapp: '919876543210',
    description: 'Delhi Football Academy is one of the premier football training centers in the capital. With FIFA-certified coaches and state-of-the-art training facilities, we nurture young talent from grassroots to professional level. Our programs cater to all age groups from 5 to 25 years.',
    coaches: [
      { name: 'Rajesh Kumar', qualification: 'AFC A License', experience: '15 years', specialization: 'Youth Development' },
      { name: 'Priya Sharma', qualification: 'AFC B License', experience: '8 years', specialization: 'Goalkeeping' }
    ],
    facilities: ['Full-size football pitch', 'Mini training grounds', 'Gym & fitness center', 'Video analysis room', 'Changing rooms'],
    timings: 'Mon-Sat: 6:00 AM - 8:00 PM',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80'
    ]
  },
  {
    id: '2',
    name: 'Champions Cricket Club',
    sport: 'Cricket',
    location: 'Pitampura, New Delhi',
    area: 'Pitampura',
    fees: 4000,
    rating: 4.8,
    reviewCount: 256,
    contact: '+91-9876543211',
    whatsapp: '919876543211',
    description: 'Champions Cricket Club has produced several Ranji Trophy players and IPL prospects. Our world-class nets, bowling machines, and experienced coaching staff provide comprehensive cricket training for aspiring cricketers of all levels.',
    coaches: [
      { name: 'Vikram Singh', qualification: 'BCCI Level 3', experience: '20 years', specialization: 'Batting' },
      { name: 'Amit Verma', qualification: 'BCCI Level 2', experience: '12 years', specialization: 'Fast Bowling' },
      { name: 'Suresh Patel', qualification: 'BCCI Level 2', experience: '10 years', specialization: 'Spin Bowling' }
    ],
    facilities: ['6 practice nets', 'Bowling machines', 'Indoor training hall', 'Gym', 'Match ground'],
    timings: 'Mon-Sun: 5:30 AM - 7:00 PM',
    images: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
      'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80'
    ]
  },
  {
    id: '3',
    name: 'Ace Tennis Academy',
    sport: 'Tennis',
    location: 'Vasant Kunj, New Delhi',
    area: 'Vasant Kunj',
    fees: 5000,
    rating: 4.6,
    reviewCount: 89,
    contact: '+91-9876543212',
    whatsapp: '919876543212',
    description: 'Ace Tennis Academy offers professional tennis coaching on synthetic and clay courts. Our ITF-certified coaches focus on technique, fitness, and match strategy. We regularly participate in AITA tournaments and have produced multiple national-level players.',
    coaches: [
      { name: 'Sandeep Mehra', qualification: 'ITF Level 2', experience: '18 years', specialization: 'Singles Strategy' },
      { name: 'Neha Gupta', qualification: 'ITF Level 1', experience: '7 years', specialization: 'Junior Development' }
    ],
    facilities: ['4 synthetic courts', '2 clay courts', 'Ball machine', 'Pro shop', 'Fitness center'],
    timings: 'Mon-Sat: 6:00 AM - 9:00 PM',
    images: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80'
    ]
  },
  {
    id: '4',
    name: 'Shuttle Stars Badminton',
    sport: 'Badminton',
    location: 'Rohini, New Delhi',
    area: 'Rohini',
    fees: 2500,
    rating: 4.5,
    reviewCount: 167,
    contact: '+91-9876543213',
    whatsapp: '919876543213',
    description: 'Shuttle Stars is a dedicated badminton training academy with international-standard wooden courts. Our coaching methodology follows the BAI syllabus and we have trained several state-level players. Programs available for beginners to advanced players.',
    coaches: [
      { name: 'Arvind Bhat', qualification: 'BAI Certified', experience: '14 years', specialization: 'Singles' },
      { name: 'Meenakshi Rao', qualification: 'BAI Certified', experience: '9 years', specialization: 'Doubles' }
    ],
    facilities: ['6 wooden courts', 'Shuttlecock machine', 'Strength training area', 'Video analysis', 'Locker rooms'],
    timings: 'Mon-Sun: 5:00 AM - 10:00 PM',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa50889e3be0?w=800&q=80',
      'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=800&q=80'
    ]
  },
  {
    id: '5',
    name: 'Strikers Football School',
    sport: 'Football',
    location: 'Saket, New Delhi',
    area: 'Saket',
    fees: 3000,
    rating: 4.4,
    reviewCount: 95,
    contact: '+91-9876543214',
    whatsapp: '919876543214',
    description: 'Strikers Football School provides grassroots to elite football training. Our curriculum is inspired by European football academies. We focus on technical skills, tactical awareness, and physical conditioning for players aged 6-21.',
    coaches: [
      { name: 'Carlos Mendes', qualification: 'UEFA B License', experience: '12 years', specialization: 'Technical Training' },
      { name: 'Rahul Deshpande', qualification: 'AIFF D License', experience: '6 years', specialization: 'Fitness' }
    ],
    facilities: ['Astroturf ground', 'Mini pitches', 'Recovery room', 'Equipment store'],
    timings: 'Mon-Fri: 4:00 PM - 8:00 PM, Sat-Sun: 7:00 AM - 12:00 PM',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      'https://images.unsplash.com/photo-1517747614396-d21a78581b52?w=800&q=80',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80'
    ]
  },
  {
    id: '6',
    name: 'Delhi Cricket Stars',
    sport: 'Cricket',
    location: 'Lajpat Nagar, New Delhi',
    area: 'Lajpat Nagar',
    fees: 3500,
    rating: 4.3,
    reviewCount: 142,
    contact: '+91-9876543215',
    whatsapp: '919876543215',
    description: 'Delhi Cricket Stars is a community-driven cricket academy focused on producing quality cricketers. With experienced coaching staff and excellent practice facilities, we provide coaching for all formats of the game.',
    coaches: [
      { name: 'Manoj Tiwari', qualification: 'BCCI Level 2', experience: '16 years', specialization: 'All-round coaching' },
      { name: 'Deepak Chahar', qualification: 'BCCI Level 1', experience: '5 years', specialization: 'Wicketkeeping' }
    ],
    facilities: ['4 nets', 'Bowling machine', 'Match ground', 'Dressing room'],
    timings: 'Mon-Sun: 6:00 AM - 6:00 PM',
    images: [
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80'
    ]
  },
  {
    id: '7',
    name: 'Grand Slam Tennis Club',
    sport: 'Tennis',
    location: 'Greater Kailash, New Delhi',
    area: 'Greater Kailash',
    fees: 6000,
    rating: 4.9,
    reviewCount: 73,
    contact: '+91-9876543216',
    whatsapp: '919876543216',
    description: 'Grand Slam Tennis Club is the most premium tennis facility in Delhi. With floodlit courts, international coaches, and a track record of producing Davis Cup players, we offer world-class tennis training for serious players.',
    coaches: [
      { name: 'Andre Fernandez', qualification: 'ITF Level 3', experience: '22 years', specialization: 'High Performance' },
      { name: 'Ankita Bhambri', qualification: 'ITF Level 2', experience: '11 years', specialization: 'Women\'s Tennis' }
    ],
    facilities: ['6 floodlit courts', 'Indoor court', 'Sports science lab', 'Swimming pool', 'Cafeteria'],
    timings: 'Mon-Sun: 5:00 AM - 10:00 PM',
    images: [
      'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&q=80',
      'https://images.unsplash.com/photo-1551773188-d63e5b59d44c?w=800&q=80',
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80'
    ]
  },
  {
    id: '8',
    name: 'Smash Point Badminton',
    sport: 'Badminton',
    location: 'Janakpuri, New Delhi',
    area: 'Janakpuri',
    fees: 2000,
    rating: 4.2,
    reviewCount: 201,
    contact: '+91-9876543217',
    whatsapp: '919876543217',
    description: 'Smash Point is an affordable yet high-quality badminton academy in West Delhi. We welcome players of all ages and skill levels. Our focus is on building strong fundamentals and competitive match play.',
    coaches: [
      { name: 'Saina Kapoor', qualification: 'BAI Level 2', experience: '10 years', specialization: 'Junior Training' },
      { name: 'Pankaj Advani', qualification: 'BAI Level 1', experience: '6 years', specialization: 'Footwork & Agility' }
    ],
    facilities: ['4 courts', 'Equipment rental', 'Refreshment area', 'Parking'],
    timings: 'Mon-Sat: 6:00 AM - 9:00 PM',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa50889e3be0?w=800&q=80',
      'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=800&q=80'
    ]
  },
  {
    id: '9',
    name: 'Goal Rush Football Academy',
    sport: 'Football',
    location: 'Noida, UP (NCR)',
    area: 'Noida',
    fees: 2800,
    rating: 4.3,
    reviewCount: 76,
    contact: '+91-9876543218',
    whatsapp: '919876543218',
    description: 'Goal Rush provides high-intensity football training for competitive players. Located in Noida with excellent connectivity, we focus on tactical awareness, set pieces, and match readiness.',
    coaches: [
      { name: 'Sunil Chhetri Jr.', qualification: 'AIFF C License', experience: '8 years', specialization: 'Attacking Play' }
    ],
    facilities: ['Artificial turf ground', 'Sprint track', 'Weight room'],
    timings: 'Mon-Fri: 5:00 PM - 8:30 PM, Sat: 7:00 AM - 11:00 AM',
    images: [
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80'
    ]
  },
  {
    id: '10',
    name: 'Willow Cricket Academy',
    sport: 'Cricket',
    location: 'Gurgaon, Haryana (NCR)',
    area: 'Gurgaon',
    fees: 5000,
    rating: 4.6,
    reviewCount: 118,
    contact: '+91-9876543219',
    whatsapp: '919876543219',
    description: 'Willow Cricket Academy is a premium cricket coaching center in Gurgaon. With multiple grounds and indoor facilities, we offer year-round training. Our alumni include players who have represented Haryana in Ranji Trophy.',
    coaches: [
      { name: 'Mohit Sharma', qualification: 'BCCI Level 3', experience: '18 years', specialization: 'Pace Bowling' },
      { name: 'Ajay Jadeja', qualification: 'BCCI Level 2', experience: '14 years', specialization: 'Batting Masterclass' }
    ],
    facilities: ['3 grounds', '8 nets', '2 bowling machines', 'Indoor hall', 'Hostel facility'],
    timings: 'Mon-Sun: 5:00 AM - 8:00 PM',
    images: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
      'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80'
    ]
  },
  {
    id: '11',
    name: 'Net Masters Tennis',
    sport: 'Tennis',
    location: 'Defence Colony, New Delhi',
    area: 'Defence Colony',
    fees: 4500,
    rating: 4.4,
    reviewCount: 55,
    contact: '+91-9876543220',
    whatsapp: '919876543220',
    description: 'Net Masters provides personalized tennis coaching in the heart of South Delhi. We offer one-on-one sessions and small group training to ensure maximum attention to each student.',
    coaches: [
      { name: 'Rohan Bopanna Jr.', qualification: 'ITF Level 2', experience: '10 years', specialization: 'Doubles Strategy' }
    ],
    facilities: ['3 hard courts', 'Ball machine', 'Stringing service', 'Coaching videos'],
    timings: 'Mon-Sat: 6:00 AM - 8:00 PM',
    images: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80'
    ]
  },
  {
    id: '12',
    name: 'Feather Touch Badminton',
    sport: 'Badminton',
    location: 'Mayur Vihar, New Delhi',
    area: 'Mayur Vihar',
    fees: 1800,
    rating: 4.1,
    reviewCount: 143,
    contact: '+91-9876543221',
    whatsapp: '919876543221',
    description: 'Feather Touch is East Delhi\'s most popular badminton academy. We make badminton accessible to everyone with affordable coaching and flexible timings. Great for beginners and intermediate players.',
    coaches: [
      { name: 'Lakshya Mishra', qualification: 'BAI Certified', experience: '7 years', specialization: 'Beginners Training' },
      { name: 'Ritu Jain', qualification: 'BAI Certified', experience: '5 years', specialization: 'Women\'s Badminton' }
    ],
    facilities: ['3 courts', 'Equipment provided', 'Air-conditioned hall', 'Water cooler'],
    timings: 'Mon-Sun: 6:00 AM - 10:00 PM',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa50889e3be0?w=800&q=80',
      'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=800&q=80'
    ]
  },
  {
    id: '13',
    name: 'Pro Kicks Football',
    sport: 'Football',
    location: 'Karol Bagh, New Delhi',
    area: 'Karol Bagh',
    fees: 2200,
    rating: 4.0,
    reviewCount: 62,
    contact: '+91-9876543222',
    whatsapp: '919876543222',
    description: 'Pro Kicks is a centrally located football academy ideal for working professionals and students. We offer evening and weekend batches with flexible scheduling. Focus on fitness, skills, and fun.',
    coaches: [
      { name: 'Harpreet Singh', qualification: 'AIFF D License', experience: '5 years', specialization: 'Recreational Football' }
    ],
    facilities: ['Small-sided pitch', 'Floodlights', 'Equipment provided'],
    timings: 'Mon-Fri: 5:30 PM - 9:00 PM, Sat-Sun: 6:00 AM - 12:00 PM',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80'
    ]
  },
  {
    id: '14',
    name: 'Elite Cricket Zone',
    sport: 'Cricket',
    location: 'Rajouri Garden, New Delhi',
    area: 'Rajouri Garden',
    fees: 3000,
    rating: 4.5,
    reviewCount: 98,
    contact: '+91-9876543223',
    whatsapp: '919876543223',
    description: 'Elite Cricket Zone offers a perfect blend of traditional coaching and modern technology. With video analysis, biomechanics assessment, and data-driven training plans, we help cricketers reach their full potential.',
    coaches: [
      { name: 'Gaurav Gambhir', qualification: 'BCCI Level 2', experience: '13 years', specialization: 'Left-hand Batting' },
      { name: 'Ishant Dev', qualification: 'BCCI Level 1', experience: '8 years', specialization: 'Seam Bowling' }
    ],
    facilities: ['5 nets', 'Video analysis setup', 'Bowling machines', 'Indoor facility', 'Canteen'],
    timings: 'Mon-Sun: 6:00 AM - 7:00 PM',
    images: [
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80',
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80'
    ]
  },
  {
    id: '15',
    name: 'Rally Point Badminton',
    sport: 'Badminton',
    location: 'Connaught Place, New Delhi',
    area: 'Connaught Place',
    fees: 3500,
    rating: 4.7,
    reviewCount: 112,
    contact: '+91-9876543224',
    whatsapp: '919876543224',
    description: 'Rally Point is a premium badminton facility in the heart of Delhi. Our international-standard courts and top-tier coaching attract serious competitive players. We organize monthly tournaments and inter-academy challenges.',
    coaches: [
      { name: 'PV Srikanth', qualification: 'BWF Level 2', experience: '15 years', specialization: 'Advanced Tactics' },
      { name: 'Ashwini Ponappa', qualification: 'BWF Level 1', experience: '9 years', specialization: 'Mixed Doubles' }
    ],
    facilities: ['8 BWF-standard courts', 'Sports science center', 'Recovery area', 'Pro shop', 'Cafeteria'],
    timings: 'Mon-Sun: 6:00 AM - 11:00 PM',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
      'https://images.unsplash.com/photo-1613918431703-aa50889e3be0?w=800&q=80',
      'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=800&q=80'
    ]
  },
  {
    id: '16',
    name: 'KickStart Sports Academy',
    sport: 'Football',
    location: 'South Extension, New Delhi',
    area: 'South Extension',
    fees: 4000,
    rating: 4.6,
    reviewCount: 84,
    contact: '+91-9876543225',
    whatsapp: '919876543225',
    description: 'KickStart offers a holistic football development program combining technical training, tactical education, and mental conditioning. Our partnerships with European clubs provide pathway opportunities for talented players.',
    coaches: [
      { name: 'Marco D\'Silva', qualification: 'UEFA A License', experience: '20 years', specialization: 'Elite Player Development' },
      { name: 'Bhaichung Jr.', qualification: 'AFC B License', experience: '10 years', specialization: 'Midfield Play' }
    ],
    facilities: ['FIFA-standard pitch', 'Indoor futsal court', 'Gym', 'Nutrition center', 'Player lounge'],
    timings: 'Mon-Sat: 6:00 AM - 9:00 PM',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      'https://images.unsplash.com/photo-1517747614396-d21a78581b52?w=800&q=80',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80'
    ]
  }
];

export const getSportIcon = (sport) => {
  const icons = {
    'Football': '⚽',
    'Cricket': '🏏',
    'Tennis': '🎾',
    'Badminton': '🏸'
  };
  return icons[sport] || '🏆';
};

export const getSportColor = (sport) => {
  const colors = {
    'Football': '#10B981',
    'Cricket': '#F59E0B',
    'Tennis': '#3B82F6',
    'Badminton': '#EF4444'
  };
  return colors[sport] || '#6B7280';
};

export const sports = ['Football', 'Cricket', 'Tennis', 'Badminton'];

export const priceRanges = [
  { label: 'Under ₹2,000', min: 0, max: 2000 },
  { label: '₹2,000 - ₹3,500', min: 2000, max: 3500 },
  { label: '₹3,500 - ₹5,000', min: 3500, max: 5000 },
  { label: 'Above ₹5,000', min: 5000, max: Infinity }
];
