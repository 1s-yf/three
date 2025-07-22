export interface FamilyMember {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  title: string;
  description: string;
  image?: string;
  location?: string;
  biography?: string;
  achievements?: string[];
}

export interface BiographySection {
  title: string;
  content: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  ancient?: string;
  modern?: string;
  description: string;
  year?: number;
  location?: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface FamilyData {
  id: string;
  name: string;
  description: string;
  emblem: string;
  color: string;
  members: FamilyMember[];
  biography: BiographySection[];
  gallery: GalleryImage[];
  articles: ResearchArticle[];
}

export const families: FamilyData[] = [
  {
    id: 'mei',
    name: '梅氏',
    description: '皖南梅氏家族，以诗书传家，世代簪缨',
    emblem: '🏛️',
    color: '#8B4513',
    members: [
      {
        id: 'mei-1',
        name: '梅文鼎',
        birthYear: 1633,
        deathYear: 1721,
        title: '清代天文学家',
        description: '清代著名天文学家、数学家，精通中西历法',
        image: '/api/placeholder/200/300'
      },
      {
        id: 'mei-2',
        name: '梅穀成',
        birthYear: 1681,
        deathYear: 1763,
        title: '清代数学家',
        description: '梅文鼎之孙，继承家学，精通数理',
        image: '/api/placeholder/200/300'
      }
    ],
    biography: [
      {
        title: '家学渊源',
        content: '梅氏家族自明代以来就以学术传家，尤其在天文历算方面有独到造诣。梅文鼎作为家族代表人物，不仅精通中国传统历法，更深入研究西方天文学，成为中西文化交流的重要桥梁。',
        image: '/api/placeholder/400/300'
      },
      {
        title: '学术传承',
        content: '梅氏学术传统延续数代，从梅文鼎到其孙梅穀成，形成了完整的天文历算研究体系。他们的著作被收入《四库全书》，影响深远。',
        image: '/api/placeholder/400/300'
      }
    ],
    gallery: [
      {
        id: 'mei-gallery-1',
        title: '梅氏宗祠',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '位于宣城的梅氏宗祠，见证了家族的辉煌历史',
        year: 1800,
        location: '安徽宣城'
      },
      {
        id: 'mei-gallery-2',
        title: '天文观测台遗址',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '梅文鼎当年进行天文观测的地方',
        year: 1700,
        location: '安徽宣城'
      }
    ],
    articles: [
      {
        id: 'mei-article-1',
        title: '梅文鼎天文历算研究',
        author: '张教授',
        date: '2023-05-15',
        summary: '深入探讨梅文鼎在天文学和历法学方面的贡献',
        content: '梅文鼎（1633-1721）是清代著名的天文学家和数学家...',
        tags: ['天文学', '历法学', '梅文鼎']
      }
    ]
  },
  {
    id: 'qian',
    name: '钱氏',
    description: '吴越钱氏，千年望族，书香门第',
    emblem: '📚',
    color: '#2F4F4F',
    members: [
      {
        id: 'qian-1',
        name: '钱学森',
        birthYear: 1911,
        deathYear: 2009,
        title: '著名科学家',
        description: '中国航天事业奠基人，著名科学家',
        image: '/api/placeholder/200/300'
      }
    ],
    biography: [
      {
        title: '千年传承',
        content: '吴越钱氏家族自五代十国时期钱镠建立吴越国开始，历经千年而不衰，形成了独特的家训文化。',
        image: '/api/placeholder/400/300'
      }
    ],
    gallery: [
      {
        id: 'qian-gallery-1',
        title: '钱王祠',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '杭州钱王祠，纪念吴越国王钱镠',
        year: 1100,
        location: '浙江杭州'
      }
    ],
    articles: [
      {
        id: 'qian-article-1',
        title: '钱氏家训的现代价值',
        author: '李研究员',
        date: '2023-06-20',
        summary: '探讨钱氏家训在当代社会的教育意义',
        content: '钱氏家训作为中华优秀传统文化的重要组成部分...',
        tags: ['家训文化', '现代价值', '钱氏家族']
      }
    ]
  },
  {
    id: 'tao',
    name: '陶氏',
    description: '浔阳陶氏，隐逸传家，文采风流',
    emblem: '🌸',
    color: '#228B22',
    members: [
      {
        id: 'tao-1',
        name: '陶渊明',
        birthYear: 365,
        deathYear: 427,
        title: '东晋诗人',
        description: '著名田园诗人，不为五斗米折腰',
        image: '/api/placeholder/200/300'
      }
    ],
    biography: [
      {
        title: '隐逸风骨',
        content: '陶氏家族以隐逸文化著称，陶渊明更是成为中国隐逸文化的代表人物，其\'不为五斗米折腰\'的精神影响深远。',
        image: '/api/placeholder/400/300'
      }
    ],
    gallery: [
      {
        id: 'tao-gallery-1',
        title: '陶渊明故居',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '江西九江陶渊明故居',
        year: 400,
        location: '江西九江'
      }
    ],
    articles: [
      {
        id: 'tao-article-1',
        title: '陶渊明与隐逸文化',
        author: '王学者',
        date: '2023-07-10',
        summary: '分析陶渊明在中国隐逸文化中的地位和影响',
        content: '陶渊明（365-427）作为中国隐逸文化的代表人物...',
        tags: ['隐逸文化', '陶渊明', '田园诗歌']
      }
    ]
  },
  {
    id: 'hu',
    name: '胡氏',
    description: '安定胡氏，理学传家，清正门风',
    emblem: '🏔️',
    color: '#4169E1',
    members: [
      {
        id: 'hu-1',
        name: '胡适',
        birthYear: 1891,
        deathYear: 1962,
        title: '现代学者',
        description: '新文化运动领袖，著名学者',
        image: '/api/placeholder/200/300'
      }
    ],
    biography: [
      {
        title: '理学传承',
        content: '胡氏家族有着深厚的理学传统，注重道德修养和学术研究，形成了清正门风。',
        image: '/api/placeholder/400/300'
      }
    ],
    gallery: [
      {
        id: 'hu-gallery-1',
        title: '胡适故居',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '安徽绩溪胡适故居',
        year: 1900,
        location: '安徽绩溪'
      }
    ],
    articles: [
      {
        id: 'hu-article-1',
        title: '胡适与新文化运动',
        author: '陈教授',
        date: '2023-08-05',
        summary: '探讨胡适在中国现代文化史上的贡献',
        content: '胡适（1891-1962）作为中国新文化运动的领袖人物...',
        tags: ['新文化运动', '胡适', '现代文化']
      }
    ]
  },
  {
    id: 'zha',
    name: '查氏',
    description: '海宁查氏，书香门第，文化世家',
    emblem: '📖',
    color: '#8B008B',
    members: [
      {
        id: 'zha-1',
        name: '查慎行',
        birthYear: 1650,
        deathYear: 1727,
        title: '清代诗人',
        description: '清代著名诗人，康熙年间进士',
        image: '/api/placeholder/200/300'
      }
    ],
    biography: [
      {
        title: '文化世家',
        content: '海宁查氏家族是明清时期著名的文化世家，科举辈出，在文学、史学等方面都有突出贡献。',
        image: '/api/placeholder/400/300'
      }
    ],
    gallery: [
      {
        id: 'zha-gallery-1',
        title: '查氏故居',
        ancient: '/api/placeholder/300/400',
        modern: '/api/placeholder/300/400',
        description: '浙江海宁查氏故居',
        year: 1700,
        location: '浙江海宁'
      }
    ],
    articles: [
      {
        id: 'zha-article-1',
        title: '查氏家族的文化贡献',
        author: '赵研究员',
        date: '2023-09-12',
        summary: '分析查氏家族在明清时期的文化成就',
        content: '海宁查氏家族作为明清时期的文化世家...',
        tags: ['文化世家', '明清文学', '查氏家族']
      }
    ]
  },
  {
    id: 'placeholder',
    name: '预留位',
    description: '待添加更多家族',
    emblem: '🔮',
    color: '#696969',
    members: [],
    biography: [],
    gallery: [],
    articles: []
  }
];