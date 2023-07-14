"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateRandomString } from "@/lib/generate-random-string";
import { cn } from "@/lib/utils";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { BASE_URL } from "../lib/constants";

interface GenerateInputFromUrlProps {
  setLink: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export function GenerateInputFromUrl({
  setLink,
  setError,
}: GenerateInputFromUrlProps): JSX.Element {
  const [value, setValue] = useState("");

  const onClick = () => {
    try {
      const url = new URL(value);
      const shortString = generateRandomString();
      setLink(`${BASE_URL}/${shortString}`);
      setError(false);
      console.log(url);
    } catch (error) {
      console.error("Something went wrong");
      setError(true);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  if (value === "") {
    setError(false);
    setLink("");
  }

  return (
    <div className={cn("flex w-full max-w-full items-center space-x-2")}>
      <Input
        className={cn("flex-grow")}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Enter URL"
      />
      <Button onClick={onClick} className="">
        Generate
      </Button>
    </div>
  );
}
