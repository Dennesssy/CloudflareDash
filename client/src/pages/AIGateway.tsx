import { Plus, BarChart3, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockGateways = [
  {
    id: "1",
    name: "production-gateway",
    status: "active" as const,
    requestsPerDay: "2.3M",
    avgLatency: "145ms",
    errorRate: "0.12%",
  },
  {
    id: "2",
    name: "staging-gateway",
    status: "active" as const,
    requestsPerDay: "450K",
    avgLatency: "152ms",
    errorRate: "0.08%",
  },
  {
    id: "3",
    name: "dev-testing-gateway",
    status: "idle" as const,
    requestsPerDay: "12K",
    avgLatency: "156ms",
    errorRate: "0.00%",
  },
];

const mockLogs = [
  {
    id: "1",
    timestamp: "2 mins ago",
    model: "Llama 2 7B",
    tokens: "512",
    latency: "145ms",
    status: "success" as const,
  },
  {
    id: "2",
    timestamp: "5 mins ago",
    model: "Mistral 7B",
    tokens: "1024",
    latency: "158ms",
    status: "success" as const,
  },
  {
    id: "3",
    timestamp: "8 mins ago",
    model: "CLIP ViT-B/32",
    tokens: "256",
    latency: "89ms",
    status: "error" as const,
  },
  {
    id: "4",
    timestamp: "12 mins ago",
    model: "Llama 2 7B",
    tokens: "768",
    latency: "142ms",
    status: "success" as const,
  },
];

export default function AIGateway() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">AI Gateway</h1>
          <p className="text-muted-foreground mt-1">Route and manage AI API requests</p>
        </div>
        <Button data-testid="button-create-gateway">
          <Plus className="h-4 w-4 mr-2" />
          Create Gateway
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Gateways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockGateways.map((gateway) => (
            <Card key={gateway.id} className="hover-elevate" data-testid={`card-gateway-${gateway.id}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg" data-testid="text-gateway-name">
                    {gateway.name}
                  </CardTitle>
                  <Badge
                    variant={gateway.status === "active" ? "default" : "secondary"}
                  >
                    {gateway.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Requests/day</span>
                  <span className="font-semibold" data-testid="text-requests">{gateway.requestsPerDay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg Latency</span>
                  <span className="font-semibold" data-testid="text-latency">{gateway.avgLatency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Error Rate</span>
                  <span className={`font-semibold ${gateway.errorRate === "0.00%" ? "text-green-600" : "text-amber-600"}`} data-testid="text-error-rate">
                    {gateway.errorRate}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Recent Requests
          </h2>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead className="w-[80px]">Tokens</TableHead>
                    <TableHead className="w-[80px]">Latency</TableHead>
                    <TableHead className="w-[80px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLogs.map((log) => (
                    <TableRow key={log.id} data-testid={`row-request-${log.id}`}>
                      <TableCell className="text-sm text-muted-foreground" data-testid="text-timestamp">
                        {log.timestamp}
                      </TableCell>
                      <TableCell className="font-mono text-sm" data-testid="text-model">
                        {log.model}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-tokens">
                        {log.tokens}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-latency">
                        {log.latency}
                      </TableCell>
                      <TableCell>
                        {log.status === "success" ? (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-600">Success</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <span className="text-sm text-red-600">Error</span>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
