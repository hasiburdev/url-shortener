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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sl. No</TableHead>
          <TableHead>Short Code</TableHead>
          <TableHead>Url</TableHead>
          <TableHead className="">Visits</TableHead>
          <TableHead className="">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(links).map((link, index) => (
          <TableRow key={link.shortId}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{link.shortId}</TableCell>
            <TableCell className="overflow-ellipsis">
              <a
                className="underline text-slate-500"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.url}
              </a>
            </TableCell>
            <TableCell>{link.visits}</TableCell>
            <TableCell className="text-right flex gap-2">
              <EditLink />
              <DeleteLink />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
