import React, { useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function CustomEditor({ value, onChange }) {
  const [editorValue, setEditorValue] = useState(value || "");
  const [color, setColor] = useState("#000000");
  const editorRef = useRef(null);

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);

    const textarea = editorRef.current?.textarea;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = editorValue.substring(start, end);

      if (selectedText) {
        const newText =
          editorValue.substring(0, start) +
          `<span style="color:${selectedColor}">${selectedText}</span>` +
          editorValue.substring(end);

        setEditorValue(newText);
        if (onChange) onChange(newText);
      }
    }
  };

  return (
    <div className="w-full space-y-2" data-color-mode="light">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Font Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>

      <MDEditor
        ref={editorRef}
        value={editorValue}
        onChange={(val) => {
          setEditorValue(val || "");
          if (onChange) onChange(val || "");
        }}
        height={300}
      />
    </div>
  );
}
