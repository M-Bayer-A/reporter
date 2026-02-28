import Select from "react-select";

export default function CustomSelect({
  className,
  options = [],
  value,
  onChange,
  placeholder,
}) {
  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value) || null}
      onChange={(option) => onChange(option?.value)}
      placeholder={placeholder}
      unstyled
      className={className}
      classNames={{
        control: ({ isFocused }) =>
          `px-3 py-2 border rounded-md bg-white transition
       ${isFocused ? "border-black" : "border-zinc-200"}`,
        menu: () => "mt-1 border border-zinc-200 rounded-md bg-white shadow-md",
        placeholder: () => "text-zinc-500",
        option: ({ isFocused, isSelected }) =>
          `px-3 py-2 cursor-pointer ${
            isSelected ? "bg-black text-white" : isFocused ? "bg-zinc-100" : ""
          }`,
      }}
    />
  );
}
