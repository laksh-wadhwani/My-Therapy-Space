import React, { useState } from "react";
import { X } from "lucide-react";

const CustomFileUpload = ({
  label,         
  multiple = false,
  name,
  value,
  onChange,
}) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newPreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    if (multiple) {
      const updated = [...previews, ...newPreviews];
      setPreviews(updated);
      onChange && onChange(updated.map((p) => p.file));
    } else {
      setPreviews(newPreviews);
      onChange && onChange(files[0]); 
    }
  };

  const handleRemove = (index) => {
    const updated = previews.filter((_, i) => i !== index);
    setPreviews(updated);

    if (multiple) {
      onChange && onChange(updated.map((p) => p.file));
    } else {
      onChange && onChange(null);
    }
  };

  return (
    <div className="w-full">
      {label && (<label className="block mb-1 font-medium text-gray-700">{label}</label>)}

      <input
        type="file"
        multiple={multiple}
        accept="image/*"
        onChange={handleFileChange}
        className="mb-3 block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-serif
          file:bg-[#0BAFA6]/50 file:text-black
          hover:file:bg-[#0BAFA6]
        "
      />

      {previews.length > 0 && (
        <div className={multiple? "grid grid-cols-3 gap-3" : "flex flex-col items-start space-y-2"}>

          {previews.map((p, index) => (
            <div key={index} className="relative group w-full max-w-[120px]">

              <img src={p.url} alt="preview" className="w-full h-24 object-cover rounded-md border"/>
              <button type="button" onClick={() => handleRemove(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition">
                <X size={14} />
              </button>
              
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default CustomFileUpload;
