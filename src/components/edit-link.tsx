/* eslint-disable react/no-unescaped-entities */
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
import { ShortLink, ShortLinks } from "@/interfaces/short-link";
import { BASE_URL } from "@/lib/constants";
import { Edit } from "lucide-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { getAllLinks, updateLink } from "@/lib/local-storage";

interface EditLinkProps {
  link: ShortLink;
  setLinks: Dispatch<SetStateAction<ShortLinks>>;
}

export const EditLink = ({ setLinks, link }: EditLinkProps) => {
  const targetRef = useRef<HTMLButtonElement>(null);
  const [url, setUrl] = useState(link.url);
  const [existingShortCode, setExistingShortCode] = useState(false);
  const [invalidUrl, setInvalidUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState(link.shortId);

  const closeDialog = () => {
    targetRef.current?.click();
  };

  const handleUpdate = () => {
    if (shortUrl === "") return;
    try {
      const validUrl = new URL(url);
      const exist = updateLink(link.shortId, shortUrl, validUrl.href);
      if (exist === true) {
        setExistingShortCode(true);
      } else {
        setLinks(getAllLinks());
        setExistingShortCode(false);
        closeDialog();
      }
    } catch (error) {
      setInvalidUrl(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger ref={targetRef} asChild>
        <button>
          <Edit className="h-4 w-4 cursor-pointer stroke-blue-300" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] lg:max-w-[60vw]">
        <DialogHeader>
          <DialogTitle>Edit Url</DialogTitle>
          <DialogDescription>
            Don't forget to put{" "}
            <code className="py-0.5 px-1 rounded-sm bg-muted">https://</code> or{" "}
            <code className="py-0.5 px-1 rounded-sm bg-muted">http://</code> in
            url!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="shortUrl" className="text-right">
              Short Url
            </Label>
            <Input
              id="shortUrl"
              value={shortUrl}
              onChange={(e) => {
                setShortUrl(e.target.value);
                if (existingShortCode) setExistingShortCode(false);
              }}
              placeholder={`${BASE_URL}/abcd`}
              className="col-span-3"
            />
            {existingShortCode && (
              <p className="text-red-400 italic -mt-1 col-start-2 text-xs row-start-2 col-span-2">
                This code is already in use!
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              id="rul"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (invalidUrl) setInvalidUrl(false);
              }}
              placeholder="https://github.com/hasiburdev/url-shortener"
              className="col-span-3"
            />{" "}
            {invalidUrl && (
              <p className="text-red-400 italic -mt-1 col-start-2 text-xs row-start-2 col-span-2">
                This url is not valid!
              </p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} disabled={shortUrl.length === 0}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
