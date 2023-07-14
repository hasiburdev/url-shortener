import { GenerateUrl } from "@/components/generate-url";
import { Navbar } from "@/components/navbar";
import { DataTableDemo } from "@/components/links";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto  flex flex-col items-center justify-center gap-12 p-6">
      <Navbar />
      <div className="flex flex-col p-6 gap-4 border border-slate-200 rounded-lg w-11/12 mx-auto">
        <GenerateUrl />
      </div>
      <div
        id="links"
        className="flex flex-col p-4 gap-4 border border-slate-200 rounded-lg w-11/12 mx-auto"
      >
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
          All Links
        </h1>
        <DataTableDemo />
      </div>
    </main>
  );
}
