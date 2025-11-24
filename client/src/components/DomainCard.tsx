import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Zap } from "lucide-react";

interface DomainCardProps {
  domain: string;
  status: "active" | "paused" | "error";
  dnsRecords: number;
  lastSync: string;
  proxyStatus: boolean;
}

const statusConfig = {
  active: { label: "Active", variant: "default" as const },
  paused: { label: "Paused", variant: "secondary" as const },
  error: { label: "Error", variant: "destructive" as const },
};

export function DomainCard({
  domain,
  status,
  dnsRecords,
  lastSync,
  proxyStatus,
}: DomainCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <Card className="hover-elevate" data-testid={`card-domain-${domain}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <CardTitle className="text-base font-semibold">{domain}</CardTitle>
          </div>
          <Badge variant={statusInfo.variant} data-testid={`badge-status-${status}`}>
            {statusInfo.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">DNS Records</span>
          <span className="font-semibold" data-testid="text-dns-count">{dnsRecords}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Proxy Status</span>
          <div className="flex items-center gap-1">
            {proxyStatus && <Zap className="h-3 w-3 text-primary" />}
            <span className="font-medium" data-testid="text-proxy-status">
              {proxyStatus ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm pt-1">
          <span className="text-muted-foreground">Last Sync</span>
          <span className="text-xs" data-testid="text-last-sync">{lastSync}</span>
        </div>
      </CardContent>
    </Card>
  );
}
