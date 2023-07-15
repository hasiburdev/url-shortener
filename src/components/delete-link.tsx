"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShortLinks } from "@/interfaces/short-link";
import { getAllLinks, removeLink } from "@/lib/local-storage";
import { Trash } from "lucide-react";
import { Dispatch, SetStateAction, use, useRef, useState } from "react";

interface DeleteLinkProps {
  shortId: string;
  setLinks: Dispatch<SetStateAction<ShortLinks>>;
}

export const DeleteLink = ({ shortId, setLinks }: DeleteLinkProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeDialog = () => {
    triggerRef.current?.click();
  };
  const handleDelete = () => {
    removeLink(shortId);
    closeDialog();
    setLinks(getAllLinks());
  };
  return (
    <Dialog>
      <DialogTrigger ref={triggerRef} asChild>
        <button>
          <Trash className="h-4 w-4 cursor-pointer stroke-red-500" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this link?</DialogTitle>
          <DialogDescription>This action can not be undone!</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button size="sm" variant="outline" onClick={closeDialog}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
