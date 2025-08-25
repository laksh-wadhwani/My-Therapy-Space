import { Search } from "lucide-react";

const CustomSearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  icon = <Search className="w-4 h-4 text-gray-500" />,
}) => {
  return (
    <div className="relative">
      <span className="absolute left-3 top-3">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 max-sm:pl-8 pr-4 max-sm:pr-0 py-2 border border-gray-200 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   text-md max-sm:text-sm font-serif"
      />
    </div>
  );
};

export default CustomSearchBar;
