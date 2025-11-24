import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AccessSettings() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Access Settings</h1>
        <p className="text-muted-foreground mt-1">Configure global Zero Trust Access settings</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <Card data-testid="card-session">
          <CardHeader>
            <CardTitle>Session Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="session-duration" data-testid="label-session-duration">
                Session Duration
              </Label>
              <Select defaultValue="12h">
                <SelectTrigger id="session-duration" data-testid="select-session-duration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 hour</SelectItem>
                  <SelectItem value="4h">4 hours</SelectItem>
                  <SelectItem value="8h">8 hours</SelectItem>
                  <SelectItem value="12h">12 hours</SelectItem>
                  <SelectItem value="24h">24 hours</SelectItem>
                  <SelectItem value="7d">7 days</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">How long before users need to re-authenticate</p>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-authentication">
          <CardHeader>
            <CardTitle>Authentication Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="require-mfa" className="cursor-pointer" data-testid="label-require-mfa">
                Require MFA for all users
              </Label>
              <Switch id="require-mfa" data-testid="switch-require-mfa" />
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="remember-devices" className="cursor-pointer" data-testid="label-remember-devices">
                  Remember trusted devices
                </Label>
                <Switch id="remember-devices" defaultChecked data-testid="switch-remember-devices" />
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="block-unsupported" className="cursor-pointer" data-testid="label-block-unsupported">
                  Block unsupported devices
                </Label>
                <Switch id="block-unsupported" data-testid="switch-block-unsupported" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-email">
          <CardHeader>
            <CardTitle>Email Notification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notification-email" data-testid="label-notification-email">
                Notification Email
              </Label>
              <Input
                id="notification-email"
                type="email"
                placeholder="security@example.com"
                data-testid="input-notification-email"
              />
              <p className="text-xs text-muted-foreground">Receive notifications for suspicious activities</p>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-logging">
          <CardHeader>
            <CardTitle>Logging & Audit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="audit-logging" className="cursor-pointer" data-testid="label-audit-logging">
                Enable audit logging
              </Label>
              <Switch id="audit-logging" defaultChecked data-testid="switch-audit-logging" />
            </div>
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="log-retention" className="cursor-pointer" data-testid="label-log-retention">
                  Log retention policy
                </Label>
                <Select defaultValue="90d">
                  <SelectTrigger className="w-[150px]" data-testid="select-log-retention">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30d">30 days</SelectItem>
                    <SelectItem value="60d">60 days</SelectItem>
                    <SelectItem value="90d">90 days</SelectItem>
                    <SelectItem value="6m">6 months</SelectItem>
                    <SelectItem value="1y">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button data-testid="button-save">Save Changes</Button>
          <Button variant="outline" data-testid="button-cancel">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
