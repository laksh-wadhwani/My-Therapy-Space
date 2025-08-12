import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const CustomInput = ({
  label = "Label",
  placeholder = "Enter text",
  type = "text",
  name = "",
  value,
  onChange,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="font-serif text-sm text-black capitalize"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={isPasswordField && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full font-serif text-base py-2 px-2 border border-gray-400 rounded-md pr-10"
        />
        {isPasswordField && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
