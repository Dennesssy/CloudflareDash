import { DNSRecordTable, DNSRecord } from "../DNSRecordTable";

const mockRecords: DNSRecord[] = [
  {
    id: "1",
    type: "A",
    name: "example.com",
    content: "192.0.2.1",
    ttl: 3600,
    proxied: true,
  },
  {
    id: "2",
    type: "CNAME",
    name: "www.example.com",
    content: "example.com",
    ttl: 3600,
    proxied: true,
  },
  {
    id: "3",
    type: "MX",
    name: "example.com",
    content: "mail.example.com",
    ttl: 7200,
    proxied: false,
  },
  {
    id: "4",
    type: "TXT",
    name: "example.com",
    content: "v=spf1 include:_spf.example.com ~all",
    ttl: 3600,
    proxied: false,
  },
];

export default function DNSRecordTableExample() {
  return (
    <div className="p-8">
      <DNSRecordTable records={mockRecords} />
    </div>
  );
}
