"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

interface CopyLinkProps {
  isCopied: boolean;
}
export const CopyLink = ({ isCopied }: CopyLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-2">
          {isCopied && <span className="text-xs italic">Copied!</span>}
          {isCopied ? (
            <ClipboardCheck className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCopied ? "Copied" : "Copy"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
