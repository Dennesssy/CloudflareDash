import { Activity, Shield, TrendingUp, Globe } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality
const requestData = [
  { time: "00:00", requests: 1200 },
  { time: "04:00", requests: 800 },
  { time: "08:00", requests: 2400 },
  { time: "12:00", requests: 3200 },
  { time: "16:00", requests: 2800 },
  { time: "20:00", requests: 1600 },
];

const bandwidthData = [
  { time: "00:00", requests: 800 },
  { time: "04:00", requests: 600 },
  { time: "08:00", requests: 1800 },
  { time: "12:00", requests: 2400 },
  { time: "16:00", requests: 2200 },
  { time: "20:00", requests: 1200 },
];

const threatData = [
  { time: "00:00", requests: 45 },
  { time: "04:00", requests: 32 },
  { time: "08:00", requests: 78 },
  { time: "12:00", requests: 120 },
  { time: "16:00", requests: 95 },
  { time: "20:00", requests: 68 },
];

const topCountries = [
  { country: "United States", percentage: 42, requests: 504000 },
  { country: "United Kingdom", percentage: 18, requests: 216000 },
  { country: "Germany", percentage: 12, requests: 144000 },
  { country: "France", percentage: 8, requests: 96000 },
  { country: "Canada", percentage: 6, requests: 72000 },
];

export default function Analytics() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Monitor traffic, security, and performance metrics
        </p>
      </div>

      <Tabs defaultValue="24h" className="w-full">
        <TabsList data-testid="tabs-time-range">
          <TabsTrigger value="24h" data-testid="tab-24h">24 Hours</TabsTrigger>
          <TabsTrigger value="7d" data-testid="tab-7d">7 Days</TabsTrigger>
          <TabsTrigger value="30d" data-testid="tab-30d">30 Days</TabsTrigger>
        </TabsList>

        <TabsContent value="24h" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Requests"
              value="1.2M"
              icon={Activity}
              trend="+12% from yesterday"
            />
            <MetricCard
              title="Unique Visitors"
              value="384K"
              icon={Globe}
              trend="+8% from yesterday"
            />
            <MetricCard
              title="Threats Blocked"
              value="3,421"
              icon={Shield}
              trend="+5% from yesterday"
            />
            <MetricCard
              title="Cache Hit Rate"
              value="87%"
              icon={TrendingUp}
              trend="+2% improvement"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AnalyticsChart title="Request Traffic" data={requestData} />
            <AnalyticsChart title="Bandwidth Usage" data={bandwidthData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AnalyticsChart title="Threats Blocked" data={threatData} />
            
            <Card data-testid="card-top-countries">
              <CardHeader>
                <CardTitle className="text-base">Top Countries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCountries.map((country) => (
                  <div key={country.country} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{country.country}</span>
                      <span className="text-muted-foreground">
                        {country.percentage}% ({country.requests.toLocaleString()})
                      </span>
                    </div>
                    <Progress value={country.percentage} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="7d" className="mt-6">
          <div className="text-center py-12 text-muted-foreground">
            7-day analytics view
          </div>
        </TabsContent>

        <TabsContent value="30d" className="mt-6">
          <div className="text-center py-12 text-muted-foreground">
            30-day analytics view
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
