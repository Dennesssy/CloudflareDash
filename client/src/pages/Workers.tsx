import { Plus, Play, Pause, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockWorkers = [
  {
    id: "1",
    name: "api-gateway",
    status: "active" as const,
    lastDeployed: "2 hours ago",
    requests: "12.5K/day",
  },
  {
    id: "2",
    name: "auth-middleware",
    status: "active" as const,
    lastDeployed: "5 days ago",
    requests: "8.2K/day",
  },
  {
    id: "3",
    name: "image-optimizer",
    status: "paused" as const,
    lastDeployed: "1 week ago",
    requests: "0",
  },
];

export default function Workers() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Workers</h1>
          <p className="text-muted-foreground mt-1">Deploy and manage Cloudflare Workers</p>
        </div>
        <Button data-testid="button-create-worker">
          <Plus className="h-4 w-4 mr-2" />
          Create Worker
        </Button>
      </div>

      <div className="space-y-3">
        {mockWorkers.map((worker) => (
          <Card key={worker.id} className="hover-elevate" data-testid={`card-worker-${worker.id}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold" data-testid="text-worker-name">{worker.name}</h3>
                    <Badge variant={worker.status === "active" ? "default" : "secondary"}>
                      {worker.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span data-testid="text-last-deployed">Last deployed: {worker.lastDeployed}</span>
                    <span data-testid="text-requests">{worker.requests}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-${worker.status === 'active' ? 'pause' : 'play'}-${worker.id}`}>
                    {worker.status === "active" ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${worker.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
