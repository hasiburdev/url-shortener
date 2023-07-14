import { InputWithButton } from "@/components/input-with-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col p-6 gap-4 border border-slate-200 rounded-lg">
        <InputWithButton
          placeholder="Enter an URL to shorten"
          text="Generate"
          className="max-w-full"
        />
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
}
