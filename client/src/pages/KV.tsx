import { Plus, Trash2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockNamespaces = [
  { id: "1", name: "api-cache", keys: 1243, size: "12.5 MB" },
  { id: "2", name: "user-sessions", keys: 523, size: "5.2 MB" },
  { id: "3", name: "feature-flags", keys: 42, size: "245 KB" },
];

const mockKeys = [
  { key: "user:1001:profile", size: "2.3 KB", updated: "2 mins ago" },
  { key: "cache:api:results", size: "14 KB", updated: "5 mins ago" },
  { key: "session:abc123", size: "892 B", updated: "10 mins ago" },
];

export default function KV() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">KV Namespaces</h1>
          <p className="text-muted-foreground mt-1">Manage distributed key-value storage</p>
        </div>
        <Button data-testid="button-create-namespace">
          <Plus className="h-4 w-4 mr-2" />
          Create Namespace
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Namespaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockNamespaces.map((ns) => (
            <Card key={ns.id} className="hover-elevate" data-testid={`card-namespace-${ns.id}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold" data-testid="text-namespace-name">{ns.name}</h3>
                    <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
                      <span data-testid="text-keys">{ns.keys} keys</span>
                      <span data-testid="text-size">{ns.size}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${ns.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Keys in "api-cache"</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead className="w-[120px]">Size</TableHead>
                <TableHead className="w-[120px]">Updated</TableHead>
                <TableHead className="w-[60px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockKeys.map((item) => (
                <TableRow key={item.key} data-testid={`row-key-${item.key}`}>
                  <TableCell className="font-mono text-sm" data-testid="text-key">{item.key}</TableCell>
                  <TableCell className="text-sm" data-testid="text-size">{item.size}</TableCell>
                  <TableCell className="text-sm text-muted-foreground" data-testid="text-updated">{item.updated}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" data-testid="button-copy">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
