import { Plus, Copy, Trash2, Eye, EyeOff, RotateCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockCredentials = [
  {
    id: "1",
    name: "CI/CD Pipeline",
    clientId: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    status: "active" as const,
    created: "2 weeks ago",
    lastUsed: "5 mins ago",
    secret: "sk_1234567890abcdefghijklmnopqrstuv",
  },
  {
    id: "2",
    name: "Analytics Service",
    clientId: "q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6",
    status: "active" as const,
    created: "1 month ago",
    lastUsed: "1 hour ago",
    secret: "sk_abcdefghijklmnopqrstuvwxyz123456",
  },
  {
    id: "3",
    name: "Old API Key",
    clientId: "z9x8c7v6b5n4m3l2k1j0h9g8f7d6s5a4",
    status: "inactive" as const,
    created: "3 months ago",
    lastUsed: "2 months ago",
    secret: "sk_oldkey1234567890abcdefghijklmnop",
  },
];

export default function ServiceCredentials() {
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
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Service Credentials</h1>
          <p className="text-muted-foreground mt-1">Manage service-to-service authentication credentials</p>
        </div>
        <Button data-testid="button-create-credential">
          <Plus className="h-4 w-4 mr-2" />
          Create Credential
        </Button>
      </div>

      <Card data-testid="card-credentials">
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Client ID</TableHead>
                  <TableHead>Client Secret</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="w-[100px]">Last Used</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCredentials.map((cred) => {
                  const isRevealed = revealedIds.has(cred.id);
                  return (
                    <TableRow key={cred.id} data-testid={`row-credential-${cred.id}`}>
                      <TableCell className="font-semibold" data-testid="text-name">
                        {cred.name}
                      </TableCell>
                      <TableCell className="font-mono text-sm" data-testid="text-client-id">
                        {cred.clientId}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        <div className="flex items-center gap-2">
                          <span data-testid="text-secret">
                            {isRevealed ? cred.secret : "••••••••••••••••••••••••••••••••"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={cred.status === "active" ? "default" : "secondary"}>
                          {cred.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground" data-testid="text-last-used">
                        {cred.lastUsed}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleReveal(cred.id)}
                            data-testid={`button-${isRevealed ? 'hide' : 'show'}-${cred.id}`}
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
                            data-testid={`button-copy-${cred.id}`}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            data-testid={`button-rotate-${cred.id}`}
                          >
                            <RotateCw className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            data-testid={`button-delete-${cred.id}`}
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
  );
}
