import { Plus, Trash2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockPolicies = [
  {
    id: "1",
    name: "Employees Only",
    application: "Internal Dashboard",
    rules: 2,
    status: "active" as const,
    created: "2 weeks ago",
    matchesDescription: "Email domain matches example.com",
  },
  {
    id: "2",
    name: "Admins + MFA",
    application: "Admin Panel",
    rules: 3,
    status: "active" as const,
    created: "1 month ago",
    matchesDescription: "Admin group AND MFA required",
  },
  {
    id: "3",
    name: "Contractors - Time Based",
    application: "Dev Environment",
    rules: 4,
    status: "active" as const,
    created: "3 weeks ago",
    matchesDescription: "Contractor group AND within business hours",
  },
  {
    id: "4",
    name: "Public Access",
    application: "Slack Integration",
    rules: 1,
    status: "active" as const,
    created: "1 week ago",
    matchesDescription: "Anyone authenticated",
  },
];

export default function AccessPolicies() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Access Policies</h1>
          <p className="text-muted-foreground mt-1">Define Zero Trust access rules for your applications</p>
        </div>
        <Button data-testid="button-create-policy">
          <Plus className="h-4 w-4 mr-2" />
          Create Policy
        </Button>
      </div>

      <Card data-testid="card-policies">
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Policy Name</TableHead>
                  <TableHead>Application</TableHead>
                  <TableHead>Rules</TableHead>
                  <TableHead>Conditions</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPolicies.map((policy) => (
                  <TableRow key={policy.id} data-testid={`row-policy-${policy.id}`}>
                    <TableCell className="font-semibold" data-testid="text-policy-name">
                      {policy.name}
                    </TableCell>
                    <TableCell className="text-sm" data-testid="text-application">
                      {policy.application}
                    </TableCell>
                    <TableCell className="text-sm" data-testid="text-rules">
                      {policy.rules} rule{policy.rules !== 1 ? 's' : ''}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground" data-testid="text-conditions">
                      {policy.matchesDescription}
                    </TableCell>
                    <TableCell>
                      <Badge variant={policy.status === "active" ? "default" : "secondary"}>
                        {policy.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          data-testid={`button-edit-${policy.id}`}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          data-testid={`button-delete-${policy.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
