const CustomInput = ({
  label = "Label",
  placeholder = "Enter text",
  type = "text",
  name = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label htmlFor={name} className="font-serif text-sm text-black capitalize">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full font-serif text-base py-2 px-2 border border-gray-400 rounded-md"
      />
    </div>
  );
};

export default CustomInput;
