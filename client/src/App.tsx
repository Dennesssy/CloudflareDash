import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Dashboard from "@/pages/Dashboard";
import DNSManagement from "@/pages/DNSManagement";
import Analytics from "@/pages/Analytics";
import Workers from "@/pages/Workers";
import Pages from "@/pages/Pages";
import KV from "@/pages/KV";
import D1 from "@/pages/D1";
import DurableObjects from "@/pages/DurableObjects";
import Deployments from "@/pages/Deployments";
import EnvironmentVariables from "@/pages/EnvironmentVariables";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/dns" component={DNSManagement} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/workers" component={Workers} />
      <Route path="/pages" component={Pages} />
      <Route path="/kv" component={KV} />
      <Route path="/d1" component={D1} />
      <Route path="/durable-objects" component={DurableObjects} />
      <Route path="/deployments" component={Deployments} />
      <Route path="/env-vars" component={EnvironmentVariables} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex items-center justify-between p-4 border-b">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto">
                  <Router />
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
