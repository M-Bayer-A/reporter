export default function CustomButton({
  className,
  title,
  disabled = false,
  onClick,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-3.5 py-1.5 border rounded-[7px] transition duration-300 ease-in-out
      disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
      ${className} `}
    >
      {title}
    </button>
  );
}
// disabled:bg-zinc-500 disabled:text-white disabled:cursor-not-allowed
