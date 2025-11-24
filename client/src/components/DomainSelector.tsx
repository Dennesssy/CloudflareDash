import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface Domain {
  id: string;
  name: string;
}

interface DomainSelectorProps {
  domains: Domain[];
  selectedDomain: string | null;
  onSelect: (domainId: string) => void;
}

export function DomainSelector({
  domains,
  selectedDomain,
  onSelect,
}: DomainSelectorProps) {
  const [open, setOpen] = useState(false);

  const selected = domains.find((d) => d.id === selectedDomain);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[280px] justify-between"
          data-testid="button-domain-selector"
        >
          {selected ? selected.name : "Select domain..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandInput placeholder="Search domains..." data-testid="input-search-domains" />
          <CommandList>
            <CommandEmpty>No domain found.</CommandEmpty>
            <CommandGroup>
              {domains.map((domain) => (
                <CommandItem
                  key={domain.id}
                  value={domain.name}
                  onSelect={() => {
                    onSelect(domain.id);
                    setOpen(false);
                  }}
                  data-testid={`item-domain-${domain.id}`}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedDomain === domain.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {domain.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
