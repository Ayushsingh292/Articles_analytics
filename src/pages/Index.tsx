import { FileText, Type, Video, Image, TrendingUp } from 'lucide-react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardTabs } from '@/components/dashboard/DashboardTabs';
import { KPICard } from '@/components/dashboard/KPICard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { AuthorList } from '@/components/dashboard/AuthorList';
import { AuthorListCompact } from '@/components/dashboard/AuthorListCompact';
import { ExportButton } from '@/components/dashboard/ExportButton';
import { PublicationTrendChart } from '@/components/dashboard/charts/PublicationTrendChart';
import { CategoryBarChart } from '@/components/dashboard/charts/CategoryBarChart';
import { ArticleLengthChart } from '@/components/dashboard/charts/ArticleLengthChart';
import { ContentByCategoryChart } from '@/components/dashboard/charts/ContentByCategoryChart';
import {
  kpiData,
  topAuthors,
  publicationTrend,
  categoryData,
  articleLengthData,
  contentByCategory,
} from '@/data/mockData';

const Index = () => {
  const handleExport = () => {
    // Export functionality to be implemented by backend developer
    console.log('Export articles clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onExport={handleExport} />
      
      {/* KPI Cards Row */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <KPICard
            title="Total Articles"
            value={kpiData.totalArticles}
            icon={FileText}
          />
          <KPICard
            title="Average Word Count"
            value={kpiData.averageWordCount.toLocaleString()}
            icon={Type}
          />
          <KPICard
            title="Articles with Video"
            value={`${kpiData.articlesWithVideo}%`}
            icon={Video}
            badge={{ text: `↑ ${kpiData.videoPercentageChange}%`, variant: 'success' }}
          />
          <KPICard
            title="Avg. Images per Article"
            value={kpiData.avgImagesPerArticle}
            icon={Image}
          />
          <KPICard
            title="Avg. Articles / Day"
            value={kpiData.avgArticlesPerDay}
            icon={TrendingUp}
          />
        </div>
      </div>

      {/* Tabs */}
      <DashboardTabs />

      {/* Main Content */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Publication Trend Line Chart */}
            <ChartCard
              title="Publication Trend"
              subtitle="Articles published over time"
            >
              <PublicationTrendChart data={publicationTrend} />
            </ChartCard>

            {/* Category Bar Chart */}
            <ChartCard
              title="Articles by Category"
              subtitle="Distribution across topics"
            >
              <CategoryBarChart data={categoryData} />
            </ChartCard>
          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="space-y-6">
            {/* Top Authors - Compact */}
            <AuthorListCompact
              authors={topAuthors}
              title="Top Authors"
              subtitle="Most active content creators"
            />

            {/* Content by Category Mini Chart */}
            <ChartCard
              title="Content by Category"
              subtitle="Articles"
            >
              <ContentByCategoryChart data={contentByCategory} />
            </ChartCard>

            {/* Article Length Distribution */}
            <ChartCard
              title="Article Length Distribution"
              subtitle="Word count"
            >
              <ArticleLengthChart data={articleLengthData} />
            </ChartCard>
          </div>
        </div>

        {/* Authors List Full */}
        <div className="mt-6">
          <AuthorList
            authors={topAuthors}
            title="Top Authors"
            subtitle="Most active contributors"
          />
        </div>
      </div>

      {/* Fixed Export Button */}
      <div className="fixed bottom-6 right-6">
        <ExportButton onClick={handleExport} />
      </div>
    </div>
  );
};

export default Index;
