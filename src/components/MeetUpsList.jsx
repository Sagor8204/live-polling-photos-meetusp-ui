import { meetUpdatas } from "@/common/data";
import MeetUpCard from "./MeetUpCard";

export default function MeetUpsList() {
  return (
    <div className="px-2 md:px-3 lg:p-5 grid gird-cols-1 md:grid-cols-2 gap-5">
      {meetUpdatas.map((data, index) => (
        <MeetUpCard key={index} data={data} />
      ))}
    </div>
  );
}
