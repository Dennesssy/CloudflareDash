import { Plus, Trash2, Settings as SettingsIcon, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockIndexes = [
  {
    id: "1",
    name: "products-vector-db",
    dimension: "1536",
    vectors: "125.3K",
    size: "245 MB",
    created: "2 weeks ago",
  },
  {
    id: "2",
    name: "documents-embeddings",
    dimension: "384",
    vectors: "542.8K",
    size: "821 MB",
    created: "1 month ago",
  },
  {
    id: "3",
    name: "embeddings-cache",
    dimension: "768",
    vectors: "89.5K",
    size: "142 MB",
    created: "3 days ago",
  },
];

const mockQueryStats = [
  { query: "search", count: "15.2K", avgLatency: "12ms", lastUsed: "1 min ago" },
  { query: "insert", count: "8.9K", avgLatency: "8ms", lastUsed: "3 mins ago" },
  { query: "delete", count: "1.2K", avgLatency: "5ms", lastUsed: "1 hour ago" },
  { query: "update", count: "3.4K", avgLatency: "10ms", lastUsed: "30 mins ago" },
];

export default function Vectorize() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Vectorize</h1>
          <p className="text-muted-foreground mt-1">Manage vector databases and embeddings</p>
        </div>
        <Button data-testid="button-create-index">
          <Plus className="h-4 w-4 mr-2" />
          Create Index
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Vector Indexes</h2>
        <div className="space-y-2">
          {mockIndexes.map((index) => (
            <Card key={index.id} className="hover-elevate" data-testid={`card-index-${index.id}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Database className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold" data-testid="text-index-name">{index.name}</h3>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span data-testid="text-dimension">Dimension: {index.dimension}</span>
                        <span data-testid="text-vectors">{index.vectors} vectors</span>
                        <span data-testid="text-size">{index.size}</span>
                        <span data-testid="text-created">{index.created}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" data-testid={`button-settings-${index.id}`}>
                      <SettingsIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-delete-${index.id}`}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Query Performance</h2>
        <Card>
          <CardContent className="p-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Operation</TableHead>
                    <TableHead className="w-[100px]">Count</TableHead>
                    <TableHead className="w-[100px]">Avg Latency</TableHead>
                    <TableHead className="w-[120px]">Last Used</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockQueryStats.map((stat) => (
                    <TableRow key={stat.query} data-testid={`row-query-${stat.query}`}>
                      <TableCell className="font-semibold" data-testid="text-query">
                        {stat.query}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-count">
                        {stat.count}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-latency">
                        {stat.avgLatency}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground" data-testid="text-last-used">
                        {stat.lastUsed}
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
