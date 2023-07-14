"use client";
import { Terminal, AlertCircle, CheckCircle, Keyboard } from "lucide-react";
import { GenerateInputFromUrl } from "./generate-input-from-url";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useState } from "react";

export const GenerateUrl = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  let description;
  let alertTitle;
  let icon;

  if (error) {
    description = "Looks like you entered an invalid URL.";
    alertTitle = "Oops!";
    icon = <AlertCircle className="h-4 w-4" />;
  } else if (!error && !link) {
    description = "Your generated link will appear here...";
    alertTitle = "Click to generate link";

    icon = <Keyboard className="h-4 w-4" />;
  } else {
    description = link;
    alertTitle = "Your generated link";
    icon = <CheckCircle className="h-4 w-4 stroke-success" />;
  }

  return (
    <>
      <GenerateInputFromUrl setLink={setLink} setError={setError} />
      <Alert variant={error ? "destructive" : link ? "success" : "default"}>
        {icon}
        <AlertTitle>{alertTitle}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </>
  );
};
