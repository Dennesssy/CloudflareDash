import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Shield, ShieldOff } from "lucide-react";

export interface DNSRecord {
  id: string;
  type: string;
  name: string;
  content: string;
  ttl: number;
  proxied: boolean;
}

interface DNSRecordTableProps {
  records: DNSRecord[];
  onEdit?: (record: DNSRecord) => void;
  onDelete?: (recordId: string) => void;
}

const recordTypeColors: Record<string, string> = {
  A: "default",
  AAAA: "secondary",
  CNAME: "outline",
  MX: "default",
  TXT: "secondary",
};

export function DNSRecordTable({ records, onEdit, onDelete }: DNSRecordTableProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Content</TableHead>
            <TableHead className="w-[80px]">TTL</TableHead>
            <TableHead className="w-[100px]">Proxy</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow
              key={record.id}
              className={selectedId === record.id ? "bg-muted/50" : ""}
              data-testid={`row-dns-${record.id}`}
            >
              <TableCell>
                <Badge
                  variant={recordTypeColors[record.type] as any || "default"}
                  className="font-mono"
                  data-testid={`badge-type-${record.type}`}
                >
                  {record.type}
                </Badge>
              </TableCell>
              <TableCell className="font-mono text-sm" data-testid="text-name">
                {record.name}
              </TableCell>
              <TableCell className="font-mono text-sm max-w-xs truncate" data-testid="text-content">
                {record.content}
              </TableCell>
              <TableCell className="text-sm" data-testid="text-ttl">{record.ttl}s</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {record.proxied ? (
                    <Shield className="h-4 w-4 text-primary" data-testid="icon-proxied" />
                  ) : (
                    <ShieldOff className="h-4 w-4 text-muted-foreground" data-testid="icon-not-proxied" />
                  )}
                  <span className="text-xs text-muted-foreground">
                    {record.proxied ? "On" : "Off"}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => {
                      setSelectedId(record.id);
                      onEdit?.(record);
                      console.log("Edit record:", record);
                    }}
                    data-testid={`button-edit-${record.id}`}
                  >
                    <Pencil className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => {
                      onDelete?.(record.id);
                      console.log("Delete record:", record.id);
                    }}
                    data-testid={`button-delete-${record.id}`}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
