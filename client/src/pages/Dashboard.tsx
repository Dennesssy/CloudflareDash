import { useState } from "react";
import { Activity, Globe, Shield, Zap, Plus } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DomainCard } from "@/components/DomainCard";
import { ChartCarousel } from "@/components/ChartCarousel";
import { Button } from "@/components/ui/button";
import { APITokenDialog } from "@/components/APITokenDialog";

//todo: remove mock functionality
const mockDomains = [
  {
    domain: "example.com",
    status: "active" as const,
    dnsRecords: 12,
    lastSync: "2 mins ago",
    proxyStatus: true,
  },
  {
    domain: "mywebsite.org",
    status: "active" as const,
    dnsRecords: 8,
    lastSync: "5 mins ago",
    proxyStatus: true,
  },
  {
    domain: "testdomain.net",
    status: "paused" as const,
    dnsRecords: 5,
    lastSync: "1 hour ago",
    proxyStatus: false,
  },
  {
    domain: "another-site.io",
    status: "active" as const,
    dnsRecords: 15,
    lastSync: "10 mins ago",
    proxyStatus: true,
  },
];

const chartData = [
  {
    title: "Request Traffic (24h)",
    data: [
      { time: "00:00", requests: 1200 },
      { time: "04:00", requests: 800 },
      { time: "08:00", requests: 2400 },
      { time: "12:00", requests: 3200 },
      { time: "16:00", requests: 2800 },
      { time: "20:00", requests: 1600 },
    ],
    type: "area" as const,
    dataKey: "requests",
    color: "hsl(var(--primary))",
  },
  {
    title: "Threats Blocked",
    data: [
      { time: "00:00", threats: 45 },
      { time: "04:00", threats: 32 },
      { time: "08:00", threats: 89 },
      { time: "12:00", threats: 124 },
      { time: "16:00", threats: 98 },
      { time: "20:00", threats: 52 },
    ],
    type: "bar" as const,
    dataKey: "threats",
    color: "hsl(var(--destructive))",
  },
  {
    title: "Bandwidth Saved (GB)",
    data: [
      { time: "00:00", bandwidth: 2.3 },
      { time: "04:00", bandwidth: 1.8 },
      { time: "08:00", bandwidth: 4.2 },
      { time: "12:00", bandwidth: 5.6 },
      { time: "16:00", bandwidth: 4.9 },
      { time: "20:00", bandwidth: 2.8 },
    ],
    type: "area" as const,
    dataKey: "bandwidth",
    color: "hsl(var(--success))",
  },
  {
    title: "API Latency (ms)",
    data: [
      { time: "00:00", latency: 145 },
      { time: "04:00", latency: 132 },
      { time: "08:00", latency: 198 },
      { time: "12:00", latency: 245 },
      { time: "16:00", latency: 198 },
      { time: "20:00", latency: 152 },
    ],
    type: "line" as const,
    dataKey: "latency",
    color: "hsl(var(--secondary-blue))",
  },
  {
    title: "Worker Executions",
    data: [
      { time: "00:00", executions: 5200 },
      { time: "04:00", executions: 3100 },
      { time: "08:00", executions: 8900 },
      { time: "12:00", executions: 12400 },
      { time: "16:00", executions: 9800 },
      { time: "20:00", executions: 6200 },
    ],
    type: "bar" as const,
    dataKey: "executions",
    color: "hsl(var(--chart-2))",
  },
  {
    title: "Cache Hit Ratio (%)",
    data: [
      { time: "00:00", hitRatio: 78 },
      { time: "04:00", hitRatio: 82 },
      { time: "08:00", hitRatio: 65 },
      { time: "12:00", hitRatio: 72 },
      { time: "16:00", hitRatio: 75 },
      { time: "20:00", hitRatio: 80 },
    ],
    type: "line" as const,
    dataKey: "hitRatio",
    color: "hsl(var(--chart-3))",
  },
];

export default function Dashboard() {
  const [showTokenDialog, setShowTokenDialog] = useState(false);
  const [isConnected, setIsConnected] = useState(true); //todo: remove mock functionality - default to false

  const handleConnect = (token: string) => {
    console.log("Connecting with token:", token);
    setIsConnected(true);
    setShowTokenDialog(false);
  };

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto shadow-lg">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Connect to Cloudflare</h1>
            <p className="text-muted-foreground">
              Enter your API token to start managing your domains and DNS records.
            </p>
          </div>
          <Button onClick={() => setShowTokenDialog(true)} size="lg" data-testid="button-connect-account">
            <Plus className="h-4 w-4 mr-2" />
            Connect Account
          </Button>
          <APITokenDialog
            open={showTokenDialog}
            onOpenChange={setShowTokenDialog}
            onConnect={handleConnect}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight" data-testid="text-page-title">
          Overview
        </h1>
        <p className="text-muted-foreground mt-2">
          Monitor your Cloudflare account and domain statistics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Requests"
          value="1.2M"
          icon={Activity}
          trend="+12% from last week"
        />
        <MetricCard title="Domains" value="8" icon={Globe} description="Active domains" />
        <MetricCard
          title="Threats Blocked"
          value="3,421"
          icon={Shield}
          trend="+5% from yesterday"
        />
        <MetricCard
          title="Bandwidth Saved"
          value="42.3 GB"
          icon={Zap}
          trend="via caching"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold px-0.5">Analytics Dashboard</h2>
        <p className="text-sm text-muted-foreground px-0.5">Hover to navigate through different metrics</p>
        <ChartCarousel charts={chartData} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockDomains.map((domain) => (
            <DomainCard key={domain.domain} {...domain} />
          ))}
        </div>
      </div>
    </div>
  );
}
