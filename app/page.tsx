import Image from "next/image";
import Balance from "./balance/page";

export default function Home() {
  return (
    <div className="py-3 px-7">
      <h1 className="font-medium text-2xl">Dashboard</h1>
      <div className="text-zinc-500">Here is the summary of overall data</div>

      <div className="grid grid-cols-4 gap-5 mb-5">
        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>

        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>

        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>

        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>

        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>

        <div className="flex items-center bg-white p-3 rounded-md">
          <div>October spends</div>
        </div>
      </div>
    </div>
  );
}
