"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShortLinks } from "@/interfaces/short-link";

import { getAllLinks } from "@/lib/local-storage";
import { useEffect, useState } from "react";
import { DeleteLink } from "./delete-link";
import { EditLink } from "./edit-link";

export const Links = () => {
  const [links, setLinks] = useState<ShortLinks>({});
  useEffect(() => {
    setLinks(getAllLinks());
  }, []);
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_5fr_1fr_1fr] w-full">
        <div className="">Sl. No</div>
        <div>Short Code</div>
        <div>Url</div>
        <div className="">Visits</div>
        <div className="">Actions</div>
      </div>
      <div className="divide-y-2 divide-muted overflow-auto">
        {Object.values(links)
          .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
          .map((link, index) => (
            <div
              key={link.shortId}
              className="grid grid-cols-[1fr_2fr_5fr_1fr_1fr] w-full p-3"
            >
              <div>{index + 1}</div>
              <div className="font-medium">{link.shortId}</div>
              <div className="truncate pr-4">
                <a
                  className="underline text-slate-500 pr-3"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.url}
                </a>
              </div>
              <div className="text-center">{link.visits}</div>
              <div className="text-right flex items-center justify-end gap-2">
                <EditLink link={link} setLinks={setLinks} />
                <DeleteLink setLinks={setLinks} shortId={link.shortId} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
