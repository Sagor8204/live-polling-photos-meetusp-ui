export default function MeetIcon({ icon: Icon, style }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-all duration-300">
      {Icon && <Icon className={style} />}
    </button>
  );
}
