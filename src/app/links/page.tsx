import { Links } from "@/components/links";

export default function LinksPage() {
  return (
    <div
      id="links"
      className="flex flex-col p-4 gap-4 border border-slate-200 rounded-lg w-11/12 mx-auto max-h-screen"
    >
      <h1 className="scroll-m-20 border-b text-center pb-2 text-3xl font-semibold tracking-tight transition-colors">
        All Links
      </h1>
      <Links />
    </div>
  );
}
