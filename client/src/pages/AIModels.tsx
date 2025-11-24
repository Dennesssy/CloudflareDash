import { Plus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

//todo: remove mock functionality
const mockModels = [
  {
    id: "1",
    name: "Llama 2 7B",
    provider: "Meta",
    type: "text-generation",
    inputTokens: "2M/month",
    outputTokens: "1.5M/month",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Mistral 7B",
    provider: "Mistral AI",
    type: "text-generation",
    inputTokens: "5.2M/month",
    outputTokens: "3.8M/month",
    status: "active" as const,
  },
  {
    id: "3",
    name: "CLIP ViT-B/32",
    provider: "OpenAI",
    type: "image-embedding",
    inputTokens: "145K/month",
    outputTokens: "145K/month",
    status: "active" as const,
  },
  {
    id: "4",
    name: "Whisper Base",
    provider: "OpenAI",
    type: "speech-to-text",
    inputTokens: "32.5M/month",
    outputTokens: "N/A",
    status: "active" as const,
  },
];

const modelTypes = {
  "text-generation": "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  "image-embedding": "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300",
  "speech-to-text": "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300",
};

export default function AIModels() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">AI Models</h1>
          <p className="text-muted-foreground mt-1">Browse and run available AI models</p>
        </div>
        <Button data-testid="button-deploy-model">
          <Plus className="h-4 w-4 mr-2" />
          Deploy Custom Model
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead className="w-[140px]">Type</TableHead>
                  <TableHead className="w-[120px]">Input Tokens</TableHead>
                  <TableHead className="w-[120px]">Output Tokens</TableHead>
                  <TableHead className="w-[80px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockModels.map((model) => (
                  <TableRow key={model.id} data-testid={`row-model-${model.id}`}>
                    <TableCell className="font-semibold" data-testid="text-model-name">
                      {model.name}
                    </TableCell>
                    <TableCell className="text-sm" data-testid="text-provider">
                      {model.provider}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={modelTypes[model.type as keyof typeof modelTypes]}
                        variant="secondary"
                      >
                        {model.type.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm" data-testid="text-input-tokens">
                      {model.inputTokens}
                    </TableCell>
                    <TableCell className="text-sm" data-testid="text-output-tokens">
                      {model.outputTokens}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="flex items-center gap-1 w-fit">
                        <Zap className="h-3 w-3" />
                        {model.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
