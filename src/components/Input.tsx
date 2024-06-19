import { useState } from "react";

interface InputProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  className,
  type = "text",
  value = "",
  placeholder,
  label = "",
  onChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`flex-1 relative border-2 rounded-xl focus-within:border-blue-400 ${className}`}
    >
      {label && <label className="">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="relative w-full px-4 py-3 rounded-xl border-none outline-none z-0 bg-transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </div>
  );
}
