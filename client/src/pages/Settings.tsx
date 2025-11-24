import { LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and dashboard preferences</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <Card data-testid="card-account">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Account Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">API Token</p>
                <p className="text-sm text-muted-foreground">Currently connected</p>
              </div>
              <Button variant="outline" data-testid="button-rotate-token">
                Rotate Token
              </Button>
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session</p>
                  <p className="text-sm text-muted-foreground">Logged in as developer@example.com</p>
                </div>
                <Button variant="destructive" data-testid="button-logout">
                  <LogOut className="h-4 w-4 mr-2" />
                  Disconnect
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-preferences">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">Theme</p>
              <p className="text-muted-foreground">System preference</p>
            </div>
            <div className="border-t pt-4">
              <p className="font-medium">Auto-refresh</p>
              <p className="text-sm text-muted-foreground">Automatically refresh dashboard data every 5 minutes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
