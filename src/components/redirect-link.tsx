"use client";
import { getAllLinks, updateVisitCount } from "@/lib/local-storage";
import { Link } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const RedirectLink = ({ params }: { params: { link: string } }) => {
  const [paramLink, setParamLink] = useState("");
  const links = getAllLinks();

  const ref = useRef(false);

  useEffect(() => {
    if (ref.current === false) {
      ref.current = true;
      if (params.link in links) {
        updateVisitCount(params.link);
        window.location.href = links[params.link].url;
      }
    }
    setParamLink(params.link);
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-semibold">Redirecting...</h1>
        <p className="mb-6">
          Redirecting to{" "}
          <a
            href={links[paramLink]?.url ?? ""}
            className="text-blue-500 hover:underline"
          >
            {links[paramLink]?.url ?? ""}
          </a>
        </p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};
