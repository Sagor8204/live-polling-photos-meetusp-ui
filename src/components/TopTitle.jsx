export default function TopTitle({text}) {
  return (
    <div className="border border-gray-300 rounded-sm p-3 md:p-4 lg:p-5">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-700">{text}</h1>
    </div>
  );
}
