import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PublicationTrendData } from '@/data/mockData';

interface PublicationTrendChartProps {
  data: PublicationTrendData[];
}

export function PublicationTrendChart({ data }: PublicationTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 12 }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'hsl(220 9% 46%)', fontSize: 12 }}
          dx={-10}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(0 0% 100%)',
            border: '1px solid hsl(220 13% 91%)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}
          labelStyle={{ color: 'hsl(222 47% 11%)', fontWeight: 500 }}
          itemStyle={{ color: 'hsl(217 91% 60%)' }}
        />
        <Line
          type="monotone"
          dataKey="articles"
          stroke="hsl(217, 91%, 60%)"
          strokeWidth={2}
          dot={{ fill: 'hsl(217, 91%, 60%)', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: 'hsl(217, 91%, 60%)' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
