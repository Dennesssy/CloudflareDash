import { useState } from "react";
import { DomainSelector } from "@/components/DomainSelector";
import { DNSRecordTable, DNSRecord } from "@/components/DNSRecordTable";
import { AddDNSRecordDialog } from "@/components/AddDNSRecordDialog";

//todo: remove mock functionality
const mockDomains = [
  { id: "1", name: "example.com" },
  { id: "2", name: "mywebsite.org" },
  { id: "3", name: "testdomain.net" },
  { id: "4", name: "another-site.io" },
];

const mockRecords: Record<string, DNSRecord[]> = {
  "1": [
    {
      id: "1-1",
      type: "A",
      name: "example.com",
      content: "192.0.2.1",
      ttl: 3600,
      proxied: true,
    },
    {
      id: "1-2",
      type: "CNAME",
      name: "www.example.com",
      content: "example.com",
      ttl: 3600,
      proxied: true,
    },
    {
      id: "1-3",
      type: "MX",
      name: "example.com",
      content: "mail.example.com",
      ttl: 7200,
      proxied: false,
    },
    {
      id: "1-4",
      type: "TXT",
      name: "example.com",
      content: "v=spf1 include:_spf.example.com ~all",
      ttl: 3600,
      proxied: false,
    },
  ],
  "2": [
    {
      id: "2-1",
      type: "A",
      name: "mywebsite.org",
      content: "198.51.100.1",
      ttl: 3600,
      proxied: true,
    },
    {
      id: "2-2",
      type: "AAAA",
      name: "mywebsite.org",
      content: "2001:db8::1",
      ttl: 3600,
      proxied: true,
    },
  ],
};

export default function DNSManagement() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>("1");

  const records = selectedDomain ? mockRecords[selectedDomain] || [] : [];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">DNS Records</h1>
        <p className="text-muted-foreground mt-1">
          Manage DNS records for your domains
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <DomainSelector
          domains={mockDomains}
          selectedDomain={selectedDomain}
          onSelect={setSelectedDomain}
        />
        <AddDNSRecordDialog />
      </div>

      {selectedDomain ? (
        <DNSRecordTable records={records} />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          Select a domain to view its DNS records
        </div>
      )}
    </div>
  );
}
