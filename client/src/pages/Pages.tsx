import { Plus, ExternalLink, Trash2, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockPages = [
  {
    id: "1",
    name: "portfolio-site",
    domain: "portfolio.dev",
    status: "deployed" as const,
    lastDeployed: "1 hour ago",
    branch: "main",
  },
  {
    id: "2",
    name: "docs-site",
    domain: "docs.myapp.io",
    status: "deployed" as const,
    lastDeployed: "3 days ago",
    branch: "main",
  },
  {
    id: "3",
    name: "staging-site",
    domain: "staging.myapp.io",
    status: "building" as const,
    lastDeployed: "5 mins ago",
    branch: "develop",
  },
];

export default function Pages() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Pages</h1>
          <p className="text-muted-foreground mt-1">Deploy and manage Cloudflare Pages projects</p>
        </div>
        <Button data-testid="button-create-project">
          <Plus className="h-4 w-4 mr-2" />
          Create Project
        </Button>
      </div>

      <div className="space-y-3">
        {mockPages.map((page) => (
          <Card key={page.id} className="hover-elevate" data-testid={`card-page-${page.id}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold" data-testid="text-page-name">{page.name}</h3>
                    <Badge variant={page.status === "deployed" ? "default" : "secondary"}>
                      {page.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span data-testid="text-domain">{page.domain}</span>
                    <div className="flex items-center gap-1">
                      <GitBranch className="h-3 w-3" />
                      <span data-testid="text-branch">{page.branch}</span>
                    </div>
                    <span data-testid="text-deployed">Deployed {page.lastDeployed}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-visit-${page.id}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${page.id}`}>
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
