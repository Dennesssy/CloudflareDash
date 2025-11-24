import { MetricCard } from "../MetricCard";
import { Activity, Globe, Shield, Zap } from "lucide-react";

export default function MetricCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Requests"
        value="1.2M"
        icon={Activity}
        trend="+12% from last week"
      />
      <MetricCard
        title="Domains"
        value="8"
        icon={Globe}
        description="Active domains"
      />
      <MetricCard
        title="Threats Blocked"
        value="3,421"
        icon={Shield}
        trend="+5% from yesterday"
      />
      <MetricCard
        title="Bandwidth Saved"
        value="42.3 GB"
        icon={Zap}
        trend="via caching"
      />
    </div>
  );
}
