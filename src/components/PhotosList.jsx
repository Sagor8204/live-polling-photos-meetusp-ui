import { photosDatas } from "@/common/data";
import PhotoCard from "./PhotoCard";

export default function PhotosList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
      {photosDatas.map((data, index) => (
        <PhotoCard key={index} data={data} />
      ))}
    </div>
  );
}
