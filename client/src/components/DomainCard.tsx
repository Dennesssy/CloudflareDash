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
    <Card 
      className="hover-elevate border shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/40 to-white/20 dark:from-slate-900/40 dark:to-slate-800/20 backdrop-blur-sm group"
      data-testid={`card-domain-${domain}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/15 transition-colors shadow-sm">
              <Globe className="h-4 w-4 text-primary" />
            </div>
            <CardTitle className="text-base font-semibold leading-tight">{domain}</CardTitle>
          </div>
          <Badge variant={statusInfo.variant} data-testid={`badge-status-${status}`} className="shadow-sm">
            {statusInfo.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-px bg-gradient-to-r from-border/50 via-border/25 to-transparent" />
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">DNS Records</span>
          <span className="font-bold text-foreground bg-secondary/40 px-2 py-1 rounded-md text-xs" data-testid="text-dns-count">
            {dnsRecords}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">Proxy Status</span>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary/40">
            {proxyStatus && <Zap className="h-3 w-3 text-primary animate-pulse" />}
            <span className="font-medium text-xs" data-testid="text-proxy-status">
              {proxyStatus ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-border/50 via-border/25 to-transparent" />
        
        <div className="pt-1">
          <p className="text-xs text-muted-foreground" data-testid="text-last-sync">
            Last sync: {lastSync}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
