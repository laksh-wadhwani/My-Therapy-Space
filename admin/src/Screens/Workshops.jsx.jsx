import { Search } from "lucide-react";
import React from "react";
import CustomButton from "../Components/CustomButton";
import CustomTable from "../Components/CustomTable";

const Workshops = ({ isSidebarHovered }) => {

  const columns = [
        { key: "title", label: "Title" },
        { key: "facilitator", label: "Facilitator" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
  ];

  const workshopStatusStyles = {
    Active: "bg-green-100 text-green-700",
    Draft: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  const workshops = [
    {title: "Speech Therapy Workshop", facilitator: "Trish Hull", date: "2025-05-06", status: "Active"},
    {title: "Communication Development Workshop", facilitator: "Angeli", date: "2025-05-12", status: "Active"},
    {title: "Supporting Multilingual Workshop", facilitator: "Suman Rokka", date: "2025-05-22", status: "Draft"},
    {title: "Parent Training workshop", facilitator: "Ziaul-Haq", date: "2025-05-28", status: "Cancelled"},
    {title: "Speech Therapy Workshop", facilitator: "Trish Hull", date: "2025-05-06", status: "Active"},
    {title: "Communication Development Workshop", facilitator: "Angeli", date: "2025-05-12", status: "Active"},
    {title: "Supporting Multilingual Workshop", facilitator: "Suman Rokka", date: "2025-05-22", status: "Draft"},
    {title: "Parent Training workshop", facilitator: "Ziaul-Haq", date: "2025-05-28", status: "Cancelled"}
  ];

  return (
    <React.Fragment>
      <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

        <div className="w-full p-4 mt-12 border-b border-gray-200 flex flex-col gap-2">
          <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage workshops</h1>
          <p className="font-serif text-gray-500 text-base italic">create, edit and manage workshop listings for your websites</p>
        </div>

        <div className="w-full px-4 flex justify-between">
          <CustomButton>add new workshop</CustomButton>
        </div>

        <CustomTable title="Workshops" columns={columns} data={workshops} statusStyles={workshopStatusStyles} />

      </div>
    </React.Fragment>
  );
};

export default Workshops;
