import { Author } from '@/data/mockData';

interface AuthorListProps {
  authors: Author[];
  title: string;
  subtitle?: string;
  showProgress?: boolean;
}

export function AuthorList({ authors, title, subtitle, showProgress = true }: AuthorListProps) {
  const maxArticles = Math.max(...authors.map(a => a.articleCount));

  return (
    <div className="dashboard-card transition-shadow duration-200">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      <div className="space-y-4">
        {authors.map((author) => (
          <div key={author.id} className="flex items-center gap-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="author-avatar flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground truncate">
                  {author.name}
                </span>
                <span className="text-sm text-muted-foreground ml-2">{author.articleCount}</span>
              </div>
              {showProgress && (
                <div className="mt-1.5 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="progress-bar h-full transition-all duration-300"
                    style={{ width: `${(author.articleCount / maxArticles) * 100}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
