"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/lib/constants";
import { addLink } from "@/lib/local-storage";
import { cn } from "@/lib/utils";
import { Dispatch, KeyboardEvent, SetStateAction, useRef } from "react";

interface GenerateInputFromUrlProps {
  setLink: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export function GenerateInputFromUrl({
  setLink,
  setError,
}: GenerateInputFromUrlProps): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const onClick = () => {
    try {
      const url = new URL(ref.current?.value || "");
      const generatedLink = addLink(url.href);
      setLink(`${BASE_URL}/${generatedLink?.shortId}`);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  if (ref.current?.value === "") {
    setError(false);
    setLink("");
  }

  return (
    <div className={cn("flex w-full max-w-full items-center space-x-2")}>
      <Input
        ref={ref}
        className={cn("flex-grow")}
        type="text"
        onKeyDown={onKeyDown}
        placeholder="Enter URL"
      />
      <Button onClick={onClick} className="">
        Generate
      </Button>
    </div>
  );
}
