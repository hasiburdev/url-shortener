"use client";
import { AlertCircle, CheckCircle, Keyboard } from "lucide-react";
import { useState } from "react";
import { CopyLink } from "./copy-link";
import { GenerateInputFromUrl } from "./generate-input-from-url";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const GenerateUrl = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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

  const handleChange = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  return (
    <>
      <GenerateInputFromUrl setLink={setLink} setError={setError} />
      <Alert variant={error ? "destructive" : link ? "success" : "default"}>
        {icon}
        <AlertTitle>{alertTitle}</AlertTitle>
        <AlertDescription className="flex justify-between items-center">
          <span>{description}</span>
          <span onClick={handleChange} className="cursor-pointer">
            {!error && link && <CopyLink isCopied={isCopied} />}
          </span>
        </AlertDescription>
      </Alert>
    </>
  );
};
