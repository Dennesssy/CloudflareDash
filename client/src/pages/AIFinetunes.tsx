import { Plus, Download, Trash2, Play, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const mockFinetunes = [
  {
    id: "1",
    name: "legal-documents-assistant",
    baseModel: "Llama 2 7B",
    trainingExamples: 2500,
    status: "completed" as const,
    accuracy: "94.5%",
    created: "2 weeks ago",
    size: "8.2 GB",
  },
  {
    id: "2",
    name: "customer-support-v2",
    baseModel: "Mistral 7B",
    trainingExamples: 5000,
    status: "completed" as const,
    accuracy: "92.1%",
    created: "1 week ago",
    size: "7.5 GB",
  },
  {
    id: "3",
    name: "medical-qa-model",
    baseModel: "Llama 2 7B",
    trainingExamples: 1850,
    status: "training" as const,
    accuracy: "—",
    created: "2 hours ago",
    size: "—",
  },
  {
    id: "4",
    name: "product-classifier",
    baseModel: "Mistral 7B",
    trainingExamples: 3200,
    status: "pending" as const,
    accuracy: "—",
    created: "30 mins ago",
    size: "—",
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-green-600" },
  training: { icon: Clock, color: "text-yellow-600" },
  pending: { icon: Clock, color: "text-blue-600" },
};

export default function AIFinetunes() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">AI Finetunes</h1>
          <p className="text-muted-foreground mt-1">Create and manage fine-tuned AI models</p>
        </div>
        <Button data-testid="button-create-finetune">
          <Plus className="h-4 w-4 mr-2" />
          Create Finetune
        </Button>
      </div>

      <div className="space-y-3">
        {mockFinetunes.map((finetune) => {
          const config = statusConfig[finetune.status as keyof typeof statusConfig];
          const StatusIcon = config?.icon || Clock;
          return (
            <Card key={finetune.id} className="hover-elevate" data-testid={`card-finetune-${finetune.id}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold" data-testid="text-finetune-name">
                        {finetune.name}
                      </h3>
                      <Badge
                        variant={
                          finetune.status === "completed"
                            ? "default"
                            : finetune.status === "training"
                              ? "secondary"
                              : "outline"
                        }
                        className="flex items-center gap-1"
                      >
                        <StatusIcon className={`h-3 w-3 ${config?.color || "text-muted-foreground"}`} />
                        {finetune.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span data-testid="text-base-model">Base: {finetune.baseModel}</span>
                        <span data-testid="text-training-examples">
                          {finetune.trainingExamples.toLocaleString()} examples
                        </span>
                        {finetune.status === "completed" && (
                          <span data-testid="text-accuracy">Accuracy: {finetune.accuracy}</span>
                        )}
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span data-testid="text-created">Created {finetune.created}</span>
                        {finetune.size !== "—" && <span data-testid="text-size">{finetune.size}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {finetune.status === "completed" && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          data-testid={`button-deploy-${finetune.id}`}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          data-testid={`button-download-${finetune.id}`}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {finetune.status === "pending" && (
                      <Button
                        variant="ghost"
                        size="icon"
                        data-testid={`button-start-${finetune.id}`}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      data-testid={`button-delete-${finetune.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
