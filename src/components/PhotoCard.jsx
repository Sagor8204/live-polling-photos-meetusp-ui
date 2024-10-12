import Image from "next/image";
import { IoMdAlarm } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";

export default function PhotoCard({ data }) {
  return (
    <div className="mx-auto sm:mx-0 border w-fit border-gray-200 shadow-sm rounded-lg">
      <Image
        src={data.imageUrl}
        width={400}
        height={400}
        alt="photo"
        className="rounded-t-lg"
      />
      <div className="py-2 px-3">
        <div className="flex items-center text-sm gap-2 text-gray-500">
          <IoMdAlarm className="text-lg" />
          <span>
            {data.date} | {data.time}
          </span>
        </div>
        <h3 className="flex gap-2 items-center text-[17px] text-purple-600 py-1"><MdManageAccounts className="text-xl" /> {data.name}</h3>
        <div>
          <button className="flex items-center gap-1 text-xl">
            <AiOutlineLike />
            <span>{data.likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
