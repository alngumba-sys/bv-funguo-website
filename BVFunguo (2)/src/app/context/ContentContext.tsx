import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  secondaryCtaText: string;
  backgroundImage: string;
  stats: {
    label: string;
    value: string;
  }[];
}

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: 'emerald' | 'gold';
}

interface PersonalLoanUse {
  icon: string;
  text: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface AboutContent {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  image: string;
}

interface ContactContent {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
}

interface SiteContent {
  hero: HeroContent;
  services: Service[];
  personalLoanUses: PersonalLoanUse[];
  keyFeatures: string[];
  personalLoanImage1: string;
  personalLoanImage2: string;
  testimonials: Testimonial[];
  faqs: FAQ[];
  about: AboutContent;
  contact: ContactContent;
  eligibility: {
    title: string;
    requirements: string[];
  };
  logo: string;
}

const defaultContent: SiteContent = {
  hero: {
    title: 'Your Trusted Business Partner',
    subtitle: 'BV FUNGUO',
    description: 'Personalized Financial Consulting for Individuals & Small Businesses in East Africa',
    ctaText: 'Get Started',
    secondaryCtaText: 'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTczNTA2NDcyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: [
      { label: 'Years Experience', value: '3+' },
      { label: 'Happy Clients', value: '50+' },
      { label: 'Client Satisfaction', value: '95%' },
    ],
  },
  services: [
    {
      id: '1',
      icon: 'FileSpreadsheet',
      title: 'Financial Planning & Budgeting',
      description: 'We design comprehensive financial plans that align with your business objectives. Our budgeting and forecasting services help businesses set realistic financial targets, monitor performance against plans, improve cost control and accountability, and support strategic and operational decision-making.',
      color: 'emerald',
    },
    {
      id: '2',
      icon: 'Wallet',
      title: 'Cash Flow Management',
      description: 'Strong cash flow is essential for business survival and growth. BV Funguo helps businesses analyze cash inflows and outflows, identify cash flow gaps and risks, improve working capital management, and strengthen liquidity and financial stability.',
      color: 'gold',
    },
    {
      id: '3',
      icon: 'TrendingUp',
      title: 'Business Growth & Expansion Strategy',
      description: 'We support businesses planning to grow, scale, or expand into new markets by providing financial feasibility analysis, expansion and scalability planning, scenario and sensitivity analysis, and strategic financial roadmaps for sustainable growth.',
      color: 'emerald',
    },
    {
      id: '4',
      icon: 'BarChart3',
      title: 'Cost Optimization & Profitability Analysis',
      description: 'Our consultants identify opportunities to improve profitability by reviewing cost structures and expenses, eliminating inefficiencies, improving pricing and margin strategies, and enhancing overall financial performance.',
      color: 'gold',
    },
    {
      id: '5',
      icon: 'ShieldCheck',
      title: 'Risk Management & Compliance Support',
      description: 'BV Funguo assists businesses in identifying and managing financial risks by assessing operational and financial risk exposure, implementing internal financial controls, supporting compliance with financial regulations, and strengthening governance and accountability.',
      color: 'emerald',
    },
    {
      id: '6',
      icon: 'Landmark',
      title: 'Investment & Funding Advisory',
      description: 'We help businesses prepare for and secure funding through funding strategy development, financial structuring and projections, investor and lender readiness support, and advisory on debt, equity, and alternative financing options.',
      color: 'gold',
    },
  ],
  personalLoanUses: [
    { icon: 'Target', text: 'Understanding Your Business' },
    { icon: 'Search', text: 'Financial Analysis & Assessment' },
    { icon: 'Lightbulb', text: 'Strategy Development' },
    { icon: 'CheckCircle', text: 'Implementation Support' },
    { icon: 'RefreshCw', text: 'Ongoing Advisory & Review' },
  ],
  keyFeatures: [
    'Experienced financial consultants',
    'Practical, results-oriented solutions',
    'Tailored strategies—not generic advice',
    'Clear communication and transparency',
    'Ethical and professional consulting standards',
    'Long-term partnership mindset',
  ],
  personalLoanImage1: 'https://images.unsplash.com/photo-1739289696461-76363e419fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMGxhcHRvcCUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NjAwNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  personalLoanImage2: 'https://images.unsplash.com/photo-1653669486397-b802144ae64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMGNvbnN1bHRpbmclMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODYwMDAwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  testimonials: [
    {
      id: '1',
      name: 'Sarah Mwangi',
      role: 'CEO, Tech Solutions Ltd',
      content: 'BV Funguo transformed our financial planning process. Their strategic insights helped us optimize cash flow and scale our operations successfully.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMGNlbyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg1ODY3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'James Kamau',
      role: 'Founder, Retail Enterprises',
      content: 'Working with BV Funguo gave us the financial clarity we needed to expand into three new markets. Their profitability analysis was exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBmb3VuZGVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODU4NjcyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      name: 'Grace Njeri',
      role: 'Director, Manufacturing Co.',
      content: 'BV Funguo\'s team helped us secure funding and implement financial controls that improved our bottom line by 40%. True business partners.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzM1MDY0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
  faqs: [
    {
      id: '1',
      question: 'What types of businesses do you work with?',
      answer: 'We work with businesses across various industries—from startups to established companies—looking to strengthen financial performance, improve operations, or plan for growth.',
    },
    {
      id: '2',
      question: 'How long does a typical consulting engagement last?',
      answer: 'Engagement length varies based on your needs. Some projects are one-time assessments (2-4 weeks), while others involve ongoing advisory relationships spanning months or years.',
    },
    {
      id: '3',
      question: 'Do you provide implementation support or just advice?',
      answer: 'We provide both strategic advice and practical implementation support. Our goal is to ensure recommendations are executed effectively.',
    },
    {
      id: '4',
      question: 'What is your fee structure?',
      answer: 'Our fees are customized based on project scope, complexity, and duration. We offer transparent pricing and detailed proposals before any engagement begins.',
    },
    {
      id: '5',
      question: 'Can you help with securing business funding?',
      answer: 'Yes. Our Investment & Funding Advisory service helps businesses prepare financial projections, develop funding strategies, and present compelling cases to investors and lenders.',
    },
    {
      id: '6',
      question: 'How do you maintain confidentiality?',
      answer: 'Client confidentiality is paramount. We sign non-disclosure agreements and follow strict ethical standards to protect all business and financial information.',
    },
  ],
  about: {
    title: 'About BV Funguo',
    description: 'BV Funguo is a professional financial consulting firm committed to helping businesses make informed, strategic, and sustainable financial decisions. We work closely with business owners, executives, and management teams to strengthen financial performance, improve operational efficiency, and support long-term growth.',
    mission: 'Our approach is built on integrity, transparency, and practical solutions. As your trusted business partner, we focus not only on numbers, but on understanding your business, your challenges, and your long-term vision.',
    vision: 'Whether you are strengthening current operations, managing financial risks, or planning future growth, BV Funguo provides the expertise, insight, and support you need to move forward with confidence.',
    values: [
      'Integrity and Transparency',
      'Practical, Results-Oriented Solutions',
      'Client-Centered Approach',
      'Professional Excellence',
      'Long-Term Partnership Mindset',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTczNTA2NDcyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  contact: {
    title: 'Build a Stronger Financial Foundation',
    description: 'Whether you are strengthening current operations, managing financial risks, or planning future growth, BV Funguo — Your Trusted Business Partner — provides the expertise, insight, and support you need to move forward with confidence.',
    email: 'info@bvfunguo.co.ke',
    phone: '+254 700 123 456',
    address: 'Nairobi, Kenya',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
  },
  eligibility: {
    title: 'Our Consulting Approach',
    requirements: [
      'Understanding Your Business - We take time to understand your operations, financial position, and strategic goals',
      'Financial Analysis & Assessment - Detailed review of financial data to identify risks, opportunities, and improvement areas',
      'Strategy Development - Customized financial strategies aligned with your business objectives',
      'Implementation Support - Practical guidance to help execute financial plans effectively',
      'Ongoing Advisory & Review - Continuous monitoring, review, and refinement as your business evolves',
    ],
  },
  logo: '',
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (updates: Partial<SiteContent>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  // Load content from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bv-funguo-content');
    if (saved) {
      try {
        const parsedContent = JSON.parse(saved);
        // Merge saved content with default content to ensure all fields exist
        setContent({
          ...defaultContent,
          ...parsedContent,
          hero: {
            ...defaultContent.hero,
            ...parsedContent.hero,
          },
          about: {
            ...defaultContent.about,
            ...parsedContent.about,
          },
          contact: {
            ...defaultContent.contact,
            ...parsedContent.contact,
          },
          eligibility: {
            ...defaultContent.eligibility,
            ...parsedContent.eligibility,
          },
        });
      } catch (e) {
        console.error('Failed to load saved content:', e);
      }
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('bv-funguo-content', JSON.stringify(content));
    } catch (error) {
      // Silently handle quota exceeded - admin panel will show error when uploading
      // No console logs to avoid cluttering the console
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        // Storage full - do nothing, admin panel handles this
      }
    }
  }, [content]);

  const updateContent = (updates: Partial<SiteContent>) => {
    setContent((prev) => ({ ...prev, ...updates }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('bv-funguo-content');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}