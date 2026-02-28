export default function CustomProgressBar({ className, value, max = 100 }) {
  return (
    <progress
      value={value}
      max={max}
      className={`h-4 appearance-none [&::-webkit-progress-bar]:bg-gray-300 
             [&::-webkit-progress-value]:bg-black 
             [&::-webkit-progress-bar]:rounded-xl
             [&::-webkit-progress-value]:rounded-xl
             ${className}`}
    />
  );
}
