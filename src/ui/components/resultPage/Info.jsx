export default function Info({ className, label, value }) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      <li className="w-[75%]">{label}</li>
      <span className="w-[25%]">{value}</span>
    </div>
  );
}
