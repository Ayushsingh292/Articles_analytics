import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ArticleLengthData } from '@/data/mockData';

interface ArticleLengthChartProps {
  data: ArticleLengthData[];
}

export function ArticleLengthChart({ data }: ArticleLengthChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" vertical={false} />
        <XAxis
          dataKey="range"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 11 }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 12 }}
          dx={-10}
        />
        <Tooltip
          cursor={{ fill: 'hsl(220 14% 96%)' }}
          contentStyle={{
            backgroundColor: 'hsl(0 0% 100%)',
            border: '1px solid hsl(220 13% 91%)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}
          labelStyle={{ color: 'hsl(222 47% 11%)', fontWeight: 500 }}
          itemStyle={{ color: 'hsl(217 91% 60%)' }}
        />
        <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
