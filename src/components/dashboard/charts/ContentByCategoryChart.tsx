import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CategoryData } from '@/data/mockData';

interface ContentByCategoryChartProps {
  data: CategoryData[];
}

export function ContentByCategoryChart({ data }: ContentByCategoryChartProps) {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <XAxis
          dataKey="category"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 9 }}
          dy={5}
          interval={0}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 10 }}
          dx={-5}
          width={30}
        />
        <Tooltip
          cursor={{ fill: 'hsl(220 14% 96%)' }}
          contentStyle={{
            backgroundColor: 'hsl(0 0% 100%)',
            border: '1px solid hsl(220 13% 91%)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            fontSize: 12,
          }}
        />
        <Bar dataKey="articles" fill="hsl(217, 91%, 60%)" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
