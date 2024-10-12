import Button from "@/components/Button";
import PhotosList from "@/components/PhotosList";
import TopTitle from "@/components/TopTitle";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

export default function Photos() {
  return (
    <div className="px-2 md:px-3 lg:px-5 py-6">
      <main className="border border-gray-300 rounded-sm">
        <TopTitle text="Photos" />

        <div className="mb-5 p-3 md:p-4 lg:p-5">
          <p className="text-lg md:text-[20px] text-gray-500 mb-10">
          Add, view, and manage photos gathered from the app.
          </p>

          <div className="sm:pl-5 md:pl-10 flex flex-col sm:flex-row gap-5 mb-7">
            <Button text="Add Photo" icon={IoMdAdd} />
            <Button text="Download All Photos" icon={FiDownload} />
          </div>

          <div className="sm:pl-5 md:pl-10 flex flex-col sm:flex-row gap-5 text-lg">
            <button className="bg-purple-600 text-white px-4 py-[6px] rounded-full">All media types</button>
            <button className="border border-gray-300 px-4 py-[6px] rounded-full">Photos (43)</button>
            <button className="border border-gray-300 px-4 py-[6px] rounded-full text-gray-400">Videos (43)</button>
          </div>
        </div>

        <PhotosList />
      </main>
    </div>
  );
}
