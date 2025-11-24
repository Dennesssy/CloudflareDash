import { Plus, Trash2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockObjects = [
  {
    id: "1",
    name: "session-manager",
    status: "active" as const,
    instances: 45,
    storage: "8.2 MB",
    updated: "1 min ago",
  },
  {
    id: "2",
    name: "rate-limiter",
    status: "active" as const,
    instances: 12,
    storage: "2.1 MB",
    updated: "5 mins ago",
  },
  {
    id: "3",
    name: "analytics-aggregator",
    status: "idle" as const,
    instances: 2,
    storage: "512 KB",
    updated: "2 hours ago",
  },
];

export default function DurableObjects() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Durable Objects</h1>
          <p className="text-muted-foreground mt-1">Manage stateful compute instances</p>
        </div>
        <Button data-testid="button-create-object">
          <Plus className="h-4 w-4 mr-2" />
          Create Class
        </Button>
      </div>

      <div className="space-y-3">
        {mockObjects.map((obj) => (
          <Card key={obj.id} className="hover-elevate" data-testid={`card-object-${obj.id}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold" data-testid="text-object-name">{obj.name}</h3>
                    <Badge variant={obj.status === "active" ? "default" : "secondary"}>
                      {obj.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span data-testid="text-instances">{obj.instances} instances</span>
                    <span data-testid="text-storage">{obj.storage} stored</span>
                    <span data-testid="text-updated">{obj.updated}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" data-testid={`button-delete-${obj.id}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
