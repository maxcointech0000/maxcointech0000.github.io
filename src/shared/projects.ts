export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'Blockchain' | 'App' | 'Chatbot' | 'Fullstack';
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  images: string[];
  userCount?: string;
  features: string[];
  challenges: string[];
  impact: string;
}

export const projects: Project[] = [
  // AI Projects
  {
    id: 'tanka-ai',
    title: 'Tanka AI',
    category: 'AI',
    description: 'Advanced AI-powered content generation platform with sophisticated natural language processing.',
    longDescription: 'A revolutionary AI platform that leverages cutting-edge machine learning algorithms to generate high-quality content across multiple domains. Built with modern React architecture and integrated with multiple AI APIs for enhanced functionality.',
    stack: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'TensorFlow', 'MongoDB'],
    liveUrl: 'https://www.tanka.ai/',
    githubUrl: 'https://github.com/maxcointech/tanka-ai',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    ],
    userCount: '50K+',
    features: ['AI Content Generation', 'Real-time Collaboration', 'Multi-language Support', 'Analytics Dashboard'],
    challenges: ['Implementing real-time AI processing', 'Optimizing response times', 'Managing large datasets'],
    impact: 'Increased content creation efficiency by 300% for over 50,000 users worldwide'
  },
  {
    id: 'fn7-io',
    title: 'FN7.io',
    category: 'AI',
    description: 'Next-generation AI analytics platform for business intelligence and data visualization.',
    longDescription: 'Enterprise-grade AI analytics solution providing deep insights through advanced machine learning models. Features real-time data processing, predictive analytics, and customizable dashboards.',
    stack: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://www.fn7.io/',
    githubUrl: 'https://github.com/maxcointech/fn7-analytics',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800'
    ],
    userCount: '25K+',
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'API Integration'],
    challenges: ['Handling big data processing', 'Real-time visualization', 'Scalable architecture'],
    impact: 'Improved business decision-making speed by 250% across 500+ enterprises'
  },
  {
    id: 'intervue-ai',
    title: 'IntervueAI',
    category: 'AI',
    description: 'AI-powered interview platform revolutionizing recruitment with intelligent assessments.',
    longDescription: 'Smart interview platform that uses AI to conduct and evaluate technical interviews. Features automated coding assessments, personality analysis, and comprehensive candidate reports.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'OpenAI'],
    liveUrl: 'https://intervueai-io.vercel.app/',
    githubUrl: 'https://github.com/maxcointech/intervue-ai',
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800'
    ],
    userCount: '15K+',
    features: ['AI Interview Simulation', 'Code Evaluation', 'Video Analysis', 'Detailed Reports'],
    challenges: ['Natural language processing', 'Video analysis algorithms', 'Real-time feedback'],
    impact: 'Reduced hiring time by 60% for 200+ companies while improving candidate quality'
  },

  // Blockchain Projects
  {
    id: 'blockstellart',
    title: 'BlockStellArt',
    category: 'Blockchain',
    description: 'Premium NFT marketplace for digital art with advanced trading features.',
    longDescription: 'Sophisticated NFT marketplace built on Ethereum blockchain, featuring advanced trading mechanisms, artist royalties, and community-driven curation. Implements cutting-edge smart contracts for secure transactions.',
    stack: ['React', 'Solidity', 'Web3.js', 'IPFS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://blockstellart.com/',
    githubUrl: 'https://github.com/maxcointech/blockstellart',
    images: [
      'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=800',
      'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800'
    ],
    userCount: '30K+',
    features: ['NFT Minting', 'Smart Auctions', 'Royalty System', 'Cross-chain Support'],
    challenges: ['Gas optimization', 'Smart contract security', 'IPFS integration'],
    impact: 'Facilitated $2M+ in NFT transactions with zero security incidents'
  },
  {
    id: 'cryptoboys-nft',
    title: 'CryptoBoys NFT Marketplace',
    category: 'Blockchain',
    description: 'Decentralized NFT marketplace with innovative trading mechanisms.',
    longDescription: 'Feature-rich NFT marketplace with advanced smart contract functionality, supporting multiple blockchain networks and innovative trading features like fractional ownership and liquidity pools.',
    stack: ['React', 'Hardhat', 'Ethers.js', 'Polygon', 'The Graph', 'IPFS'],
    liveUrl: 'https://devpavan04.github.io/cryptoboys-nft-marketplace/',
    githubUrl: 'https://github.com/maxcointech/cryptoboys-marketplace',
    images: [
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800',
      'https://images.unsplash.com/photo-1640826844437-088c69d7e98d?w=800',
      'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800',
      'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=800',
      'https://images.unsplash.com/photo-1644143379190-08a5f3a8469f?w=800'
    ],
    userCount: '20K+',
    features: ['Multi-chain Support', 'Fractional NFTs', 'Staking Rewards', 'DAO Governance'],
    challenges: ['Cross-chain compatibility', 'Liquidity optimization', 'Gas efficiency'],
    impact: 'Created a new standard for decentralized NFT trading with $1.5M+ volume'
  },

  // Chatbot Projects
  {
    id: 'ai-shifu',
    title: 'AI Shifu',
    category: 'Chatbot',
    description: 'Advanced conversational AI assistant with multi-domain expertise.',
    longDescription: 'Sophisticated AI chatbot platform offering intelligent conversations across multiple domains. Features natural language understanding, context awareness, and personalized responses powered by advanced transformer models.',
    stack: ['Python', 'FastAPI', 'React', 'Transformers', 'Redis', 'PostgreSQL'],
    liveUrl: 'https://ai-shifu.com/',
    githubUrl: 'https://github.com/maxcointech/ai-shifu',
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
      'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=800',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
      'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=800',
      'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800'
    ],
    userCount: '100K+',
    features: ['Multi-language Support', 'Context Awareness', 'Voice Integration', 'Learning Algorithms'],
    challenges: ['Natural language processing', 'Context retention', 'Scalable infrastructure'],
    impact: 'Automated 80% of customer support interactions for 500+ businesses'
  },

  // Fullstack Projects
  {
    id: 'mern-blog',
    title: 'MERN Blog Platform',
    category: 'Fullstack',
    description: 'Full-featured blogging platform with advanced content management.',
    longDescription: 'Comprehensive blogging platform built with MERN stack featuring rich text editing, user authentication, comment systems, and advanced SEO optimization. Includes admin dashboard and analytics.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    liveUrl: 'https://mern-blog-it.herokuapp.com/',
    githubUrl: 'https://github.com/maxcointech/mern-blog',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800',
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800'
    ],
    userCount: '10K+',
    features: ['Rich Text Editor', 'SEO Optimization', 'Comment System', 'Analytics Dashboard'],
    challenges: ['Performance optimization', 'SEO implementation', 'Real-time updates'],
    impact: 'Empowered 500+ bloggers to create professional content with 95% uptime'
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust Travel App',
    category: 'Fullstack',
    description: 'Social travel platform connecting adventurers worldwide.',
    longDescription: 'Comprehensive travel social network enabling users to share experiences, plan trips, and connect with fellow travelers. Features interactive maps, trip planning tools, and community features.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Mapbox'],
    liveUrl: 'https://wanderlust-beta.vercel.app/',
    githubUrl: 'https://github.com/maxcointech/wanderlust',
    images: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      'https://images.unsplash.com/photo-1520637836862-4d197d17c0a0?w=800',
      'https://images.unsplash.com/photo-1502780402662-acc01917257e?w=800',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    userCount: '25K+',
    features: ['Interactive Maps', 'Trip Planning', 'Social Features', 'Real-time Chat'],
    challenges: ['Map integration', 'Real-time features', 'Mobile optimization'],
    impact: 'Connected 25K+ travelers and facilitated 1000+ trip collaborations'
  }
];

export const categories = ['All', 'AI', 'Blockchain', 'App', 'Chatbot', 'Fullstack'] as const;
export type Category = typeof categories[number];
