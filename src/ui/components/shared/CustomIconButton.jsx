export default function CustomIconButton({
  className,
  icon,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md p-2
                 hover:bg-zinc-100 transition ${className}`}
    >
      <img src={icon} alt={"img"} className="object-contain" />
    </button>
  );
}
