import React, { useState, useEffect } from "react";

const CustomTextArea = ({
  label = "Label",
  placeholder = "Enter text",
  name = "",
  value,
  onChange,
  rows = 4,
  className = "",
  maxWords = null, // <-- null means no limit
}) => {
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (value) {
      const words = value.trim().split(/\s+/).filter(Boolean);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
  }, [value]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/).filter(Boolean);

    if (!maxWords || words.length <= maxWords) {
      // if maxWords is not provided OR still within limit
      onChange(e);
    }
  };

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className="font-serif text-sm text-black capitalize mb-1"
      >
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={rows}
        className="w-full font-serif text-base py-2 px-2 rounded-md border border-gray-400 focus:outline-none"
      />
      <div className="text-right text-xs font-serif mt-1">
        {maxWords ? (
          <span
            className={wordCount >= maxWords ? "text-red-500" : "text-gray-500"}
          >
            {wordCount} / {maxWords} words
          </span>
        ) : (
          <span className="text-gray-500">{wordCount} words</span>
        )}
      </div>
    </div>
  );
};

export default CustomTextArea;
