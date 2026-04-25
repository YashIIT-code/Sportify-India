// Mock reviews data for academies
export const reviews = [
  {
    id: 'r1',
    academyId: '1',
    userId: 'u1',
    userName: 'Arjun Mehta',
    userAvatar: '👨‍🦱',
    rating: 5,
    comment: 'Absolutely fantastic coaching! My son has improved tremendously in just 3 months. The coaches are very professional and the facilities are top-notch.',
    createdAt: '2026-03-15'
  },
  {
    id: 'r2',
    academyId: '1',
    userId: 'u2',
    userName: 'Priya Kapoor',
    userAvatar: '👩',
    rating: 4,
    comment: 'Great academy with good infrastructure. The only downside is the parking situation. But the coaching quality makes up for it.',
    createdAt: '2026-02-28'
  },
  {
    id: 'r3',
    academyId: '2',
    userId: 'u3',
    userName: 'Rohit Sharma',
    userAvatar: '👨',
    rating: 5,
    comment: 'Best cricket academy in North Delhi! The bowling machines are excellent and coaches give personal attention to each student.',
    createdAt: '2026-04-01'
  },
  {
    id: 'r4',
    academyId: '2',
    userId: 'u4',
    userName: 'Sneha Agarwal',
    userAvatar: '👩‍🦰',
    rating: 5,
    comment: 'My daughter loves going here. The environment is encouraging and safe for girls. Highly recommended!',
    createdAt: '2026-03-20'
  },
  {
    id: 'r5',
    academyId: '3',
    userId: 'u5',
    userName: 'Karan Singh',
    userAvatar: '👨‍🦲',
    rating: 4,
    comment: 'Excellent tennis coaching. The clay courts are well maintained. A bit pricey but worth every rupee.',
    createdAt: '2026-01-15'
  },
  {
    id: 'r6',
    academyId: '4',
    userId: 'u6',
    userName: 'Ananya Reddy',
    userAvatar: '👩‍🦱',
    rating: 5,
    comment: 'Started as a complete beginner and now I can play competitive matches. The coaches are patient and skilled.',
    createdAt: '2026-03-05'
  },
  {
    id: 'r7',
    academyId: '4',
    userId: 'u7',
    userName: 'Vikash Kumar',
    userAvatar: '👨',
    rating: 4,
    comment: 'Good badminton courts and coaching. The timings are flexible which is great for working professionals.',
    createdAt: '2026-02-18'
  },
  {
    id: 'r8',
    academyId: '5',
    userId: 'u8',
    userName: 'Divya Nair',
    userAvatar: '👩',
    rating: 4,
    comment: 'The astroturf is great to play on. Weekend batches are sometimes too crowded though.',
    createdAt: '2026-04-10'
  },
  {
    id: 'r9',
    academyId: '7',
    userId: 'u9',
    userName: 'Rajat Malhotra',
    userAvatar: '👨‍🦱',
    rating: 5,
    comment: 'Premium facility with world-class coaching. The indoor court is a game-changer during Delhi summers!',
    createdAt: '2026-03-22'
  },
  {
    id: 'r10',
    academyId: '7',
    userId: 'u10',
    userName: 'Simran Kaur',
    userAvatar: '👩‍🦰',
    rating: 5,
    comment: 'Worth the premium price. The coaches here are internationally qualified and the results show.',
    createdAt: '2026-04-05'
  },
  {
    id: 'r11',
    academyId: '10',
    userId: 'u11',
    userName: 'Aditya Joshi',
    userAvatar: '👨',
    rating: 5,
    comment: 'The hostel facility is a huge plus. Players from outside Gurgaon can train here full-time.',
    createdAt: '2026-02-14'
  },
  {
    id: 'r12',
    academyId: '15',
    userId: 'u12',
    userName: 'Neelam Sharma',
    userAvatar: '👩',
    rating: 5,
    comment: 'Monthly tournaments keep the competitive spirit alive. Best badminton academy in central Delhi.',
    createdAt: '2026-03-30'
  },
  {
    id: 'r13',
    academyId: '8',
    userId: 'u13',
    userName: 'Manish Pandey',
    userAvatar: '👨‍🦲',
    rating: 4,
    comment: 'Very affordable and the coaching is decent. Great for beginners who want to learn the basics.',
    createdAt: '2026-01-25'
  },
  {
    id: 'r14',
    academyId: '14',
    userId: 'u14',
    userName: 'Pooja Verma',
    userAvatar: '👩‍🦱',
    rating: 4,
    comment: 'The video analysis feature really helps in understanding your game better. Modern approach to cricket coaching.',
    createdAt: '2026-04-12'
  },
  {
    id: 'r15',
    academyId: '16',
    userId: 'u15',
    userName: 'Saurabh Tiwari',
    userAvatar: '👨',
    rating: 5,
    comment: 'European-style coaching methodology. My son got selected for a trial with a Portuguese club through their network!',
    createdAt: '2026-03-18'
  }
];

export const getReviewsByAcademyId = (academyId) => {
  return reviews.filter(review => review.academyId === academyId);
};
