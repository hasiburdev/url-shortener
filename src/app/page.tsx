import { GenerateInputFromUrl } from "@/components/generate-input-from-url";
import { GenerateUrl } from "@/components/generate-url";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col p-6 gap-4 border border-slate-200 rounded-lg">
        <GenerateUrl />
      </div>
    </main>
  );
}
