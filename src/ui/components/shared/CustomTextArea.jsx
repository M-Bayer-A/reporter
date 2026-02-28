export default function CustomTextArea({
  className,
  onChange,
  value,
  placeholder,
}) {
  return (
    <textarea
      //   dir="rtl"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 border border-zinc-200 rounded-md focus:outline-none focus:border-black resize-none
        [&::-webkit-scrollbar]:hidden ${className}`}
    />
  );
}
