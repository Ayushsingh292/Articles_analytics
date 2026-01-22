// Mock data for the Media Intelligence Dashboard
// Structured for easy backend integration

export interface KPIData {
  totalArticles: number;
  averageWordCount: number;
  articlesWithVideo: number;
  videoPercentageChange: number;
  avgImagesPerArticle: number;
  avgArticlesPerDay: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  articleCount: number;
  trend: number;
}

export interface PublicationTrendData {
  date: string;
  articles: number;
}

export interface CategoryData {
  category: string;
  articles: number;
  color: string;
}

export interface ArticleLengthData {
  range: string;
  count: number;
}

// KPI Summary Data
export const kpiData: KPIData = {
  totalArticles: 483,
  averageWordCount: 1157,
  articlesWithVideo: 52,
  videoPercentageChange: 8,
  avgImagesPerArticle: 3.2,
  avgArticlesPerDay: 32.2,
};

// Top Authors
export const topAuthors: Author[] = [
  { id: '1', name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', articleCount: 58, trend: 58 },
  { id: '2', name: 'Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', articleCount: 47, trend: 47 },
  { id: '3', name: 'Jennifer Roberts', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', articleCount: 36, trend: 36 },
  { id: '4', name: 'Emily Warren', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face', articleCount: 32, trend: 32 },
  { id: '5', name: 'Alex Thompson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', articleCount: 28, trend: 28 },
  { id: '6', name: 'David Park', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', articleCount: 26, trend: 26 },
];

// Publication Trend (line chart data)
export const publicationTrend: PublicationTrendData[] = [
  { date: '01/06', articles: 38 },
  { date: '01/07', articles: 35 },
  { date: '01/08', articles: 40 },
  { date: '01/09', articles: 38 },
  { date: '01/10', articles: 42 },
  { date: '01/11', articles: 39 },
  { date: '01/12', articles: 41 },
  { date: '01/13', articles: 44 },
  { date: '01/14', articles: 43 },
  { date: '01/15', articles: 48 },
  { date: '01/16', articles: 52 },
];

// Articles by Category
export const categoryData: CategoryData[] = [
  { category: 'News', articles: 127, color: 'hsl(217, 91%, 60%)' },
  { category: 'Politics', articles: 65, color: 'hsl(0, 72%, 51%)' },
  { category: 'Finance', articles: 52, color: 'hsl(142, 71%, 45%)' },
  { category: 'Media', articles: 48, color: 'hsl(45, 93%, 47%)' },
  { category: 'Crime', articles: 38, color: 'hsl(27, 96%, 61%)' },
  { category: 'Technology', articles: 45, color: 'hsl(262, 83%, 58%)' },
  { category: 'Health', articles: 35, color: 'hsl(174, 72%, 40%)' },
  { category: 'Sports', articles: 42, color: 'hsl(330, 81%, 60%)' },
  { category: 'Other', articles: 31, color: 'hsl(220, 9%, 46%)' },
];

// Article Length Distribution
export const articleLengthData: ArticleLengthData[] = [
  { range: '0-500', count: 45 },
  { range: '501-1000', count: 78 },
  { range: '1001-1500', count: 156 },
  { range: '1501-2500', count: 142 },
  { range: '2500+', count: 62 },
];

// Content by Category (for sidebar mini chart)
export const contentByCategory: CategoryData[] = [
  { category: '0-500', articles: 45, color: 'hsl(217, 91%, 60%)' },
  { category: '501-1000', articles: 120, color: 'hsl(217, 91%, 60%)' },
  { category: '1001-1500', articles: 210, color: 'hsl(217, 91%, 60%)' },
  { category: '1501-2500', articles: 180, color: 'hsl(217, 91%, 60%)' },
  { category: '2500+', articles: 85, color: 'hsl(217, 91%, 60%)' },
];
