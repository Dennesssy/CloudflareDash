import { useState } from "react";
import { DomainSelector } from "../DomainSelector";

const mockDomains = [
  { id: "1", name: "example.com" },
  { id: "2", name: "mywebsite.org" },
  { id: "3", name: "testdomain.net" },
  { id: "4", name: "another-site.io" },
];

export default function DomainSelectorExample() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-8">
      <DomainSelector
        domains={mockDomains}
        selectedDomain={selected}
        onSelect={(id) => {
          setSelected(id);
          console.log("Selected domain:", id);
        }}
      />
    </div>
  );
}
