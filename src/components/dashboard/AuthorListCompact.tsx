import { Author } from '@/data/mockData';
import { TrendingUp } from 'lucide-react';

interface AuthorListCompactProps {
  authors: Author[];
  title: string;
  subtitle?: string;
}

export function AuthorListCompact({ authors, title, subtitle }: AuthorListCompactProps) {
  return (
    <div className="dashboard-card transition-shadow duration-200">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      <div className="space-y-3">
        {authors.slice(0, 5).map((author) => (
          <div key={author.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={author.avatar}
                alt={author.name}
                className="author-avatar flex-shrink-0"
              />
              <span className="text-sm font-medium text-foreground">{author.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{author.articleCount}</span>
              <TrendingUp className="w-3 h-3 text-chart-green" />
              <span>{author.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
