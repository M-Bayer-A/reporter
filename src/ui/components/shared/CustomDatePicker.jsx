import DatePicker from "react-datepicker";

export default function CustomDatePicker({ className, value, onChange }) {
  return (
    <DatePicker
      selected={value}
      onChange={(date) => onChange(date)}
      //   onSelect={(date) => onChange(date)}
      dateFormat="EEEE dd/MM/yyyy"
      className={`px-3 py-2 border border-zinc-200 rounded-md focus:outline-none focus:border-black
            [&::-webkit-inner-spin-button]:appearance-none ${className}`}
    />
  );
}
