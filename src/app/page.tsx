import { GenerateUrl } from "@/components/generate-url";
import { Navbar } from "@/components/navbar";
// import { DataTableDemo } from "@/components/links";

export default function Home() {
  return (
    <div className="flex flex-col p-6 gap-4 border border-slate-200 rounded-lg w-11/12 mx-auto">
      <GenerateUrl />
    </div>
  );
}
