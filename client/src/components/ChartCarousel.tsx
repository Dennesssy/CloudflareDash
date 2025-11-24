import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartItem {
  title: string;
  data: any[];
  type: "line" | "bar" | "area";
  dataKey: string;
  color: string;
}

interface ChartCarouselProps {
  charts: ChartItem[];
}

export function ChartCarousel({ charts }: ChartCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? charts.length - 1 : prev - 1));
  }, [charts.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === charts.length - 1 ? 0 : prev + 1));
  }, [charts.length]);

  const currentChart = charts[currentIndex];

  return (
    <Card className="border shadow-lg overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{currentChart.title}</CardTitle>
          <div className="text-xs text-muted-foreground font-medium">
            {currentIndex + 1} / {charts.length}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="space-y-4">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              {currentChart.type === "line" && (
                <LineChart data={currentChart.data}>
                  <defs>
                    <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={currentChart.color} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={currentChart.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey={currentChart.dataKey}
                    stroke={currentChart.color}
                    strokeWidth={3}
                    dot={false}
                    isAnimationActive={true}
                  />
                </LineChart>
              )}
              {currentChart.type === "bar" && (
                <BarChart data={currentChart.data}>
                  <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={currentChart.color} stopOpacity={0.9} />
                      <stop offset="100%" stopColor={currentChart.color} stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                    }}
                  />
                  <Bar
                    dataKey={currentChart.dataKey}
                    fill="url(#colorBar)"
                    radius={[8, 8, 0, 0]}
                    isAnimationActive={true}
                  />
                </BarChart>
              )}
              {currentChart.type === "area" && (
                <AreaChart data={currentChart.data}>
                  <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={currentChart.color} stopOpacity={0.4} />
                      <stop offset="95%" stopColor={currentChart.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={currentChart.dataKey}
                    stroke={currentChart.color}
                    fill="url(#colorArea)"
                    strokeWidth={2}
                    isAnimationActive={true}
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="hover-elevate"
              data-testid="button-prev-chart"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2 flex-wrap justify-center">
              {charts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground w-2"
                  }`}
                  data-testid={`button-chart-indicator-${idx}`}
                  aria-label={`Go to chart ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="hover-elevate"
              data-testid="button-next-chart"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
