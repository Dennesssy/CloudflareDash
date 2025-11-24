import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  description?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, description }: MetricCardProps) {
  return (
    <Card 
      className="hover-elevate border shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 dark:from-slate-900/40 dark:to-slate-800/20 backdrop-blur-sm group overflow-hidden"
      data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors shadow-sm">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold tracking-tight" data-testid="text-metric-value">
          {value}
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-2 font-medium" data-testid="text-metric-trend">
            {trend}
          </p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-2 font-medium">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
