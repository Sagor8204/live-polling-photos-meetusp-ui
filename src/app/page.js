import Button from "@/components/Button";
import Table from "@/components/Table";
import TopTitle from "@/components/TopTitle";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-2 md:px-3 lg:px-5 py-6">
      <main className="border border-gray-300 rounded-sm">
        <TopTitle text="Live Polling" />

        <div className="mb-5 p-3 md:p-4 lg:p-5">
          <p className="text-[20px] text-gray-500 mb-10">
            Capture your audience's attention, collect instant feedback and get
            a quick headcount to make informed decisions. Effortlessly collect
            votes from everyone through the Orbit app or with one click from an
            email. <Link href="/" className="text-purple-500 border-b border-purple-500">Learn more</Link>
          </p>

          <div className="sm:pl-3 lg:pl-10 flex flex-col md:flex-row justify-between">
            <Button text="See Example" />
            <div className="flex flex-col md:flex-row md:items-center gap-3 lg:gap-5">
              <Button text="Settings" icon={IoSettingsOutline} />
              <Button text="Download Result" icon={FiDownload} />
              <Button text="Create A Poll" icon={IoMdAdd} />
            </div>
          </div>
        </div>

        <div className="px-2 md:px-3 lg:p-5">
          <h3 className="text-gray-700 text-2xl mb-3">Speaker live polls</h3>

          <div className="overflow-x-scroll lg:overflow-x-hidden">
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}
