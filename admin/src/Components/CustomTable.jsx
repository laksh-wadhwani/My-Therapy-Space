import { useMemo, useState } from "react";
import { Search, ArrowUp, ArrowDown, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;

    return date.toLocaleDateString("en-US", {
        month: "short", 
        day: "numeric", 
        year: "numeric"
    });
};


const defaultStatusStyles = {
  Active: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const CustomTable = ({
  title = "Data Table",
  columns = [],
  data = [],
  showActions = true,
  rowsPerPage = 5,
  statusStyles = defaultStatusStyles,
  onView, onEdit, onDelete
}) => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(columns[0]?.key || "");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortField(field);
    setSortOrder(isAsc ? "desc" : "asc");
  };

  const filteredData = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return data
      .filter((item) =>
        columns.some((col) =>
          String(item[col.key]).toLowerCase().includes(lowerSearch)
        )
      )
      .sort((a, b) => {
        if (sortField === "date") {
          return sortOrder === "asc"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        } else {
          return sortOrder === "asc"
            ? String(a[sortField]).localeCompare(String(b[sortField]))
            : String(b[sortField]).localeCompare(String(a[sortField]));
        }
      });
  }, [search, data, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="border border-gray-200 rounded-md shadow-md w-full overflow-auto">
      <div className="flex justify-between items-center px-6 max-sm:px-3 py-4 border-b border-gray-200">
        <span className="font-serif text-xl max-sm:text-base font-semibold text-black italic">{title}</span>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 max-sm:pl-8 pr-4 max-sm:pr-0 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-md max-sm:text-sm font-serif"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="cursor-pointer px-6 max-sm:px-3 py-3 text-left text-base max-sm:text-sm font-semibold text-[#374151] font-serif italic"
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {sortField === col.key &&
                      (sortOrder === "asc" ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      ))}
                  </div>
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#374151] font-serif italic">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 font-serif">
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 max-sm:px-3 py-4 max-sm:py-2 text-sm max-sm:text-  text-gray-700">
                      {col.key === "status" ? (
                        <span
                          className={`text-sm max-sm:text-xs font-medium px-3 max-sm:px-2 py-1 rounded-full ${statusStyles[row[col.key]] || "bg-gray-200 text-black"
                            }`}
                        >
                          {row[col.key]}
                        </span>
                      ) : (col.key === "date" || col.key === "createdAt" || col.key === "updatedAt") ? (
                        formatDate(row[col.key])   
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  ))}

                  {showActions && (
                    <td className="px-6 max-sm:px-3 py-4 max-sm:py-2">
                      <div className="flex gap-2">
                        <button className="text-green-600 hover:text-green-800" onClick={() => onView(row)}>
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-800" onClick={() => onEdit(row)}>
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800" onClick={() => onDelete(row)}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-600 font-serif">
          Page {page + 1} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className="p-2 border border-gray-300 rounded disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
            className="p-2 border border-gray-300 rounded disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
