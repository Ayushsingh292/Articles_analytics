import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  suffix?: string;
  badge?: {
    text: string;
    variant: 'success' | 'neutral';
  };
}

export function KPICard({ title, value, icon: Icon, suffix, badge }: KPICardProps) {
  return (
    <div className="dashboard-card flex items-start gap-4 transition-shadow duration-200">
      <div className="kpi-icon flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-foreground">{value}</span>
          {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
          {badge && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                badge.variant === 'success'
                  ? 'bg-chart-green/10 text-chart-green'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {badge.text}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{title}</p>
      </div>
    </div>
  );
}
