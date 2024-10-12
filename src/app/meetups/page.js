import Button from "@/components/Button";
import MeetUpsList from "@/components/MeetUpsList";
import TopTitle from "@/components/TopTitle";
import { IoMdAdd } from "react-icons/io";

export default function Meetups() {
  return (
    <div className="px-2 md:px-3 lg:px-5 py-6">
      <main className="border border-gray-300 rounded-sm">
        <TopTitle text="Meet-ups" />

        <div className="mb-5 p-3 md:p-4 lg:p-5">
          <p className="text-[20px] text-gray-500 mb-10">
            You can rehearse a live session with your colleagues or speakers
            before the event starts. Rehearsal sessions do not interfere with
            your main agenda and are invisible to normal attendees.
          </p>

          <div className="sm:pl-3 lg:pl-10">
            <Button text="Create Meet-Up" icon={IoMdAdd} />
          </div>
        </div>

        <MeetUpsList />
      </main>
    </div>
  );
}
