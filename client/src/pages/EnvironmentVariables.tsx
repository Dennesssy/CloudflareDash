import { Plus, Copy, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockEnvVars = [
  {
    id: "1",
    key: "DATABASE_URL",
    value: "postgresql://user:pass@db.example.com/prod",
    environment: "production" as const,
    created: "2 weeks ago",
  },
  {
    id: "2",
    key: "API_KEY",
    value: "sk-abcdef1234567890abcdef1234567890",
    environment: "production" as const,
    created: "3 weeks ago",
  },
  {
    id: "3",
    key: "DEBUG",
    value: "false",
    environment: "production" as const,
    created: "1 week ago",
  },
  {
    id: "4",
    key: "DATABASE_URL",
    value: "postgresql://user:pass@db-staging.example.com/staging",
    environment: "staging" as const,
    created: "1 week ago",
  },
  {
    id: "5",
    key: "LOG_LEVEL",
    value: "debug",
    environment: "staging" as const,
    created: "5 days ago",
  },
];

export default function EnvironmentVariables() {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const toggleReveal = (id: string) => {
    const newSet = new Set(revealedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setRevealedIds(newSet);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Environment Variables</h1>
          <p className="text-muted-foreground mt-1">Manage secrets and configuration variables</p>
        </div>
        <Button data-testid="button-add-variable">
          <Plus className="h-4 w-4 mr-2" />
          Add Variable
        </Button>
      </div>

      <div className="space-y-4">
        {["production", "staging"].map((env) => (
          <div key={env} className="space-y-3">
            <h2 className="text-lg font-semibold capitalize" data-testid={`heading-${env}`}>
              {env} Environment
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Key</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead className="w-[100px]">Created</TableHead>
                        <TableHead className="w-[120px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockEnvVars
                        .filter((v) => v.environment === env)
                        .map((variable) => {
                          const isRevealed = revealedIds.has(variable.id);
                          return (
                            <TableRow key={variable.id} data-testid={`row-var-${variable.id}`}>
                              <TableCell className="font-mono text-sm" data-testid="text-key">
                                {variable.key}
                              </TableCell>
                              <TableCell className="text-sm font-mono">
                                <div className="flex items-center gap-2">
                                  <span data-testid="text-value">
                                    {isRevealed ? variable.value : "••••••••••••"}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="text-xs text-muted-foreground" data-testid="text-created">
                                {variable.created}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => toggleReveal(variable.id)}
                                    data-testid={`button-${isRevealed ? 'hide' : 'show'}-${variable.id}`}
                                  >
                                    {isRevealed ? (
                                      <EyeOff className="h-3 w-3" />
                                    ) : (
                                      <Eye className="h-3 w-3" />
                                    )}
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    data-testid={`button-copy-${variable.id}`}
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    data-testid={`button-delete-${variable.id}`}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
