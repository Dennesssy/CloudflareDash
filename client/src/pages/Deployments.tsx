import { GitBranch, Check, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockDeployments = [
  {
    id: "1",
    service: "api-gateway",
    version: "v2.1.0",
    status: "success" as const,
    branch: "main",
    commit: "a1b2c3d",
    deployedBy: "john.dev",
    deployedAt: "2 hours ago",
  },
  {
    id: "2",
    service: "auth-service",
    version: "v1.8.5",
    status: "success" as const,
    branch: "main",
    commit: "e4f5g6h",
    deployedBy: "jane.dev",
    deployedAt: "5 hours ago",
  },
  {
    id: "3",
    service: "web-frontend",
    version: "v3.0.1",
    status: "pending" as const,
    branch: "staging",
    commit: "i7j8k9l",
    deployedBy: "bob.dev",
    deployedAt: "15 mins ago",
  },
  {
    id: "4",
    service: "api-gateway",
    version: "v2.0.9",
    status: "failed" as const,
    branch: "hotfix",
    commit: "m0n1o2p",
    deployedBy: "alice.dev",
    deployedAt: "1 day ago",
  },
];

const statusConfig = {
  success: { icon: Check, color: "text-green-600", bg: "bg-green-50 dark:bg-green-950" },
  pending: { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950" },
  failed: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50 dark:bg-red-950" },
};

export default function Deployments() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Deployments</h1>
        <p className="text-muted-foreground mt-1">View deployment history across all services</p>
      </div>

      <Card data-testid="card-deployments">
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead className="w-[80px]">Version</TableHead>
                  <TableHead className="w-[80px]">Branch</TableHead>
                  <TableHead className="w-[100px]">Commit</TableHead>
                  <TableHead className="w-[100px]">Deployed By</TableHead>
                  <TableHead className="w-[120px]">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDeployments.map((deployment) => {
                  const config = statusConfig[deployment.status];
                  const StatusIcon = config.icon;
                  return (
                    <TableRow key={deployment.id} data-testid={`row-deployment-${deployment.id}`}>
                      <TableCell className={`${config.bg} px-2`}>
                        <StatusIcon className={`h-4 w-4 ${config.color}`} />
                      </TableCell>
                      <TableCell className="font-mono text-sm" data-testid="text-service">
                        {deployment.service}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-version">
                        {deployment.version}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-branch">
                        <div className="flex items-center gap-1">
                          <GitBranch className="h-3 w-3" />
                          {deployment.branch}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs" data-testid="text-commit">
                        {deployment.commit}
                      </TableCell>
                      <TableCell className="text-sm" data-testid="text-deployed-by">
                        {deployment.deployedBy}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground" data-testid="text-deployed-at">
                        {deployment.deployedAt}
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
