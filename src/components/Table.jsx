import Link from "next/link";
import { FaArrowsToDot } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { columns, tableDatas } from "@/common/data";

export default function Table() {
  return (
    <table className="ticket_table min-w-[1024px] w-full text-left border border-gray-300">
      <thead>
        <tr>
          {columns.map((col) => (
            <th className="text-gray-600" key={col.header}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-lg">
        {tableDatas.map((data, index) => (
          <tr key={index}>
            <td>
              <div className="flex items-center gap-3">
                <FaArrowsToDot className="text-2xl lg:text-3xl text-gray-700" />
                <div>
                  <h3 className="text-base lg:text-lg text-purple-500">
                    {data.poll_question}
                  </h3>
                  <span className="text-gray-500 text-sm lg:text-base">
                    {data.poll_que_sub_titile}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <span className="text-gray-700 text-base lg:text-lg">{data.start_time}</span>
            </td>
            <td>
              <div className="flex w-fit border border-green-500 items-center rounded-full py-[5px] px-3 text-green-500 bg-green-50 uppercase gap-1 text-sm lg:text-base">
                {" "}
                <GoDotFill className="text-xl" /> {data.status}
              </div>
            </td>
            <td>
              <p className="text-gray-700 text-base lg:text-lg">{data.associated_session}</p>
            </td>
            <td>
              <div className="flex items-center justify-between">
                <Link className="text-purple-500 text-base" href="/">
                  View Result
                </Link>

                <button className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300">
                  <BsThreeDotsVertical />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
