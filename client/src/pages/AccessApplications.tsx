import { Plus, ExternalLink, Trash2, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockApplications = [
  {
    id: "1",
    name: "Internal Dashboard",
    domain: "dashboard.internal.example.com",
    type: "self-hosted" as const,
    status: "active" as const,
    users: 24,
    lastAccess: "5 mins ago",
  },
  {
    id: "2",
    name: "Admin Panel",
    domain: "admin.example.com",
    type: "self-hosted" as const,
    status: "active" as const,
    users: 8,
    lastAccess: "2 hours ago",
  },
  {
    id: "3",
    name: "Slack Integration",
    domain: "slack.example.com",
    type: "saas" as const,
    status: "active" as const,
    users: 52,
    lastAccess: "10 mins ago",
  },
  {
    id: "4",
    name: "Dev Environment",
    domain: "dev.internal.example.com",
    type: "self-hosted" as const,
    status: "paused" as const,
    users: 12,
    lastAccess: "3 days ago",
  },
];

export default function AccessApplications() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Access Applications</h1>
          <p className="text-muted-foreground mt-1">Protect applications with Zero Trust policies</p>
        </div>
        <Button data-testid="button-create-app">
          <Plus className="h-4 w-4 mr-2" />
          Add Application
        </Button>
      </div>

      <div className="space-y-3">
        {mockApplications.map((app) => (
          <Card key={app.id} className="hover-elevate" data-testid={`card-app-${app.id}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold" data-testid="text-app-name">{app.name}</h3>
                    <Badge variant={app.type === "saas" ? "secondary" : "default"}>
                      {app.type === "saas" ? "SaaS" : "Self-Hosted"}
                    </Badge>
                    <Badge variant={app.status === "active" ? "default" : "secondary"}>
                      {app.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="font-mono" data-testid="text-domain">{app.domain}</span>
                    <span data-testid="text-users">{app.users} users</span>
                    <span data-testid="text-last-access">Last access: {app.lastAccess}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-visit-${app.id}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-settings-${app.id}`}>
                    <SettingsIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${app.id}`}>
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
