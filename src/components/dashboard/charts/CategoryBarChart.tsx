import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { CategoryData } from '@/data/mockData';

interface CategoryBarChartProps {
  data: CategoryData[];
}

export function CategoryBarChart({ data }: CategoryBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" vertical={false} />
        <XAxis
          dataKey="category"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 11 }}
          dy={10}
          interval={0}
          angle={-20}
          textAnchor="end"
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
        />
        <Bar dataKey="articles" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
