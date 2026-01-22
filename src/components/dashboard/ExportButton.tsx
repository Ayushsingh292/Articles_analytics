import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExportButtonProps {
  onClick?: () => void;
}

export function ExportButton({ onClick }: ExportButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
    >
      <FileDown className="w-4 h-4" />
      Export Articles
    </Button>
  );
}
