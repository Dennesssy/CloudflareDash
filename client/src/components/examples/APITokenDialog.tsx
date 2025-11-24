import { useState } from "react";
import { APITokenDialog } from "../APITokenDialog";
import { Button } from "@/components/ui/button";

export default function APITokenDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open API Token Dialog</Button>
      <APITokenDialog
        open={open}
        onOpenChange={setOpen}
        onConnect={(token) => {
          console.log("Connected with token:", token);
          setOpen(false);
        }}
      />
    </div>
  );
}
