"use client";
import { Button } from "@/components/ui/button";
import { getAllLinks } from "@/lib/local-storage";
import Link from "next/link";

interface PageProps {
  params: {
    link: string;
  };
}
export default function Page({ params }: PageProps): JSX.Element {
  const links = getAllLinks();
  if (params.link in links) {
    window.location.href = links[params.link].url;
  } else {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-semibold">404 Url Not Found!</h1>
          <p className="mb-6">The requested url was not found!</p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-semibold">Redirecting...</h1>
        <p className="mb-6">
          Redirecting to{" "}
          <a
            href={links[params.link]?.url}
            className="text-blue-500 hover:underline"
          >
            {links[params.link]?.url}
          </a>
        </p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
