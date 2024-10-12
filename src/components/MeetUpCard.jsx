import { MdAccessAlarm } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "./Button";
import MeetIcon from "./MeetIcon";

export default function MeetUpCard({ data }) {
  return (
    <div className="border border-gray-300 rounded-md p-3 sm:p-5">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-[22px] text-gray-700 mb-5">
          {data.title}
        </h2>
        <div className="flex gap-3 text-[23px] text-gray-600">
          <MeetIcon icon={IoEyeOutline} style="text-[29px] -mt-[2px]" />
          <MeetIcon icon={FaRegEdit} />
          <MeetIcon icon={RiDeleteBin6Line} style="text-red-500" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-[15px] text-gray-500 mb-4">
        <MdAccessAlarm className="text-lg" />
        <span>
          {data.date} | {data.time}
        </span>
      </div>
      <div className="flex items-center text-lg gap-2 mb-5">
        <MdManageAccounts className="text-2xl" />
        <span className="text-purple-600">{data.attending}+ attedning</span>
      </div>
      <Button text="Send/Schedule Notifications" />
    </div>
  );
}
