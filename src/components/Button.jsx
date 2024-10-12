export default function Button({ text, icon: Icon }) {
  return (
    <button
      className={`flex items-center gap-3 rounded-md text-[17px] sm:text-lg px-5 py-[10px] transition-all duration-400 ${
        text === "See Example"
          ? "bg-gray-200 text-gray-700 mb-3 md:mb-0"
          : text === "Send/Schedule Notifications"
          ? "border border-gray-300 bg-gray-200 notifications"
          : "border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white"
      }`}
    >
      {Icon && <Icon className="text-2xl" />}
      <span>{text}</span>
    </button>
  );
}
