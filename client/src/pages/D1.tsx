import { Plus, Database, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockDatabases = [
  { id: "1", name: "production-db", size: "24 MB", tables: 8, updated: "1 min ago" },
  { id: "2", name: "analytics-db", size: "156 MB", tables: 12, updated: "15 mins ago" },
  { id: "3", name: "staging-db", size: "8.5 MB", tables: 8, updated: "2 days ago" },
];

const mockTables = [
  { name: "users", rows: 2543, columns: 12, size: "4.2 MB" },
  { name: "posts", rows: 12840, columns: 8, size: "8.1 MB" },
  { name: "comments", rows: 45230, columns: 6, size: "7.2 MB" },
];

export default function D1() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">D1 Databases</h1>
          <p className="text-muted-foreground mt-1">Manage serverless SQL databases</p>
        </div>
        <Button data-testid="button-create-database">
          <Plus className="h-4 w-4 mr-2" />
          Create Database
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Databases</h2>
        <div className="space-y-2">
          {mockDatabases.map((db) => (
            <Card key={db.id} className="hover-elevate" data-testid={`card-database-${db.id}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Database className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold" data-testid="text-database-name">{db.name}</h3>
                      <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                        <span data-testid="text-size">{db.size}</span>
                        <span data-testid="text-tables">{db.tables} tables</span>
                        <span data-testid="text-updated">{db.updated}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${db.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tables in "production-db"</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table</TableHead>
                <TableHead className="w-[100px]">Rows</TableHead>
                <TableHead className="w-[100px]">Columns</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTables.map((table) => (
                <TableRow key={table.name} data-testid={`row-table-${table.name}`}>
                  <TableCell className="font-mono text-sm" data-testid="text-table-name">{table.name}</TableCell>
                  <TableCell className="text-sm" data-testid="text-rows">{table.rows.toLocaleString()}</TableCell>
                  <TableCell className="text-sm" data-testid="text-columns">{table.columns}</TableCell>
                  <TableCell className="text-sm" data-testid="text-size">{table.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
