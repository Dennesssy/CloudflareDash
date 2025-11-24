import { DomainCard } from "../DomainCard";

export default function DomainCardExample() {
  return (
    <div className="p-8 space-y-4">
      <DomainCard
        domain="example.com"
        status="active"
        dnsRecords={12}
        lastSync="2 mins ago"
        proxyStatus={true}
      />
      <DomainCard
        domain="mywebsite.org"
        status="paused"
        dnsRecords={8}
        lastSync="1 hour ago"
        proxyStatus={false}
      />
    </div>
  );
}
