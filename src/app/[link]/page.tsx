import { RedirectLink } from "@/components/redirect-link";
// import dynamic from "next/dynamic";
// const RedirectLink = dynamic(() => import("@/components/redirect-link"), {
//   ssr: false,
// });

interface PageProps {
  params: {
    link: string;
  };
}
export default function Page({ params }: PageProps): JSX.Element {
  return <RedirectLink params={params} />;
}
